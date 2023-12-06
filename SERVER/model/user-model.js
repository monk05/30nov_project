const mongoose=require("mongoose");
const bcrypt=require("bcrypt")

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

userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified("password")){
    }
       
    try{
        const saltRound=await bcrypt.genSalt();
        const hash_password=await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
    }catch(error){
        console.log(error)
    }
})

const User=new mongoose.model("User",userSchema) // "User"---> collection name(1st alpha capital always ) , userSchema--> structure in collection 

module.exports=User;