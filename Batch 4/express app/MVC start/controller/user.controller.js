const userModel = require("../model/user.mode");

const getUsers = (req, res) => {
  res.status(200).json(userModel);
};

module.exports = { getUsers };
