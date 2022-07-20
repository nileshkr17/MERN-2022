const express = require('express');
const fs = require('fs');
const { v4: uuid_v4 } = require('uuid');
uuid_v4();
//const randomUrl = require('random-url');
const {Cart} = require('../a9/models/Cart');
const router = express.Router();

    
router.get("/",(req,res)=>
{
        try{
             Cart.find().then((result)=>{
                  return res.status(200).json({
                     message:"Course fetched successfully",
                     result
                     })
                 }).catch((err)=>{
                        return res.status(500).json({
                            message:"Something went wrong",
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
        
            
        
//add############################################
router.post("/addItem",(req,res)=>{
    try{
       

        const { productName, productPrice, productDesc, productDateOfPurchase,productImage } = req.body;
        if(productName=='' && error == ''){
            error="Missing CartItem Name";
            res.status(400).json({
                message:error
            })
        }
        if(productPrice=='' && error == ''){
            error="Missing CartItem Price"
            res.status(400).json({
                message:error
            })
        }
       const cartObj ={
        productName,
        productPrice,
        productDesc,
        productDateOfPurchase,
        productImage
       }
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
router.put("/update/:id", (req, res) => {
    var productName = req.params.productName;
    var { id,productName,productPrice,productDesc,productDateOfPurchase,productImage } = req.body;
    let itemsArr = JSON.parse(fs.readFileSync('cart.json'));
    itemsArr = itemsArr.filter(items => items.productName != productName);
    itemsArr = [...itemsArr, { id,productName,productPrice,productDesc,productDateOfPurchase,productImage}];

    fs.writeFile("cart.json", JSON.stringify(itemsArr), (err) => {
        if (err)
            return res.status(500).json({
                message: "something went wrong",
                error: err
            })
        return res.status(200).json({
            message: "cart item updated sucessfully",
        })
    })
})


//delete##########################################
router.delete('/deleteItem/:productName' , (req,res)=>{
    const itemName = req.params.productName;
    let items = JSON.parse(fs.readFileSync('cart.json'));
    let deleted = items.filter(item=>item.productName == itemName);
    items = items.filter(item=>item.productName!= itemName);

    fs.writeFile('cart.json', JSON.stringify(items) ,(err)=>{
        if(err)
            res.status(500).json({
            message:"something went wrong",
            error:err.message
        })

    })
    res.status(200).json({
        message :"deleted data",
        deletedItem : deleted,
        data: items
    })

})


 module.exports = router