import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err, "Database connection error");
    }
}

export default connectDB;