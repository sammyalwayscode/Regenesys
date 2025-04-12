const express = require("express");
const { createBook } = require("../controller/store.controller");
const { upload } = require("../config/multer");
const router = express.Router();

router.route("/book/:id").post(upload, createBook);

module.exports = router;
