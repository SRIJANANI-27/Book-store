import mongoose from "mongoose";

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishyear:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
}
)
export const Book = mongoose.model("Book",schema)