const express = require("express");
require("./config/db");
const userRouter = require("./router/user.router");
const app = express();
const PORT = 2030;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server up and running 🚀🚀🚀",
  });
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
