const bookModel = require("../model/book.model");

const addBook = async (req, res) => {
  try {
    const { title, author, bookNumber, category, summary } = req.body;
    const isbnNumberCreate = Math.floor(Math.random() * 10000);
    const newBook = await bookModel.create({
      title,
      author,
      category,
      bookNumber,
      avaliable: true,
      summary,
      ISBN: `MBS-${isbnNumberCreate}`,
    });
    return res.status(201).json({
      message: "Book added Successfully",
      data: newBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error adding a New Book",
      data: error,
    });
  }
};

const getAllBook = async (req, res) => {
  try {
    const getBooks = await bookModel.find();
    return res.status(200).json({
      message: "Book fetched Successfully",
      data: getBooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Oops... We have an Issue Getting your books",
      data: error,
    });
  }
};

module.exports = { addBook, getAllBook };
