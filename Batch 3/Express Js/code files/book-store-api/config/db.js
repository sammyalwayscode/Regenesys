const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log("Failed to connect to database", error));
