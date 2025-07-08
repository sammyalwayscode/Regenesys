const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  newProduct,
  getOneProduct,
} = require("../controller/product.controller");
const { upload } = require("../config/multer");

router.route("/newproduct").post(upload, newProduct);
router.route("/getallproduct").get(getAllProduct);
router.route("/getoneproduct/:id").get(getOneProduct);

module.exports = router;
