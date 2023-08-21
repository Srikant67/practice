const express = require("express");
const router = express.Router();

const {login, signup} = require("../controllers/auth");
const {auth, isStudent, isAdmin} = require("../middlewares/midAuth");

router.post("/login", login);
router.post("/signup", signup);

router.get("/student", auth, isStudent, (req, res)=>{
    res.json({
        success:true,
        message:"welcome to the protected students route"
    });
});

router.get("/admin", auth, isAdmin, (req, res)=>{
    res.json({
        success:true,
        message:"welcome to the protected admin route"
    });
});

router.get("/test", auth, (req, res)=>{
    res.json({
        success:true,
        message:"welcome to the protected test route"
    });
})

router.get("/getEmail", auth, (req,res) =>{
    const id = req.user.id;
    console.log("id: ", id);
    res.json({
        success:true,
        id:id,
        message:"welcome to the email route"
    });
})
module.exports = router;