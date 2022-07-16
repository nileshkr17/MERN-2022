const express = require('express');
const cartRoutes = require('./routes/cart'); 
const app = express();


const port = 4672;
app.use(express.json())
app.use(cartRoutes);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})