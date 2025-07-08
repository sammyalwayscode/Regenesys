const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productImage: {
      type: String,
    },

    productImageID: {
      type: String,
    },
    productTitle: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    productCode: {
      type: String,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
