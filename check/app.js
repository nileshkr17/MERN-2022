const express = require('express');
const courseRoutes = require('./routes/course'); 
const app = express();


const port = 2000;
app.use(express.json())
app.use(courseRoutes);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})