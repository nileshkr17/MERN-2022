const express = require('express');
const fs = require('fs');
const app = express();
const port = 6969;

app.get('/',(req,res)=>{
    try{
             const courses = JSON.parse(fs.readFileSync('courses.json'));
             return res.status(200).json({
                message:"Courses fetched succesfully",
                 courses  
            })

    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message //err.response.data
        })
        
    }
})
