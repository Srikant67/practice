const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

require("dotenv").config();
const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }
})

fileSchema.post('save',async function(doc){
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        });

        let info = await transporter.sendMail({
            from:"Srikant",
            to:doc.email,
            subject:"File uploaded",
            html:`<h2>File has been successfully uploaded</h2> View here:<a href="${doc.imageUrl}">${doc.imageUrl}</a>`
        })
    }catch(error){
        console.error(error);
    }
})

const File = mongoose.model("File",fileSchema);
module.exports = File;