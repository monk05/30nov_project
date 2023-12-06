const express=require("express");

const app = express();
const db=require("./utilities/db");
const connect_DB = require("./utilities/db");
//const routes=require("./Router/auth-routes")
const port=process.env.PORT;
app.use(express.json()) //middle ware to get data from postman 
app.use(require("./Router/auth-routes"))

connect_DB().then(()=>{
    app.listen(port,()=>{
        console.log(`server running at port : ${port}`)
    })
});