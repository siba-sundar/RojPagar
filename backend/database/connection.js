require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connectToDatabase = () => {
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const dbConnection = mongoose.connection;

        dbConnection.on("error", (err) => {
            console.error(`Connection Error: ${err}`);
        });

        dbConnection.once("open", () => {
            console.log("Connected to DB!");
        });
    } catch (err) {
        console.error("Could not connect:", err);
    }
};

module.exports = connectToDatabase;

