const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localUpload = async(req, res)=>{
    try{
        const file = req.files.file;
        console.log("file - ",file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        file.mv(path, (err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"File uploaded to the local server successfully"
        })
    }catch(error){
        console.log(error)
    }
}

async function uploadFile(file, folder, quality){
    const options = {folder};
    if(quality){
        options.quality = quality;
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) =>{
    try{
        const {name, tags, email} = req.body;
        const file = req.files.file;

        const supportedTypes = ["jpg","png","jpeg"];
        const fileType = file.name.split('.')[1].toLowerCase();
        
        if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }
        const response = await uploadFile(file, "MyLibrary");

        const fileData = await File.create({
            name,tags,email,imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"image successfully uploaded"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"error in uploading file to cloudinary"
        })
    }
}

exports.videoUpload = async (req, res) =>{
    try{
        const {name, tags, email} = req.body;
        const file = req.files.file;

        const supportedTypes = ["mp4","mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        
        if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }
        const response = await uploadFile(file, "MyLibrary");

        const fileData = await File.create({
            name,tags,email,imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"video successfully uploaded"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"error in uploading file to cloudinary"
        })
    }
}

exports.imageReducedUpload = async (req, res) => {
    try{
        const {name, tags, email} = req.body;
        const file = req.files.file;

        const supportedTypes = ["jpg","png","jpeg"];
        const fileType = file.name.split('.')[1].toLowerCase();
        
        if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        const response = await uploadFile(file, "MyLibrary", 60);

        const fileData = await File.create({
            name,tags,email,imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"image successfully uploaded"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"error in uploading file to cloudinary"
        })
    }
}