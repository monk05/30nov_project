const express=require("express");

const app = express();
const db=require("./utilities/db");
const connect_DB = require("./utilities/db");
const errorMiddleware = require("./middleware/error-middleware");
//const routes=require("./Router/auth-routes")

app.use(express.json()) //middle ware to get data from postman 
const port=process.env.PORT;
app.use(require("./Router/auth-routes"))
app.use(require("./Router/contact-route"))

app.use(errorMiddleware); // postion matters 
connect_DB().then(()=>{
    app.listen(port,()=>{
        console.log(`server running at port : ${port}`)
    })
});