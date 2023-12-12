const z=require("zod");

const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be of atleast 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .min(3,{message:"Name must be of atleast 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"phone must be of atleast 10 characters"})
    .max(20,{message:"phone must not be more than 20 characters"}),
    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(6,{message:"password must be of atleast 6 characters"})
    .max(1024,{message:"password must not be more than 255 characters"}),
   
});

module.exports=signupSchema;