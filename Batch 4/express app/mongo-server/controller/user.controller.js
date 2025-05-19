const userModel = require("../model/user.model");

const postUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new userModel({ name, email, age });
  await newUser.save();
  res.status(201).json(newUser);
};

const getUser = async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
};

module.exports = { postUser, getUser };
