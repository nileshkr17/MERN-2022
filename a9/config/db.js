const mongoose = require('mongoose');
exports.dbConn =()=>{
    const dbURL = "mongodb+srv://nileshkr:silicon123@cluster0.99qxt.mongodb.net/coursedb?retryWrites=true&w=majority"
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{                 //warning 
    console.log('DB Cnnted')
}).catch((err)=>console.log(err));
}