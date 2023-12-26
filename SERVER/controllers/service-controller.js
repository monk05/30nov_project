const express=require("express");
const Service=require("../model/service-model")

const services=async(req,res)=>{
    try{
        const response=await Service.find();
        if(!response){
            res.status(400).json({msg:"no services found"})
        }
        res.status(200).json({msg:response})


    }catch(error){
        console.log("Services error")
    }
}

module.exports=services;