const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    catagory: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Category",
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      // enum: ["Apple", "Samsung", "Lenovo"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    color: {
      type: String,
      require: true,
      // enum: ["Black", "Brown", "Red"],
    },
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

//Export the model
const ProductModel = mongoose.model("Product", productSchema);

module.exports = { ProductModel };
