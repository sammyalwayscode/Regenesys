const express = require("express");
const app = express();
const PORT = 3412;
require("dotenv").config();
require("./config/db");
var cors = require("cors");
const productRouter = require("./router/product.router");

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "server up and running",
  });
});

app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
