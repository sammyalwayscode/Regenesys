const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");

const signUpUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      username,
      email,
      password: hashed,
    });

    res.status(201).json({
      message: "User Created",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to Sign Up User",
      data: error,
    });
  }
};

module.exports = { signUpUser };
