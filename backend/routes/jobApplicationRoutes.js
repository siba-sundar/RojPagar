import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { applyForJob, getJobApplications, updateApplicationStatus } from "../controllers/jobApplicationController.js";

const router = express.Router();

// ✅ Apply for a job (Worker)
router.post("/:jobId/apply", authMiddleware, applyForJob);

// ✅ Get all applications for a job (Recruiter)
router.get("/:jobId/applications", authMiddleware, getJobApplications);

// ✅ Update application status (Recruiter)
router.put("/:jobId/applications/:workerId", authMiddleware, updateApplicationStatus);

export default router;
