const express = require("express");
const categoryController = require("../controller/category.controller");
const router = express.Router();

router.post("/add-category",categoryController);

module.exports = router;