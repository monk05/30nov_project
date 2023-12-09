const express=require("express");
const Router=express.Router();
const authcontroller=require("../controllers/auth-controller") // seperate home ,register ,... can be made but to reduce the work one name (authcontroller is used)

Router.route("/").get(authcontroller.home)
Router.route("/register").post(authcontroller.register);
Router.route("/login").post(authcontroller.login)

module.exports=Router;