const express = require("express");
const router = express.Router();

const {imageUpload, videoUpload, imageReducedUpload, localUpload} = require("../controllers/FileUpload");
router.post("/imageupload", imageUpload);
router.post("/videoupload", videoUpload);
router.post("/reducedupload", imageReducedUpload);
router.post("/localupload", localUpload);

module.exports = router;