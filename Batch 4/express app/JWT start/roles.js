const express = require("express");
const app = express();
const PORT = 2345;

app.get("/", (req, res) => {
  res.send("Server up and running");
});

app.listen(PORT, () => {
  console.log("Server is UP on PORT");
});
