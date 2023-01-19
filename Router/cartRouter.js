const exp = require("express");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { ProductModel } = require("../model/productsModel");
const { CartModel } = require("../model/cartModel");
const cartRouter = exp.Router()
require("dotenv").config();

// cartRouter.get("/getCartData/:id",async(req,res)=>{
//     const userID = req.params.id
//     try {
//         if(userID){
//             const cartData = await CartModel.find({userID:userID})
//             res.send("getting all cart data of specific user!!")
//         }else{
//             res.send("Something Went Wrong!!")
//         }
//     } catch (error) {
//         res.send("Kuch GadBhad")
//     }
// })

cartRouter.post("/itemPostatCart/:product_id",async(req,res)=>{
    const pro_id = req.params.product_id;
    const product_data = await ProductModel.find({product_id:pro_id})
    const token = req.headers.authorization
    const decoded = jwt.verify(token, process.env.userSecretKey);
    product_data[0].userID = decoded.userID
        // res.send(decoded)
    // res.send(product_data)
    try {
        if(product_data[0].product_id==pro_id){
            console.log(product_data)
            const addToCart = await CartModel.insertMany(product_data[0])
            // await addToCart.save()
            console.log(addToCart)
            res.send("Add to the Cart")
        }else{
            res.send("Stock is not available")
        }
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})

module.exports={
    cartRouter
}