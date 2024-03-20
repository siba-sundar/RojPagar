import mongoose from 'mongoose';

const { Schema } = mongoose;

const jobApplicationSchema = new Schema({
    workerUsername: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    jobListId: {
        type: Schema.Types.ObjectId,
        ref: 'JobList',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'], // Example status values
        default: 'pending' // Default status
    },
    agreedPrice: {
        type: Number // Assuming agreed price is a numeric value
    },
    pickupLocation: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'unpaid'], // Example payment status values
        default: 'pending' // Default payment status
    }
});

export const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);
