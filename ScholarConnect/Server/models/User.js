const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    communities:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"community"
    }],
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }],
    token:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    }
})

module.exports = mongoose.model("user", UserSchema);