const userModel = require("../model/user.mode");

const getUsers = (req, res) => {
  res.status(200).json(userModel);
};

const postUser = (req, res) => {
  const { name } = req.body;
  const newUser = { id: userModel.length + 1, name };
  userModel.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, postUser };
