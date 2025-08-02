const jwt = require("jsonwebtoken");
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

    res.status(200).json({
      message: "User Created",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating User",
      data: error,
    });
  }
};

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Checks if a user exixt on the database
    const user = await userModel.findOne({ email });
    //Write a condition to check if that users exist or not
    if (user) {
      //Write a condition to check if the bpassword is correct or not
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        const token = jwt.sign(
          { _id: user._id, username: user.username },
          "SeCrEaTkEy",
          {
            expiresIn: "1h",
          }
        );
        const { password, email, ...info } = user._doc;

        res.status(200).json({
          message: "Signed In Successfully",
          data: { token, ...info },
        });
      } else {
        res.status(400).json({
          message: "Incorrect Password",
        });
      }
    } else {
      res.status(400).json({
        message: "User not Found",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error sining in User",
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

module.exports = { signUpUser, signInUser, getUser };
