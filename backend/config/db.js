import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("MongoDb connected success "+conn.connection.host);
    }
    catch(error){
        console.error("Error connecting the MongoDB "+ error.message)
        process.exit(1);//error
    }
}