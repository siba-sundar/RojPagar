import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Push again
const userSchema = new mongoose.Schema(
  {
    username: {
      // Aadhar Number
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["worker", "recruiter", "admin"], // ✅ Added admin role
      required: true,
    },
    profilePicture: {
      type: String, // ✅ Store URL of the uploaded image
      default: "https://example.com/default-profile.png",
    },
    email: {
      type: String, // ✅ Added email for communication
      unique: true,
      sparse: true,
    },
    phone: {
      type: String, // ✅ Added phone number field
      unique: true,
      sparse: true,
    },
    skills: {
      type: [String], // ✅ Stores worker skills for job matching
      default: [],
    },
    experience: [
      {
        company: String,
        jobTitle: String,
        duration: String, // e.g., "2 years"
      },
    ], // ✅ Added work experience for workers
    location: {
      city: { type: String, required: false },
      country: { type: String, required: false },
    },
    refreshToken: {
      type: String,
    },
    notifications: [notificationSchema], // Stores notifications for the user
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      fullName: this.fullName,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
export const Notification = mongoose.model("Notification", notificationSchema);
