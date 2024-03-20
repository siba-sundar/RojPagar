import mongoose from 'mongoose';

const { Schema } = mongoose;

const hirerSchema = new Schema({
    // _id: Schema.Types.ObjectId, // Automatically generated primary identifier
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true // Allows for multiple null values, ensuring uniqueness
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        sparse: true // Allows for multiple null values, ensuring uniqueness
    },
    ratings: {
        type: [Number], // Array to store multiple ratings
        default: [], // Default value as an empty array
        validate: { // Custom validation to ensure ratings are between 1 and 5
            validator: function (value) {
                return value.every(rating => rating >= 1 && rating <= 5);
            },
            message: 'Ratings must be between 1 and 5'
        }
    }
    // lastWorkPayment: {
    //     type: Date // Timestamp of the last work payment done
    // }
    
}, { timestamps: true });


export const Hirer = mongoose.model('Hirer', hirerSchema);
