const jwt =require("jsonwebtoken");
const User=require("../model/user-model")

const authMiddleware=async(req,res,next)=>{
    const token=req.header('Authorization'); //not headers
    if(!token){
        return res.status(401),json({message:"unauthorized HTTP"})
    }
    const jwtToken=token.replace("Bearer", "").trim();
    try{
        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)

        const userData=await User.findone({email:isVerified.email}).select({password:0,})// to get all the data 
        req.user=userData;
        req.token=jwtToken;
        req.userId=userData._id

    }catch(error){
        console.log(error)
    }

}

module.exports=authMiddleware;