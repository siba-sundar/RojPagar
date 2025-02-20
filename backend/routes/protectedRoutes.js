import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: `Welcome, ${req.user.fullName}! This is a protected route.` });
});

export default router;
