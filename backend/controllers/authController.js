import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Generate Access Token
const generateAccessToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            username: user.username,
            fullName: user.fullName
        },
        process.env.ACCESS_TOKEN_SECRET, // Secret key from .env
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY } // Expiry time (e.g., 15m)
    );
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
    return jwt.sign(
        { _id: user._id },
        process.env.REFRESH_TOKEN_SECRET, // Secret key from .env
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY } // Expiry time (e.g., 7d)
    );
};

/**
 * @desc Register a new user
 * @route POST /api/auth/register
 */
export const registerUser = async (req, res) => {
    try {
        const { 
            fullName, 
            aadharCard, 
            phoneNumber, 
            password, 
            location, 
            userType, 
            preferredJobs 
        } = req.body;

        // Check if user already exists (using phone number as username)
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) return res.status(400).json({ message: "User with this phone number already exists" });

        // Handle profile picture if it exists
        let profilePicturePath = null;
        if (req.file) {
            profilePicturePath = req.file.path; // Assuming you'll use multer for file uploads
        }

        // Create new user
        const user = new User({ 
            fullName, 
            aadharCard, 
            phoneNumber, 
            password, 
            location, 
            userType, 
            preferredJobs,
            profilePicture: profilePicturePath
        });
        
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "registration error", error: error.message });

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
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        // Save refresh token in DB
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

            // Generate a new access token
            const newAccessToken = generateAccessToken(user);
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
