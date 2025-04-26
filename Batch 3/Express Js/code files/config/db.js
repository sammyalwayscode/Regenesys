const mongoose = require("mongoose");
const MONGODB_LIVE_URI =
  "mongodb+srv://W8PypVqIRJXDReMh:W8PypVqIRJXDReMh@cluster0.1nq2x.mongodb.net/bookshop?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_LIVE_URI);
mongoose.connection
  .on("open", () => {
    console.log("Connected to Database");
  })
  .once("error", () => {
    console.log("Failed to connect to Database");
  });

module.exports = mongoose;
