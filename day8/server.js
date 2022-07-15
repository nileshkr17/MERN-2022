//const { response } = require('express');
const express = require('express');
const app = express(); //creating a instance
const fs = require('fs');
const port =7070;

 app.get('/getrectangle/:h',(req,res)=> {
  console.log(req.params);//will print only requested :h and :w
  h = req.params.h;
  const content =JSON.parse(fs.readFileSync("data.json"));
  const mathcheddata = content.filter(item=>item.h == h);
  console.log(mathcheddata);//will print fetched height only
  res.status(200).json({
    message:"Retrived data",
    data: mathcheddata //will give the height which is present
  })
  
})

app.get('/',(req,res)=>{

})
 
  app.listen(port,()=>{
   console.log(`Server started at port ${port}` );
  })