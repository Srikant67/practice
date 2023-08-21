const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    community:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    url:{
        type:String,
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

module.exports = mongoose.model("post", PostSchema);