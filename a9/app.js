const express = require('express');
const {dbConn} = require('./config/db');
const cartRoutes = require('./cart1'); 

const app = express();


const port = 4672;
app.use(express.json())
app.use(cartRoutes);
dbConn();
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})