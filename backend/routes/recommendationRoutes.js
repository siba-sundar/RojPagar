import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { recommendJobs } from "../controllers/recommendationController.js";

const router = express.Router();

// ✅ Get job recommendations for workers
router.get("/jobs", authMiddleware, recommendJobs);

export default router;
// Push again
