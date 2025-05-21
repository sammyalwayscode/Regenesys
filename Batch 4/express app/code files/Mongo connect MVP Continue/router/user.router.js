const express = require("express");
const router = express.Router();
const { createNewUser } = require("../controller/user.controller");

router.route("/newuser").post(createNewUser);

module.exports = router;
