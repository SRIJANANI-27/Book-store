import mongoose from "mongoose";
import { db } from "./config.js";

const connectdb = async()=>{
    try{
        await mongoose.connect(db);
        console.log("db is connected");
    }
    catch(err){
        console.log(err);
    }
}

export default connectdb;