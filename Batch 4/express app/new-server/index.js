const express = require("express");
const app = express();
const PORT = 7628;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server Up and Running",
  });
});

app.use(express.json());

let user = [
  { id: 1, name: "Sammy" },
  { id: 2, name: "John" },
];

app.get("/allusers", (req, res) => {
  res.status(200).json(user);
});

app.post("/createuser", (req, res) => {
  const { name } = req.body;
  const addUser = { id: user.length + 1, name };
  user.push(addUser);
  res.status(201).json(addUser);
});

app.listen(PORT, () => {
  console.log("Server is running on PORT 7628");
});
