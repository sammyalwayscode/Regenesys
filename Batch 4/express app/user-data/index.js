const express = require("express");
const app = express();
const PORT = process.env.port || 6655;
const cors = require("cors");
require("./config/db");
const userRouter = require("./router/user.router");

app.use(cors());
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
