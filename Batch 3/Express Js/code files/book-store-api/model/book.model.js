const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    bookNumber: Number,
    category: String,
    avaliable: Boolean,
    summary: String,
    ISBN: String,
  },
  { timestamps: true }
);

const bookModel = mongoose.model("books", bookSchema);
module.exports = bookModel;
