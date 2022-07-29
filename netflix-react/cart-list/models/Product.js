//Product.js model
const mongoose = require('mongoose')
const Schema= mongoose.Schema
const productSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productCreatedBy:{
        type:String,
        required:true
    }

},{timestamps:true})

exports.Product = mongoose.model('product',productSchema)