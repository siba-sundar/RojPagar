import dotenv from 'dotenv';
import Applicant from '../models/Applicant';
import Company from '../models/Company';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const registerUser = async (req, res) => {
    try {
        const { userName, password, confirmPassword, email, location, phoneNumber, type } = req.body;

        if (type === 'applicant') {
            // Check if passwords match
            if (password !== confirmPassword) {
                return res.json({ success: false, message: "Passwords do not match" });
            }

            const userN = await Applicant.findOne({ userName });
            if (userN) {
                return res.json({ success: false, message: 'User Already Exists' });
            }

            const salt = await bcrypt.genSalt(10);
            const securedPassword = await bcrypt.hash(password, salt);

            const account = await Applicant.create({
                userName,
                password: securedPassword,
                location,
                phoneNumber
            });

            if (!account) {
                return res.json({ success: false, message: 'Error creating an account' });
            }

            return res.json({ success: true, message: "Account created successfully" });
        } else if (type === 'company') {
            // Check if passwords match
            if (password !== confirmPassword) {
                return res.json({ success: false, message: "Passwords do not match" });
            }

            const companyMail = await Company.findOne({ email });
            if (companyMail) {
                return res.json({ success: false, message: "User already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const securedPassword = await bcrypt.hash(password, salt);

            const account = await Company.create({
                userName,
                email,
                password: securedPassword,
                location,
                phoneNumber
            });

            if (!account) {
                return res.json({ success: false, message: "Error creating account." });
            }

            return res.json({ success: true, message: "Account created successfully" });
        }
    } catch (error) {
        console.log(error.message);
        return res.json({ status: "error", message: "Some error occurred" });
    }
};



const loginUser = async (req, res) => {
    try {
        const { userName, email, password, type } = req.body

        if (type === "applicant") {
            const user = await Applicant.findOne({ email })
            if (!user) {
                return res.json({ success: false, message: "User doesn't exists" });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.json({ success: false, message: "Invalid password" });
            }
            const data = { //something related to JWT auth idk
                user:
                {
                    id: user._id
                }
            }
            const authtoken = jwt.sign(data, process.env.JWT_SECRET_KEY);
            return res.status(201).json({ success: true, token: authtoken });
        } else if (type === "company") {
            const user = await Company.findOne({ email })
            if (!user) {
                return res.json({ success: false, message: "User doesn't exists!!" });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.json({ success: false, message: "Invalid password!!" });
            }
            const data = {
                user: {
                    id: user._id
                }
            }
            const authtoken = jwt.sign(data, process.env.JWT_SECRET_KEY);
            return res.status(201).json({ success: true, token: authtoken });
        }

    } catch (error) {
        console.log(error.message)
        return res.json({ status: "error", message: "Error logging in" })
    }
}

const getApplicant = async (req, res) => {
    try {
        const user_id = new ObjectId(req.params.id)//idk strike off kyu aa raha hai
        const user = await Applicant.findOne({ _id: user_id }).select('-password')
        if (!user) {
            return res.json({ success: false, message: "User not found." })
        }
        res.json({ success: true, data: user })
    } catch (error) {
        console.log(error.message)
        res.json({ status: "error", message: "Can't get applicant" })
    }
}

const getCompany = async (req, res) => {
    try {
        const user_id = new ObjectId(req.params.id)//idk strike off kyu aa raha hai
        const user = await Company.findOne({ _id: user_id }).select('-password')
        if (!user) {
            return res.json({ success: false, message: "User not found." })
        }
        res.json({ success: true, data: user })
    } catch (error) {
        console.log(error.message)
        res.json({ status: "error", message: "Can't get Company." })
    }
}

module.exports = { registerUser, loginUser, getApplicant, getCompany };


