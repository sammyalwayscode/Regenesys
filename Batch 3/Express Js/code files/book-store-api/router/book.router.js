const express = require("express");
const router = express.Router();
const { addBook, getAllBook } = require("../controller/book.controller");

router.post("/newbook", addBook);
router.get("/books", getAllBook);

module.exports = router;
