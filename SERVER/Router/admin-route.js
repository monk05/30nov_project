const express=require("express")
const Router=express.Router();
const getAllUsers=require("../controllers/admin-controller")

Router.route("/admin/users").get(getAllUsers)


module.exports=Router;