const mongoose = require("mongoose");
// const LOCAL_URI = "mongodb://localhost:127.0.0.1:27017/user-auth";
const CLOUD_URI =
  "mongodb+srv://W8PypVqIRJXDReMh:W8PypVqIRJXDReMh@cluster0.1nq2x.mongodb.net/user-auth?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(CLOUD_URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Failed to connect to database " + err);
  });

module.exports = mongoose;
