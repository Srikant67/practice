const User = require("../models/User")
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt")

exports.resetPasswordToken = async(req,res) => {
    try{
        const email = req.body.email
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User does not exist"
            })
        }
        const token = crypto.randomUUID();
        const updatedUser = User.findOneAndUpdate({email:email},{token:token,resetPasswordExpires:5*60*1000},{new:true})
        const url = `http://localhost:3000/forgot-password/${token}`

        await mailSender(email, "Password reset link", `Password reset link :- ${url}`)
        return res.json({
            success:true,
            message:"Email sent successfully. Please check your email and reset your password"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Something went wrong while resetting your password"
        })
    }
}

exports.resetPassword = async(req, res) => {
    try{
        const {password, confirmPassword, token} = req.body
        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Passwords do not match"
            })
        }

        const userDetails = await user.findOne({token: token})
        if(!userDetails){
            return res.status(401).json({
                success:false,
                message:"token invalid"
            })
        }

        if(userDetails.resetPasswordExpires < Date.now()){
            return res.json({
                success:false,
                message:"Token expired"
            })
        }

        const hashedPwd = bcrypt.hash(password,10)
        await User.findOneAndUpdate({token:token},{password:hashedPwd},{new:true})

        return res.status(200).json({
            success:true,
            message:"Password changed successfully"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Something went wrong while resetting your password"
        })
    }
}