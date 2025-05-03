const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 2002;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server up and running 🚀🚀🚀",
  });
});

const users = [{ id: 1, username: "sammy", password: "sam12345" }];

app.get("/getusers", (req, res) => {
  res.status(200).json(users);
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const exist = users.find((u) => u.username === username);
  if (exist) return res.status(400).json({ message: "User already exist" });

  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.status(201).json({
    message: "User Registered",
    data: newUser,
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const vertUser = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!vertUser)
    return res.status(400).json({ message: "Invalid credentials" });

  //Sign JWT
  const token = jwt.sign(
    { id: vertUser.id, username: vertUser.username },
    "SeCrEaT_kEy",
    { expiresIn: "1h" }
  );
  res.json({
    message: "Login Successfull",
    data: token,
  });
});

app.listen(PORT, () => {
  console.log("Server running on PORT");
});
