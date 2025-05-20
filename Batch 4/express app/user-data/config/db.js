const mongoose = require("mongoose");
const LOCAL_URI = "mongodb://localhost:27017/user-data";

mongoose
  .connect(LOCAL_URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Failed to connect to database " + err);
  });

module.exports = mongoose;
