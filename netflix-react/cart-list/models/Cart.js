const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  //34min day 12
const cartSchema = new Schema({
        ProductName:{
        type:String,
        required:true
         },
        ProductPrice:{
        type:Number,
        required:true
        },
        ProductRating:{
        type:String,
        required:true
         },
        ProductImage:{
        type:String,
        required:false
        }
        
  
},{timestamps:true})
exports.Cart =mongoose.model('cart',cartSchema);