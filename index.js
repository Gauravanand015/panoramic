const  exp = require("express");
const { connection } = require("./config/db");
require("dotenv").config()
const fileUpload = require("express-fileupload");
const { productRoute } = require("./Router/productRoute");
const app = exp();

app.use(exp.json());

app.use(fileUpload({
    useTempFiles:true
}))

app.use("/product",productRoute)

app.use("/",(req,res)=>{
    res.send("Get all the data for home-page")
})



app.listen(process.env.Port,async ()=>{
    try {
        await connection
        console.log("Connected to DataBase")
    } catch (error) {
        console.log(error)
    }
    console.log("Connedted to server");
})