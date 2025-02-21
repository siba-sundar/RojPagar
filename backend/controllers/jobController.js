import { Job } from "../models/Job.js";
import { User } from "../models/User.js";

/**
 * @desc Create a Job
 * @route POST /api/jobs
 */
export const createJob = async (req, res) => {
    try {
        const { title, description, salary, location, requiredSkills } = req.body;

        // Ensure only recruiters can post jobs
        const recruiter = await User.findById(req.user._id);
        if (!recruiter) return res.status(401).json({ message: "Unauthorized" });

        // Create job
        const job = new Job({
            title,
            description,
            salary,
            location,
            requiredSkills,
            recruiter: req.user._id
        });

        await job.save();
        res.status(201).json({ message: "Job posted successfully", job });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc Get all Jobs
 * @route GET /api/jobs
 */
export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate("recruiter", "fullName email");
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc Update a Job
 * @route PUT /api/jobs/:id
 */
export const updateJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        // Check if job exists
        if (!job) return res.status(404).json({ message: "Job not found" });

        // Check if recruiter is the owner
        if (job.recruiter.toString() !== req.user._id)
            return res.status(403).json({ message: "Not authorized" });

        // Update job fields
        Object.assign(job, req.body);
        await job.save();

        res.json({ message: "Job updated successfully", job });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc Delete a Job
 * @route DELETE /api/jobs/:id
 */
export const deleteJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) return res.status(404).json({ message: "Job not found" });

        if (job.recruiter.toString() !== req.user._id)
            return res.status(403).json({ message: "Not authorized" });

        await job.deleteOne();
        res.json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
