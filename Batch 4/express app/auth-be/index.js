const express = require("express");
const app = express();
const PORT = 2039;
const cors = require("cors");
require("./utils/db");
const userRoute = require("./router/user.router");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server up and running",
  });
});

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log("Server Up");
});
