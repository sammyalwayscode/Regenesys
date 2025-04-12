const mongoose = require("mongoose");
const bookShopSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    summary: {
      type: String,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    ISBN: {
      type: String,
    },
  },
  { timestamps: true }
);

const bookShopModel = mongoose.model("bookshop", bookShopSchema);
module.exports = bookShopModel;
