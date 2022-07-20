const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  //34min day 12
const cartSchema = new Schema({
        productName:{
        type:String,
        required:true
         },
        productPrice:{
        type:Number,
        required:true
        },
        productDesc:{
        type:String,
        required:true
         },
        productDateOfPurchase:{
        type:Number,
        required:true
        },
        productImage:{
        type:String,
        required:false
        }
        
  
},{timestamps:true})
exports.Cart =mongoose.model('cart',cartSchema);