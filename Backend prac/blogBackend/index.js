const express = require('express');
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(express.json());
const blog = require('./routes/blog');

app.use("/api/v1",blog);

const connectDb = require('./config/database');
connectDb();

app.listen(port,()=>{
    console.log("server started");
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`)
    console.log("this is homepage");
})