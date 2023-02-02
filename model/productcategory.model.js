const mongoose = require("mongoose"); // Erase if already required
// Declare the Schema of the Mongo model
var productcategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);
//Export the model
const ProductCategoryModel = mongoose.model(
  "ProdCategory",
  productcategorySchema
);
module.exports = { ProductCategoryModel };
