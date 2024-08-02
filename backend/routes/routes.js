import express from "express";
import { addbook, deletebook, getallbook, getbookbyid, updatebook } from "../controller/controller.js";

const router = express.Router();

router.get("/",getallbook)  
router.get("/:id",getbookbyid)  //http://localhost:3000/book/66a4ff7b1d8412a71e39ace8
router.post("/addbook",addbook) //http://localhost:3000/book/addbook
router.put("/:id",updatebook)
router.delete("/:id",deletebook)
export default router;