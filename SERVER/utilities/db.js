//web link of mongo db = https://cloud.mongodb.com/v2/656d73469742841176366dac#/clusters
require("dotenv").config()
const mongoose=require("mongoose");
const db=process.env.DB
const connect_DB=async()=>{
   try{
    await mongoose.connect(db);
    console.log("database connected")
   }catch(error){

     process.exit(0); //to close program
   }
}
module.exports = connect_DB;