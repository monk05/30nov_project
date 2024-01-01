const express=require("express")
const Router=express.Router();
const adminData=require("../controllers/admin-controller")

const authmiddleware=require("../middleware/auth-middleware");
const adminMiddleware=require("../middleware/admin-middleware")

Router.route("/admin/users").get(authmiddleware,adminMiddleware,adminData.getAllUsers); //adding middleware to check wether admin or not
Router.route("/admin/contact").get(authmiddleware,adminData.getAllContact);


module.exports=Router;