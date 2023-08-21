const express = require('express');
const app = express();

//load config from dotenv file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middlename used to parse json file
app.use(express.json());

//import routes
const todoRoutes = require("./routes/todos");

//mount routes for an api
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, ()=>{
    console.log("Server started successfully");
})

//connect to a database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req, res)=>{
    res.send(`<h1>this is homepage</h1>`)
} )