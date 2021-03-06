const express = require("express");
const categoryController = require("../controller/category.controller");
const verifyToken = require("../middleware/verify_token");
const router = express.Router();
const multer = require("multer");

var storage = multer.diskStorage(
    {
       destination : 'public/images',
       filename : function (req,file,cb){
           cb(null,Date.now()+"-"+file.originalname);
       }
    }
);
var upload = multer({storage : storage});

router.post("/add-category",verifyToken.verifyToken,upload.single('image'),categoryController.addCategory);

module.exports = router;