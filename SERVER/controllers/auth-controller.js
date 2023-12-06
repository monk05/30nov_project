const express=require("express")
const User = require("../model/user-model")
const bcrypt=require("bcrypt")
//home page
const home = async(req,res)=>{
    try{
        
            res.send({msg:"this is home "})
        

    }catch(error){
        console.log(error)
        res.status(400).send({msg:"page not found"})
    }
}

// register page 
const register= async(req,res)=>{
    try{    
            const { username,email,phone,password}=req.body;
            const userExist= await User.findOne({email});
            if(userExist){
                return res.status(400).json({msg:"email already exist"});
            }
            //hashing the password type 1
            //const saltRound=10;
            //const hash_password=await bcrypt.hash(password,saltRound);
            //const createUser=await User.create({username,email,phone,password:hash_password})
            const createUser=await User.create({username,email,phone,password})
            res.json({createUser})
            console.log("user created")
        }catch(error){ 

            console.log(error);
            process.exit(0);
        }
}

module.exports={home,register}