const express = require("express");
const adminController = require("../controller/admin.controller");

const router = express.Router();

router.post("/signup",adminController.signup);

router.post("/signin",adminController.signin);

module.exports = router;