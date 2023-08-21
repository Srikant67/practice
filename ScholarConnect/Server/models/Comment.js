const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    timestamp:{
        type:Date,
        default:Date.now()
    },
    content:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }]
})

module.exports = mongoose.model("comment", CommentSchema);