const express = require("express");
const router = express.Router();
const { signUpUser } = require("../controller/user.controller");

router.route("/signup").post(signUpUser);

module.exports = router;
