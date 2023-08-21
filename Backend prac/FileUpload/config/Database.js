const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        UseUnifiedTopology:true
    }).then(()=>console.log("DB connected successfully"))
    .catch(()=>console.log("DB connection failed"))
}