const express = require("express");
const router = express.Router();
const {
  signUpUser,
  getAllUsers,
  signInUser,
} = require("../controller/user.controller");

router.route("/signup").post(signUpUser);
router.route("/alluser").get(getAllUsers);
router.route("/signin").post(signInUser);

module.exports = router;
