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