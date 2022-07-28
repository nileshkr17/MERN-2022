const express = require('express');
const fs = require('fs');
const {Cart} = require('../models/Cart');
const router = express.Router();

    
router.get("/",async(req,res)=>
{
        try{
             const CartItem = await Cart.find();
             return res.status(200).json({
                message:"Cart items:",
                CartItem
             })
          }catch(err){
                     res.status(500).json({
                     message:"Something went wrong",
                     error:err.message
                 })
          }
        
           })
           
           
//add############################################
router.post("/add",(req,res)=>{
        const { ProductName, ProductPrice, ProductRating, ProductImage} = req.body;
        if(ProductName=='' && error == ''){
            error="Missing CartItem Name";
            res.status(400).json({
                message:error
            })
        }
        if(ProductPrice=='' && error == ''){
            error="Missing CartItem Price"
            res.status(400).json({
                message:error
            })
        }
       const cartObj ={
        ProductName,
        ProductPrice,
        ProductRating,
        ProductImage
       }
       try{
       const cart = new Cart(cartObj);
       cart.save().then((result)=>{
            return res.status(500).json({
                    message:"data saved",
                    result
                 })
       }).catch((err)=>{
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
        })
       })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})

//update#########################################
// router.put("/update/:id", (req, res) => {
//     var productName = req.params.productName;
//     var { id,productName,productPrice,productDesc,productDateOfPurchase,productImage } = req.body;
//     let itemsArr = JSON.parse(fs.readFileSync('cart.json'));
//     itemsArr = itemsArr.filter(items => items.productName != productName);
//     itemsArr = [...itemsArr, { id,productName,productPrice,productDesc,productDateOfPurchase,productImage}];

//     fs.writeFile("cart.json", JSON.stringify(itemsArr), (err) => {
//         if (err)
//             return res.status(500).json({
//                 message: "something went wrong",
//                 error: err
//             })
//         return res.status(200).json({
//             message: "cart item updated sucessfully",
//         })
//     })
// })
router.put("/update/:id",async(req,res)=>{
    
        const id = req.params.id;
        const {ProductName, ProductPrice, ProductRating, ProductImage} = req.body;
        let cart =await Cart.findById(id);
        cart.ProductName = ProductName;
        cart.ProductPrice = ProductPrice;
        cart.ProductRating = ProductRating;
        cart.ProductImage = ProductImage;
        try{
        await cart.save();
        return res.status(200).json({
            message:"Data updated successfully",
            cart
        })
    }catch(err){
        return res.status(400).json({
            message:"Something went during update operation",
            error:err.message
        })
    }

}) 

router.delete("/delete/:id",async(req,res)=>{
    try{
        let item =await Cart.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message:"Data Delete Operation done!",
            item
        })

    }catch(err)
        {
             return res.status(500).json({
            messsge: " Something went wrong during Delete operation",
            error:err.message
            })
        }   
})
//delete##########################################
// router.delete('/deleteItem/:productName' , (req,res)=>{
//     const itemName = req.params.productName;
//     let items = JSON.parse(fs.readFileSync('cart.json'));
//     let deleted = items.filter(item=>item.productName == itemName);
//     items = items.filter(item=>item.productName!= itemName);

//     fs.writeFile('cart.json', JSON.stringify(items) ,(err)=>{
//         if(err)
//             res.status(500).json({
//             message:"something went wrong",
//             error:err.message
//         })

//     })
//     res.status(200).json({
//         message :"deleted data",
//         deletedItem : deleted,
//         data: items
//     })

// })


 module.exports = router