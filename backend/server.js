import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
 // Enable cookies


import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js"; // ✅ Import protected routes
import jobRoutes from "./routes/jobRoutes.js";
import jobApplicationRoutes from "./routes/jobApplicationRoutes.js"
import recommendationRoutes from "./routes/recommendationRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
dotenv.config();
// Push again 
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes); // ✅ Integrated protected routes
app.use("/api/jobs", jobRoutes);
app.use("/api/jobs", jobApplicationRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/notifications", notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));