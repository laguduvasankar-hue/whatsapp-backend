import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()
export const connetion=async()=>{
try {
    await mongoose.connect(process.env.Db_connection)
    console.log(`MongoDB is connected`)
} catch (error) {
    console.log("MongoDB connection error", error.message)
}
}