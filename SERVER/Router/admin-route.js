const express=require("express")
const Router=express.Router();
const adminData=require("../controllers/admin-controller")

Router.route("/admin/users").get(adminData.getAllUsers);
Router.route("/admin/contact").get(adminData.getAllContact);


module.exports=Router;