const Contact=require("../model/contact-model");

const contact= async(req,res)=>{
    try{
        const response=req.body;
        await Contact.create(response);
        return res.status(200).json({message:"message sent successfully"});

    }catch(error){
        console.log(error);
        res.json({message:"message not delivered"})

    }
}
module.exports ={contact}