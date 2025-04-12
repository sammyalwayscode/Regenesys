const storeModel = require("../model/store.model");
const cloudinery = require("../config/cloudinary");
const userModel = require("../model/user.model");
const mongoose = require("mongoose");

const createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const cloudImage = await cloudinery.uploader.upload(req.file.path);
    const getUser = await userModel.findById(req.params.id);
    const isbnNumberCreate = Math.floor(Math.random() * 10000);

    const createBook = await new storeModel({
      title,
      author,
      summary,
      ISBN: `SUPERBOOK7-${isbnNumberCreate}`,
      avatar: cloudImage.secure_url,
      avatarID: cloudImage.public_id,
    });

    createBook.users = getUser;
    createBook.save();

    getUser.shop.push(new mongoose.Types.ObjectId(createBook._id));
    getUser.save();

    res.status(201).json({
      message: "Book Created Successfully",
      data: createBook,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to create new book",
      data: error,
    });
  }
};

module.exports = { createBook };
