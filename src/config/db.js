import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.NEXT_PUBLIC_MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }

        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI); // no options needed
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
};

export default connectDB;
