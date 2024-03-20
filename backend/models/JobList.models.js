import mongoose from 'mongoose';

const { Schema } = mongoose;

const jobListingSchema = new Schema({
    // id field is removed assuming you will use MongoDB's default _id as the unique identifier
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
        // Consider removing the enum constraint if location can have diverse values
    },
    jobType: {
        type: String,
        required: true
    },
    payment: {
        type: Number, // Assuming payment is a numeric value (e.g., amount in currency)
        required: true
    },
    hirerUsername: { // Renamed from agentUsername for clarity
        type: Schema.Types.ObjectId,
        ref: 'Hirer',
        required: true
    }
});

export const JobListing = mongoose.model('JobListing', jobListingSchema);
