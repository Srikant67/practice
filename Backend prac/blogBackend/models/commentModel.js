const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"post",
        },
        user:{
            required:true,
            type:String
        },
        body:{
            type:String,
            required:true
        }
    }
);

module.exports = mongoose.model("comment", commentSchema);