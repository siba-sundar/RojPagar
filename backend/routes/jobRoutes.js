import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createJob, getJobs, updateJob, deleteJob } from "../controllers/jobController.js";

const router = express.Router();

// ✅ Create a new job (Recruiter Only)
router.post("/", authMiddleware, createJob);

// ✅ Get all jobs (Accessible to Everyone)
router.get("/", getJobs);

// ✅ Update job (Recruiter Only)
router.put("/:id", authMiddleware, updateJob);

// ✅ Delete job (Recruiter Only)
router.delete("/:id", authMiddleware, deleteJob);

export default router;
