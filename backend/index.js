import express from "express";
import { port } from "./config.js";
import connectdb from "./db.js";
import router from "./routes/routes.js";
import cors from "cors";


const app = express();
app.use(cors())
app.use(express.json())
app.use("/books",router);



app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log("server is running");
})

connectdb();