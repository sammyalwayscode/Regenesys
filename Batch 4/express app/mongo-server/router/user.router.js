const express = require("express");
const router = express.Router();
const { getUser, postUser } = require("../controller/user.controller");

router.route("/alluser").get(getUser);
router.route("/newuser").post(postUser);

module.exports = router;
