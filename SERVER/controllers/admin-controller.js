const express=require("express")
const User=require("../model/user-model")
const Contact=require("../model/contact-model")


//to get user data from user model
const getAllUsers=async(req,res)=>{
    try{
            const users =await User.find().select({password:0});//to get all the data from collection in database
            console.log(users)
            if(!users || users.length === 0){
                return res.status(404).json({message:"No user found"});
            }
            res.status(200).json(users);

    }catch(error){
        console.log(error);
    }

}

//to get contacts data from contact model

const getAllContact=async(req,res)=>{
    try{
        const contact=await Contact.find();
        if(!contact){
            res.status(404).json({message:"no data found"});
        }
        else{
            res.status(200).json(contact);
        }

    }catch(error){
        console.log(error)
    }
}

module.exports={getAllUsers,getAllContact}