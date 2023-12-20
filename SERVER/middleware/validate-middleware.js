const validate=(schema)=>async(req,res,next)=>{
    try{
        const parseBody=await schema.parseAsync(req.body); // to check whether the entered data by user matched with the schema or not 
        req.body=parseBody;
        next();

    }catch(err){
        //const message=err.errors[0].message //give by zod validator
       // console.log(message)
        //res.status(400).json({msg:message})
        const status=400;
        const message=" fill details correctly";
        const extraDetails=err.errors[0].message; //by zod validator

        const error={
            status,message,extraDetails,
        }; 
        console.log(error);

        next(error); //give data to error middleware to handle error
    }


};

module.exports=validate