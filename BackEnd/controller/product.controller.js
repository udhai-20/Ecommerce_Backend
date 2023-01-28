const { ProductModel } = require("../model/product.model");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const { validateId } = require("../utils/mongo_id_validation");

//createProduct
const create_Product = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const product = await ProductModel.create(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    throw new Error(err);
  }
});

//updateProducts
const update_Product = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    console.log("id :", id);
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const update_Product = await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(update_Product);
  } catch (err) {
    throw new Error(err);
  }
});
//delete products
const delete_products = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateId(id);
    const check_id = await ProductModel.findById({ _id: id });
    console.log("check_id :", check_id);
    if (check_id) {
      const delete_product = await ProductModel.findByIdAndDelete(id);
      res.status(200).json({
        mesage: "Product Deleted",
      });
    } else {
      throw new Error("Product Not Found");
    }
  } catch (err) {
    throw new Error(err);
  }
});
//getProduct
const product_get = asyncHandler(async (req, res) => {
  try {
    let id = req.params.id;
    let all_products = await ProductModel.find({ _id: id });
    res.status(200).json({
      mesage: "single Products Fetched",
      data: all_products,
    });
  } catch (err) {
    console.log(err);
  }
});

//get all products
const all_product_get = asyncHandler(async (req, res) => {
  try {
    //filter
    const query = { ...req.query };
    let excludesFields = ["page", "limit", "sort", "fields"];
    excludesFields.forEach((field) => delete query[field]);
    let queryStr = JSON.stringify(query);
    console.log(" query_filter:", queryStr);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query_all = ProductModel.find(JSON.parse(queryStr));
    //soritings
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query_all = query_all.sort(sortBy);
      console.log("query_all", query_all);
    } else {
      query_all = query_all.sort("-createdAt");
    }
    //limit fields
    if (req.query.fields) {
      const fileld = req.query.fields.split(",").join(" ");
      query_all = query_all.select(fileld);
    } else {
      query_all = query_all.select("-__v");
    }
    //pagination
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * limit;
    query_all = query_all.skip(skip).limit(limit);
    if (req.query.page) {
      const totalProduct = await ProductModel.countDocuments();
      console.log(totalProduct, skip);
      if (skip >= totalProduct) {
        throw new Error("Page Does Not Exist");
      }
    }
    let all_products = await query_all;
    res.status(200).json({
      mesage: "All Products Fetched",
      totalproduct: all_products.length,
      data: all_products,
    });
  } catch (err) {
    throw new Error(err);
  }
});
module.exports = {
  product_get,
  create_Product,
  all_product_get,
  update_Product,
  delete_products,
};
