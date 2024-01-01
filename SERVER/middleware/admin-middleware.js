//to check wether the logged in user is admin or not 

const adminMiddleware=async(req,res,next)=>{
    try{
        const checkAdmin=await req.user.isAdmin;
        if(checkAdmin ===true){
            next();

        }
        else{
            res.status(404).json({message:"not admin"})
        }
        
    }catch(error){
        next(error);
    }
}

module.exports=adminMiddleware;