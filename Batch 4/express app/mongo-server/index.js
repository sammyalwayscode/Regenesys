const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2993;
const mongoDB_URI = "mongodb://localhost:27017/newconnect";

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server up and running" });
});

mongoose
  .connect(mongoDB_URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Failed to connect to DB: " + err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const userModel = mongoose.model("myuser", userSchema);

app.post("/users", async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new userModel({ name, email, age });
  await newUser.save();
  res.status(201).json(newUser);
});

app.get("/getusers", async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log("Server running on Port 2993");
});