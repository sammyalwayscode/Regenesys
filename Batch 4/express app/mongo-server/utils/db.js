const mongoose = require("mongoose");

const mongoDB_URI = "mongodb://localhost:27017/newconnect";

mongoose
  .connect(mongoDB_URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Failed to connect to DB: " + err);
  });

module.exports = mongoose;
