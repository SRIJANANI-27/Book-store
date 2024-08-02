import { Book } from "../models/model.js";


export const getallbook = async(req,res,next)=>{
    let book;
    try{
        book = await Book.find() 
        
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(400).json({message : "no book found"})
    }
    return res.status(200).json({
        count:book.length,book})
        
}  



export const getbookbyid = async(req,res,next)=>{
    let book;
    let id = req.params.id;
    try{
        book = await Book.findById(id) 
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(400).json({message : "no book found"})
    }
    return res.status(200).json({book})
   
}  



export const addbook = async(req,res)=>{
    const{title,author,publishyear}=req.body
    const newbook = new Book({
        title,author,publishyear
    })
    try{
         await newbook.save(); 
        } catch (err) {
            console.log("err");
            
        }
        return res.status(201).json({newbook}); 
    };


export const updatebook = async(req,res)=>{
    let book
    const{title,author,publishyear}=req.body;
    let id = req.params.id;
    try{
        book = await Book.findByIdAndUpdate(id,{
            title,author,publishyear
        })
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"no book found in this id"})
    }
    return res.status(200).json({message : "updated successfully"})
}

export const deletebook = async(req,res)=>{
    let book
    let id = req.params.id;
    try{
        book = await Book.findByIdAndDelete(id)
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"no book found in this id"})
    }
    return res.status(200).json({message : "deleted successfully"})
    
}