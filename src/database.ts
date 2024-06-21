import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log('MONGODB_URI:', process.env.MONGODB_URI!); 

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;

