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
    // console.log(error);
    res.status(400).json({
      message: "Failed to create new book",
      data: error,
    });
  }
};

const getBook = async (req, res) => {
  try {
    const getUser = await userModel.findById(req.params.id).populate("shop");
    res.status(200).json({
      message: "Your Books",
      data: getUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to get book",
      data: error,
    });
  }
};

const getAllBook = async (req, res) => {
  try {
    const getBooks = await storeModel.find();
    res.status(200).json({
      message: "books gotten successfully",
      data: getBooks,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to get all book",
      data: error,
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const bookData = await storeModel.findById(req.params.id);
    res.status(200).json({
      message: "Single book gotten",
      data: bookData,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to get single book",
      data: error,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getUser = await userModel.findById(req.params.id);
    const removeBook = await storeModel.findByIdAndDelete(req.params.bookID);

    getUser.shop.pull(removeBook);
    getUser.save();

    res.status(200).json({
      message: "Deleted Successfully",
      data: getUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete book",
      data: error,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const updateData = await storeModel.findByIdAndUpdate(
      req.params.id,
      { title, author },
      { new: true }
    );
    res.status(201).json({
      message: "Updated Successfully",
      data: updateData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to Update book",
      data: error,
    });
  }
};

module.exports = {
  createBook,
  getBook,
  getSingleBook,
  deleteBook,
  updateBook,
  getAllBook,
};
