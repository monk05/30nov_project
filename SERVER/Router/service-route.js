const express=require("express");
const Router=express.Router();
const services=require("../controllers/service-controller")

Router.route("/service").get(services)

module.exports=Router;