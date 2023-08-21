const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("Database connected successfully"))
    .catch(()=>{
        console.log("Database connection failed");
        console.error(error);
        process.exit(1);
    })
}