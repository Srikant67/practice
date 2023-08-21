const bcrypt = require("bcrypt");
const User = require("../models/users");
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req,res) => {
    try{
        const {name, email, password, role} = req.body;
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        
        let hashedPwd;
        try{
            hashedPwd = await bcrypt.hash(password,10);
        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:"Error in hashing password"
            })
        }

        const user = await User.create({
            name, email, password:hashedPwd, role
        });

        return res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error in signing up"
        })
    }
}

exports.login = async (req,res) => {
    const {email, password} = req.body;
    try{
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Empty details"
            })
        }
        let existUser = await User.findOne({email});
        if(!existUser){
            return res.status(401).json({
                success:false,
                message:"Email does not exist"
            })
        }
        else{
            const payload = {
                email:existUser.email,
                id:existUser._id,
                role:existUser.role
            }
            if(await bcrypt.compare(password,existUser.password)){
                let token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});

                existUser = existUser.toObject();
                existUser.token = token;
                existUser.password = undefined;
                
                const options = {
                    expires:new Date(Date.now() + 30000),
                    httpOnly:true
                }
                res.cookie("token", token, options).status(200).json({
                    success:true,
                    token,
                    existUser,
                    message:"Logged in successfully"
                })
            }
            else{
                return res.status(403).json({
                    success:false,
                    message:"incorrect password"
                })
            }
        }
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Error in log in",
            error:err.message
        })
    }
}