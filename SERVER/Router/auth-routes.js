const express=require("express");
const Router=express.Router();
const authcontroller=require("../controllers/auth-controller") // seperate home ,register ,... can be made but to reduce the work one name (authcontroller is used)
const signupSchema=require("../validators/auth-validator")
const validate=require("../middleware/validate-middleware")
const authMiddleware=require("../middleware/auth-middleware")

Router.route("/").get(authcontroller.home)
Router.route("/register").post(validate(signupSchema),authcontroller.register);
Router.route("/login").post(authcontroller.login);

Router.route("/user").get(authMiddleware,authcontroller.user)


module.exports=Router;