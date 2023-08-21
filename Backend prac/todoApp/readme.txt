create folder
> npm init -y
> npm i express
create index.js
create folder config, models, controllers

in index.js -

	const express = require('express');
	const app = express();

> npm i nodemon 

int package.json - 

	"scripts": {
    		"start": "node index.js",
    		"dev": "nodemon index.js"
  	},

create a .env file

in .env file - 

	PORT = 3000
	DATABASE_URL = mongodb://127.0.0.1:27017/sampleData

> npm i mongoose
> npm i dotenv

in config folder, create database.js

in database.js - 

	const mongoose = require("mongoose");
	require("dotenv").config();

	const dbConnect = () => {
	    mongoose.connect(process.env.DATABASE_URL, {
	    	useNewUrlParser:true,
		useUnifiedTopology:true
    		})
    		.then(()=>console.log("connection established"))
    		.catch((error)=>{
        		console.log("connection failed");
        		console.error(error.message);
        		process.exit(1);
    		});
	}

	module.exports = dbConnect;

in models folder, create Todo.js

in Todo.js - 

	const mongoose = require("mongoose");

	const todoSchema = new mongoose.Schema(
	    {
	        title:{
	            type:String,
	            required:true,
	            maxLength:50
	        },
	        description:{
	            type:String,
	            required:true,
	            maxLength:50
	        },
	        createdAt:{
	            type:Date,
	            required:true,
	            default:Date.now()
	        },
	        updatedAt:{
	            type:Date,
	            required:true,
	            default:Date.now()
	        }
	    }
	);

	module.exports = mongoose.model("Todo", todoSchema);

in controllers folder, create createTodo.js

in createTodo.js -
	
	const Todo = require("../models/Todo");
	exports.createTodo = async(req,res) =>{
		try{
			const {title,description} = req.body;
			const response = await Todo.create({title,description});
			res.status(200).json(
				{
					success:true,
					data:response,
					message:"Entry created"
				}
			)
		}
		catch(error){
			console.log(error);
			res.status(500).json({
				success:false,
				data:"internal server error",
				message:error.message
			})
		}
	}		

in routes folder, create todos.js

in todos.js - 

	const express = require("express");
	const router = express.router();
	const {createTodo} = require("../controllers/createTodo");
	router.post("/createTodo", createTodo);

	module.exports = router;

now back to index.js - 

	//load config from dotenv file
	require("dotenv").config();
	const PORT = process.env.PORT || 3000;

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

check localhost:3000 to see "this is homepage"
open mongodb compass and postman
create new http post request "http://localhost:3000/api/v1/createTodo"
go to body>raw>json and insert data - 
	{
    	"title": "suleman 200",
    	"description":"rickshaw wala"
	}
click send and data should be inserted in db


for getTodo route, create getTodo.js in controllers folder
in getTodo.js -

const Todo = require("../models/Todo");

	exports.getTodo = async(req,res) =>{
		try{
			const todos = await Todo.find({});
			res.status(200).json({
				success:true,
				data:todos,
				message:"Data fetched"
			})
		}
		catch(error){
			console.error(error);
			res.status(500).json({
				success:false,
				error:error.message,
				message:"server error"
			})
		}
	} 

go to routes, in todos.js -

	const {getTodo} = require("../controllers/getTodo");
	router.get("/getTodos", getTodo);

open mongodb compass and postman
create new http get request "http://localhost:3000/api/v1/getTodos"
send the request and data should be fetched


now to fetch a single data item based on id
go to todos.js in routes folder

	const {getTodo, getTodoById} = require("../controllers/getTodo");
	router.get("/getTodos/:id",getTodoById);

go to getTodo.js in controllers folder and add -

	exports.getTodoById = async(req, res) => {
		try{
			const id = req.params.id;
			const todo = await Todo.findById({ _id:id });

			if(!todo){
				res.status(404).json({
					success:false,
					message:"No data found"
				})
			}

			res.status(200).json({
				success:true,
				data:todo,
				message:"Data fetched"
			})
		}
		catch(error){
			console.error(error);
			res.status(500).json({
				success:false,
				error:error.message,
				message:"server error"
			})
		}
	}

open mongodb compass and postman
create new http get request "http://localhost:3000/api/v1/getTodos/id"
send the request and data should be fetched


now to update data, create updateTodo.js in controllers folder

	const Todo = require("../models/Todo");
	exports.updateTodo = async(req,res) =>{
		try{
			const {id} = req.params;
			const {title, description} = req.body;

			const todo = await Todo.findByIdAndUpdate(
				{ _id:id },
				{title, description, updateAt:Date.now()}
			);
			if(!todo){
				res.status(404).json({
					success:false,
					message:"No data found"
				})
			}

			res.status(200).json({
				success:true,
				data:todo,
				message:"Data updated"
			})
		}
		catch(error){
			console.error(error);
			res.status(500).json({
				success:false,
				error:error.message,
				message:"server error"
			})
		}
	} 

in todos.js file in route folder - 

	const {updateTodo} = require("../controllers/updateTodo");
	router.put("/updateTodo/:id",updateTodo);

open mongodb compass and postman
create new http put request "http://localhost:3000/api/v1/updateTodo/id"
send the request and data should be updated


now to delete data, create deleteTodo.js in controllers folder
in deleteTodo.js

	const Todo = require("../models/Todo");
	exports.deleteTodo = async(req,res) =>{
		try{
			const {id} = req.params;
			const todo = await Todo.findByIdAndDelete({ _id:id });
			if(!todo){
				res.status(404).json({
					success:false,
					message:"No data found"
				})
			}

			res.status(200).json({
				success:true,
				message:"Data deleted",
			})
		}
		catch(error){
			console.error(error);
			res.status(500).json({
				success:false,
				error:error.message,
				message:"server error"
			})
		}
	} 

in todos.js file in route folder - 
	const {deleteTodo} = require("../controllers/deleteTodo");
	router.delete("/deleteTodo/:id",deleteTodo);

open mongodb compass and postman
create new http delete request "http://localhost:3000/api/v1/deleteTodo/id"
send the request and data should be deleted