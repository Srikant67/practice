const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then (()=>console.log("Database connected successfully"))
    .catch(()=>console.log("Database failed to connect"));
}