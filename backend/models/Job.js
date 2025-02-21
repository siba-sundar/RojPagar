import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        requiredSkills: {
            type: [String], // Array of skills
            required: true
        },
        recruiter: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to User model (Recruiter)
            required: true
        },
        applicants: [
            {
                worker: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User" // Reference to Worker
                },
                status: {
                    type: String,
                    enum: ["applied", "accepted", "rejected"],
                    default: "applied"
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

export const Job = mongoose.model("Job", jobSchema);
