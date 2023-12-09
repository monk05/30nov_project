const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true

    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});
//hashing

userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified("password")){
        next();
    }
       
    try{
        const saltRound=await bcrypt.genSalt();
        const hash_password=await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
    }catch(error){
        console.log(error)
    }
})

//json web token 

userSchema.methods.generateToken= async function(){ //instance method 
    try{
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d", //optional it means token will expire in 30 days
            }

        );

    }catch(error){
        console.error(error)
    }
}; 



const User=new mongoose.model("User",userSchema) // "User"---> collection name(1st alpha capital always ) , userSchema--> structure in collection 

module.exports=User;