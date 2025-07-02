const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  newProduct,
} = require("../controller/product.controller");
const { upload } = require("../config/multer");

router.route("/newproduct").post(upload, newProduct);
router.route("/getallproduct").get(getAllProduct);

module.exports = router;
