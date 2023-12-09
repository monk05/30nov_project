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
            res.json({msg:createUser,token:await createUser.generateToken(),userId:createUser._id.toString()});
            console.log("user created"); 
        }catch(error){ 

            console.log(error);
            process.exit(0);
        }
}

//login page 
const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        
        const userExist=await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const isPasswordValid=await bcrypt.compare(password,userExist.password);
        
        if(!isPasswordValid){
            return res.status(400).json({message:"invalid Credentials"});
        }else{
            res.status(200).json({
                msg:"logged in",
                token:await userExist.generateToken(),
                userId:userExist._id.toString(),
            }); 
        }

    }catch(error){
        console.log(error);
    }

}
module.exports={home,register,login}