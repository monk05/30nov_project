const jwt =require("jsonwebtoken");
const User=require("../model/user-model")

const authMiddleware=async(req,res,next)=>{
    const token=req.header('Authorization'); //not headers
    if(!token){
        return res.status(401).json({message:"unauthorized HTTP"})
    }
    const jwtToken=token.replace("Bearer", "").trim();
    //console.log(jwtToken);
    try{
        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
        //console.log(isVerified)

        const userData=await User.findOne({email:isVerified.email}).select({password:0,})// to get all the data 
        req.user=userData;
        req.token=token;
        req.userId=userData._id
        next();

    }catch(error){
        console.log("error check",error)
    }

}

module.exports=authMiddleware;