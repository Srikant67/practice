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