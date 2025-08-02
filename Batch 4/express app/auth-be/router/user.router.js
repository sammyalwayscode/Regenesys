const express = require("express");
const router = express.Router();
const {
  signUpUser,
  signInUser,
  getUser,
} = require("../controller/user.controller");

router.route("/signup").post(signUpUser);
router.route("/signin").post(signInUser);
router.route("/alluser").get(getUser);

module.exports = router;
