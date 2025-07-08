const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI);
mongoose.connection
  .on("open", () => {
    console.log("Connected to the database Successfully");
  })
  .once("error", () => {
    console.log("Failed to connect to Database");
  });

module.exports = mongoose;
