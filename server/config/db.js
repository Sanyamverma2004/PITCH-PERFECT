import mongoose from "mongoose";
import express from "express"
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");
    }catch(error){
        console.log(`error in database connection ${error}`)
    }
}
export default connectDB