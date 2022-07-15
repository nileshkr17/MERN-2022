const express = require('express');
const fs = require('fs');
const app = express();//creating instance
const port = 1234;

app.get('/',(req,res)=> {
    console.log(req.params);//will print only requested :h and :w
    h = req.params.h;
    const totalItemInCart =JSON.parse(fs.readFileSync("cart.json"));
    const searchItemInCart = totalItemInCart.filter(item=>item.h == h);
    console.log(checkItem);//will print fetched height only
    res.status(200).json({
      message:"Retrived data",
      data: searchItemInCart //will give the height which is present
    })
    
  })
  

app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
})