import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

/**
 * @desc Register a new user
 * @route POST /api/auth/register
 */
export const registerUser = async (req, res) => {
    try {
        const { username, fullName, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Create new user
        const user = new User({ username, fullName, password });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc Login user and return tokens
 * @route POST /api/auth/login
 */
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        // Check password
        const isMatch = await user.isPasswordCorrect(password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        // Generate tokens
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // Save refresh token to user
        user.refreshToken = refreshToken;
        await user.save();

        res.json({ accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc Refresh access token
 * @route POST /api/auth/refresh-token
 */
export const refreshAccessToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) return res.status(403).json({ message: "Refresh token required" });

        const user = await User.findOne({ refreshToken });
        if (!user) return res.status(403).json({ message: "Invalid refresh token" });

        // Verify refresh token
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(403).json({ message: "Invalid refresh token" });

            const newAccessToken = user.generateAccessToken();
            res.json({ accessToken: newAccessToken });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * @desc Logout user (remove refresh token)
 * @route POST /api/auth/logout
 */
export const logoutUser = async (req, res) => {
    try {
        const { username } = req.body;
        await User.updateOne({ username }, { $unset: { refreshToken: 1 } });
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
