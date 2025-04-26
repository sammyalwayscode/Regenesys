const express = require("express");
const app = express();
const PORT = 2025;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server up and Running 🚀");
});

const user = [
  { id: 1, name: "Sammy" },
  { id: 2, name: "Ibrahim" },
];

app.get("/allusers", (req, res) => {
  res.status(200).json(user);
});

app.post("/newuser", (req, res) => {
  const { name } = req.body;
  const postuser = { id: user.length + 1, name };
  user.push(postuser);
  res.status(201).json(postuser);
});

app.listen(PORT, () => {
  console.log("Server is Listening to PORT 2025");
});
