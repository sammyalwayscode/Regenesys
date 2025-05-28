const express = require("express");
const router = express.Router();
const {
  createNewUser,
  getUser,
  getOneUser,
  updateuser,
  deleteUser,
} = require("../controller/user.controller");

router.route("/newuser").post(createNewUser);
router.route("/viewalluser").get(getUser);
router.route("/viewoneuser/:id").get(getOneUser);
router.route("/userupdate/:id").patch(updateuser);
router.route("/removeuser/:userID").delete(deleteUser);

module.exports = router;
