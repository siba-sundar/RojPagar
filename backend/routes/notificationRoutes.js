import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getNotifications,
  markNotificationsAsRead,
} from "../controllers/notificationController.js";

const router = express.Router();

// ✅ Get all notifications for the logged-in user
router.get("/", authMiddleware, getNotifications);

// ✅ Mark all notifications as read
router.put("/mark-read", authMiddleware, markNotificationsAsRead);

export default router;
// Push again
