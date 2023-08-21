const User = require("../models/User")
const OTP = require("../models/OTP")
const otpGenerator = require("otp-generator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv")

exports.sendOTP = async (req, res) => {
    try{
        const {email} = req.body
        const checkUser = await User.findOne({email})
        if(checkUser){
            return res.status(401).json({
                success:false,
               message:"User already registered"
            })
        }
        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        })
        console.log("otp generated - ", otp);
        const checkotp = await OTP.findOne({otp: otp})
        while(checkotp){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            })
            checkotp = await OTP.findOne({otp: otp})
        }

        const otpPayload = {email,otp}
        const savedOtp = await OTP.create(otpPayload)

        res.status(200).json({
            success:true,
            message:"OTP Sent successfully"
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.signup = async(req, res) => { 
    try{
        const {name, email, password, confirmpassword, mobile, otp } = req.body;
        if(!name || !email || !password || !confirmpassword || !mobile || !otp){
            return res.status(403).json({
                success:false,
                message:"All fields are required"
            })
        }

        if(password !== confirmpassword){
            return res.status(400).json({
                success:false,
                message:"Passwords do not match"
            })
        }

        if(await User.findOne({email})){
            return res.status(401).json({
                success:false,
                message:"User already registered"
            })
        }

        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1)
        if(recentOtp.length == 0){
            return res.status(400).json({
                success:false,
                message:"OTP not found"
            })
        } else if(otp !== recentOtp.otp){
            return res.status(400).json({
                success:false,
                message:"Invalid OTP"
            })
        }
    
        const hashedPwd = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, mobile, password:hashedPwd})

        res.status(200).json({
            success:true,
            message:"Signed up successfully"
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Sign up failed"
        })
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required"
            })
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User does not exist"
            })
        }

        if(await bcrypt(password, user.password)){
            const payload = {
                email:user.email,
                password:user.password,
                id:user._id
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"2h"})
            user.token = token
            user.password = undefined

            const options = {
                expiresIn:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            }
            res.cookie("token",token, options).status(200).json({
                success:true,
                message:"Login successfull"
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Incorrect Password"
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Login failed"
        })
    }
}

//change password
exports.changePassword = async (req, res) =>{
    try{
        //get oldPassword, newPassword, confirmPassword from req body
        const {email, oldPassword, newPassword, confirmPassword} = req.body

        //validation
        if(oldPassword == newPassword){
            return res.status(401).json({
                success:false,
                message:"Old password and the new password is the same"
            })
        }
        else if(newPassword !== confirmPassword){
            return res.status(401).json({
                success:false,
                message:"Re confirm the new password again"
            })
        }
        else{
            //update pwd in DB
            const hashedPwd = await bcrypt.hash(newPassword, 10)
            await User.findOneAndUpdate({email:email},{password:hashedPwd},{new:true})

            //send mail
            await mailSender(email, "StudyNotion Password change", "Your password has been changed successfully.")
            
            //return response
            return res.json({
                success:true,
                message:"Password change email sent successfully"
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Something went wrong while changing password",
            error:error
        })
    }
}