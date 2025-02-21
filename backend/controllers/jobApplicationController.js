import { Job } from "../models/Job.js";
import { User } from "../models/User.js";

/**
 * @desc Apply for a job
 * @route POST /api/jobs/:jobId/apply
 */
export const applyForJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const workerId = req.user._id;

        // Check if job exists
        const job = await Job.findById(jobId);
        if (!job) return res.status(404).json({ message: "Job not found" });

        // Check if user is a worker (not recruiter)
        const worker = await User.findById(workerId);
        if (!worker) return res.status(401).json({ message: "Unauthorized" });

        // Check if worker has already applied
        const alreadyApplied = job.applicants.some(applicant => applicant.worker.toString() === workerId);
        if (alreadyApplied) return res.status(400).json({ message: "Already applied for this job" });

        // Add worker to job applicants
        job.applicants.push({ worker: workerId });
        await job.save();

        res.status(200).json({ message: "Job application submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc Get all applicants for a job
 * @route GET /api/jobs/:jobId/applications
 */
export const getJobApplications = async (req, res) => {
    try {
        const { jobId } = req.params;

        // Check if job exists
        const job = await Job.findById(jobId).populate("applicants.worker", "fullName email");
        if (!job) return res.status(404).json({ message: "Job not found" });

        // Check if recruiter owns this job
        if (job.recruiter.toString() !== req.user._id)
            return res.status(403).json({ message: "Not authorized to view applications" });

        res.status(200).json({ applicants: job.applicants });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc Update application status (Accept/Reject)
 * @route PUT /api/jobs/:jobId/applications/:workerId
 */
export const updateApplicationStatus = async (req, res) => {
    try {
        const { jobId, workerId } = req.params;
        const { status } = req.body;

        if (!["accepted", "rejected"].includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        // Check if job exists
        const job = await Job.findById(jobId);
        if (!job) return res.status(404).json({ message: "Job not found" });

        // Check if recruiter owns this job
        if (job.recruiter.toString() !== req.user._id)
            return res.status(403).json({ message: "Not authorized" });

        // Find the application and update status
        const applicant = job.applicants.find(app => app.worker.toString() === workerId);
        if (!applicant) return res.status(404).json({ message: "Application not found" });

        applicant.status = status;
        await job.save();

        res.status(200).json({ message: `Application status updated to ${status}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
