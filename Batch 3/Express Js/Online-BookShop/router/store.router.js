const express = require("express");
const {
  createBook,
  getBook,
  getSingleBook,
  deleteBook,
  updateBook,
} = require("../controller/store.controller");
const { upload } = require("../config/multer");
const router = express.Router();

router.route("/newbook/:id").post(upload, createBook);
router.route("/book/:id").get(getBook);
router.route("/singlebook/:id").get(getSingleBook);
router.route("/removebook/:id/:bookID").delete(deleteBook);
router.route("/updatebook/:id/").patch(updateBook);

module.exports = router;
