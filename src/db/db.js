import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://gajendra:Gfg12345@cluster0.objw3po.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/testNode")
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err, "Database connection error");
    }
}

export default connectDB;