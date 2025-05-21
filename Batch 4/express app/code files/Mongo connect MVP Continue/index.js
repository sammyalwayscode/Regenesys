const express = require("express");
const app = express();
const PORT = 6655;
require("./config/db");
const userRouter = require("./router/user.router");

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is Up and Running 🚀🚀🚀",
  });
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Up on PORT: ${PORT}`);
});
