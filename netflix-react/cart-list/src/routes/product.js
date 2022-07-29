//product.js api
const express= require('express')

const { Product } = require('../models/Product')
// const Auth = require('../middlewares/Auth')
const router= express.Router()

router.get('/',async (req,res)=>{
        let products= await Product.find()
        try{
        if(products==''){
            return res.status(400).json({
                message:`No Content available`
            })
            
        }else{
            return res.status(200).json({
                message:`Product retrieved successfully`,
                products
            })
        }
        
    }
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
    })
    }
    
})

router.post("/addProduct",async(req,res)=>{
    
        // console.log('Reached the addProduct route');
        let {productName,productPrice,productImage,productCreatedBy}= req.body
        
        if(productName=='' || productName== undefined)
        {
            error='Missing Product Name'
            res.status(400).json({
                message:error
            })
        }
        if(productPrice=='' || productPrice== undefined)
        {
            error='Missing Product Price'
            res.status(400).json({
                message:error
            })
        }
        if(productCreatedBy=='' || productCreatedBy== undefined)
        {
            error='Missing Product Description'
            res.status(400).json({
                message:error
            })
        }
        
              
        let productObject ={
            productName,
            productPrice,
            productImage,
            productCreatedBy
        }
        
        let product =new Product(productObject)
        let data= await product.save()
        try{
        res.status(200).json({
            message:"Data saved successfully",
            data
        })
        }
        
    catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})


router.put("/update/:id",async(req,res)=>{
    try{
        let id=req.params.id
        let {productName,productPrice,productCreatedBy,productImage}= req.body


        let product=await Product.findByIdAndUpdate(id,req.body)
        if(product){
            
            product.productName=productName
            product.productPrice=productPrice
            product.productImage=productImage
            product.productCreatedBy=productCreatedBy
            let data=await product.save()
            return res.status(200).json({
                message:`Product updated successfully`,
                data
            })
            
        }else{
            
            return res.status(400).json({
                message:`No Content available`
            })
            
        }
        

    }
    catch(err){
        res.status(500).json({
            message:"Something went wrong",
                error:err.message
        })
    }
    
})

router.get('/:name',async(req,res)=>{
    try{
        let productName= req.params.productName
        let product = await Product.findOne({productName:req.params.name})
        if(productName=='' || productName==undefined){
            return res.status(204).json({
                message:`No Content available`
            })
            
        }else{
            return res.status(200).json({
                message:`Product retrieved successfully`,
                product
            })
        }
        

    }
    catch(err){
        res.status(500).json({
            message:"Something went wrong",
                error:err.message
        })
    }
}
)

router.delete('/delete/:id',async(req,res)=>{
    try{
        let id= req.params.id
        let product = await Product.findById(id)
        if(product){
            await Product.findByIdAndDelete(id)
            return res.status(200).json({
                message:"Data deleted successfully",
                product
            })
            
        }
        
        else{
            return res.status(204).json({
            message:"No Content found"
        })
    }

    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
                error:err.message
        })

    }
})

module.exports=router