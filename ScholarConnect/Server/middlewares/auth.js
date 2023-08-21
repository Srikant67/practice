const jwt = require("jsonwebtoken")
require("dotenv")
const User = require("../models/User")

exports.auth = async(req, res, next) => {
    try{
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","")
        if(!token){
            return res.status(401).json({
                success:false,
                message:"token missing"
            })
        }

        try{
            const decode = await jwt.verify(token, process.env.JWT_SECRET)
            req.user = decode
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"Token invalid"
            })
        }
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong while validating the token"
        })
    }
}