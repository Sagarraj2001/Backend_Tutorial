const express=require("express");
const users=require("../Controller/DataController");

const router=express.Router()
router.get("/user",users.fetch); //fetch the all data
// router.get("/user/:id",users.fetchId);  //fetching the data using id
router.post("/user",users.createData); //create new data

module.exports=router
