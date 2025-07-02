const express = require("express");
const app = express();
const PORT = 3412;
require("dotenv").config();
require("./config/db");
const productRouter = require("./router/product.router");

app.get("/", (req, res) => {
  res.json({
    message: "server up and running",
  });
});

app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
