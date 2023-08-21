const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"post",
        },
        user:{
            required:true,
            type:String
        }
    }
);

module.exports = mongoose.model("like", likeSchema);