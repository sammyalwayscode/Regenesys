const express = require("express");
const app = express();
const PORT = 2023;
require("dotenv").config();
require("./config/db");
const bookrouter = require("./router/book.router");

app.use(express.json());
app.use("/api", bookrouter);

app.get("/", (req, res) => {
  res.send("Server Up and Running");
});

app.listen(PORT, () => {
  console.log("Server Running...");
});
