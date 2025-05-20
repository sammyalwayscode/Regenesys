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

module.exports = { createNewUser };
