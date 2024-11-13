import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`);
    console.info("Mongodb Successfully Connected")
  } catch (error) {
    console.error("Error connecting to mongodb server:", error);
    process.exit(1);
  }
};

export default connectDB;

