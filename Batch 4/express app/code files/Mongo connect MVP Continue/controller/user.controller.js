const userModel = require("../model/user.model");

const createNewUser = async (req, res) => {
  try {
    const { username, email, age, address, bio } = req.body;
    const newUser = await userModel.create({
      username,
      email,
      age,
      address,
      bio,
    });

    res.status(201).json({
      message: "User Created Successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create User",
      data: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const findUser = await userModel.find();
    res.status(200).json({
      message: "Users gotten successfully",
      data: findUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to fetch user data",
      data: error,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const oneUser = await userModel.findById(req.params.id);
    res.status(200).json({
      message: "User gotten",
      data: oneUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to fetch one user",
      data: error,
    });
  }
};

const updateuser = async (req, res) => {
  try {
    const { username, age, bio, address } = req.body;
    const userUpdate = await userModel.findByIdAndUpdate(
      req.params.id,
      { username, age, bio, address },
      { new: true }
    );

    res.status(201).json({
      message: "User Updated",
      data: userUpdate,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update user",
      data: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const removeUser = await userModel.findByIdAndDelete(req.params.userID);
    res.status(204).json({
      message: "User deleted Successfully",
      data: removeUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete user",
      data: error,
    });
  }
};

module.exports = { createNewUser, getUser, getOneUser, updateuser, deleteUser };
