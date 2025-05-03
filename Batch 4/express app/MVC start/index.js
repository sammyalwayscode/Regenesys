const express = require("express");
const app = express();
const PORT = 3939;
const { getUsers, postUser } = require("./controller/user.controller");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server up amd running",
  });
});

app.get("/myusers", getUsers);
app.get("/newuser", postUser);

app.listen(PORT, () => {
  console.log("Server running on PORT");
});
