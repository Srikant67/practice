const mongoose = require("mongoose")

const CommunitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})

module.exports = mongoose.model("community", CommunitySchema);