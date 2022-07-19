const express = require('express');
const fs = require('fs');
const { v4: uuid_v4 } = require('uuid');
uuid_v4();
const randomUrl = require('random-url');
const {Cart} = require('../Cart')
const router = express.Router();
router.get('/',(req,res)=>{
    try{
        const filearray = fs.readdirSync(__dirname);
        console.log(filearray);
        console.log(__dirname);
        let productItem = [];
        let message = '';
        if(filearray.includes('cart.json'))
          productItems = JSON.parse(fs.readFileSync('cart.json'));
        if(productItems.length > 0) 
              message = 'productItem fetched successfully';
        else
              message = 'No productItem found';      
        return res.status(200).json({
          message:message,
          productItem
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})

//add############################################
router.post("/addItem",(req,res)=>{
    try{
        const filearray = fs.readdirSync(__dirname);
        console.log(__dirname);
        let productItem = [];
        let error = '';
        if(filearray.includes('\cart.json'))
            productItem = JSON.parse(fs.readFileSync('cart.json'));

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
        const cart = new Cart(uuid_v4(),productName,productPrice,productDesc,productDateOfPurchase,randomUrl());
        productItem = [...productItem,cart];

        fs.writeFile('cart.json',JSON.stringify(productItem),(err)=>{
            if(err)
                 res.status(500).json({
                    message:'Something wrong while writing',
                    error:err 
                })
            res.status(200).json({
                message:"Item(s) saved successfully",
                cart
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