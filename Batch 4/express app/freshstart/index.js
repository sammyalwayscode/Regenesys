const express = require("express");
const app = express();
const PORT = 2025;

app.get("/", (req, res) => {
  res.send("Server up and Running 🚀");
});

app.listen(PORT, () => {
  console.log("Server is Listening to PORT 2025");
});
