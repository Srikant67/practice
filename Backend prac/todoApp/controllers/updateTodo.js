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
            message:"Data updated",
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