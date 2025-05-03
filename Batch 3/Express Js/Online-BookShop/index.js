const express = require("express");
const cors = require("cors");
require("./config/db");
const userRouter = require("./router/user.router");
const storeRouter = require("./router/store.router");
const app = express();
const PORT = 2030;

app.use(express.json());
app.use(cors());
// app.use(cors({origin: "http://localhost:1573"}))

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server up and running 🚀🚀🚀",
  });
});

app.use("/api/user", userRouter);
app.use("/api/store", storeRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
