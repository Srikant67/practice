const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req,res,next)=>{
    try{
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer","");

        if(!token || token === undefined){
            return res.status(401).json({
                success:false,
                message:"token missing"
            })
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            console.log(decode);
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"token is invalid"
            })
        }
        next();
    }
    catch(error){
       return res.status(401).json({
            success:false,
            message:"something went wrong while verifying token"
        })
    }
}

exports.isStudent = (req, res, next) =>{
    try{
        if(req.user.role !== "student"){
            return res.status(401).json({
                success:false,
                message:"unauthorised access. students only"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"role cannot be verified"
        })
    }
}

exports.isAdmin = (req, res, next) =>{
    try{
        if(req.user.role !== "admin"){
            return res.status(401).json({
                success:false,
                message:"unauthorised access. admin only"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"role cannot be verified"
        })
    }
}