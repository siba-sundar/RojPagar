import { User } from "../models/User.js";

/**
 * @desc Send a notification to a user
 * @param {string} userId - ID of the user receiving the notification
 * @param {string} message - Notification message
 * @param {string} type - Type of notification (default: "general")
 */
export const sendNotification = async (userId, message, type = "general") => {
  try {
    await User.findByIdAndUpdate(userId, {
      $push: {
        notifications: { message, type, isRead: false, createdAt: new Date() },
      },
    });
  } catch (error) {
    console.error("❌ Error sending notification:", error.message);
  }
};

/**
 * @desc Get all notifications for a user
 * @route GET /api/notifications
 */
export const getNotifications = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("notifications");

    if (!user || !user.notifications.length) {
      return res.status(404).json({ message: "No notifications available" });
    }

    // Sort notifications by latest first
    const sortedNotifications = user.notifications.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.status(200).json({
      notifications: sortedNotifications.map((notification) => ({
        message: notification.message,
        type: notification.type,
        isRead: notification.isRead,
        createdAt: notification.createdAt,
      })),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching notifications", error: error.message });
  }
};

/**
 * @desc Mark notifications as read
 * @route PUT /api/notifications/mark-read
 */
export const markNotificationsAsRead = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      $set: { "notifications.$[].isRead": true },
    });
    res.status(200).json({ message: "All notifications marked as read" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error marking notifications", error: error.message });
  }
};
