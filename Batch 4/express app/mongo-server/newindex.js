const express = require("express");
require("./utils/db");
const userRouter = require("./router/user.router");
const app = express();
const PORT = 2332;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server up and running" });
});

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
