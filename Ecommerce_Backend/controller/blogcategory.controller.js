const { BlogCategoryModel } = require("../model/blogcategory.model");
const asyncHandler = require("express-async-handler");
const { validateId } = require("../utils/mongo_id_validation");
//create_category_request
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await BlogCategoryModel.create(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    throw new Error(err);
  }
});

//update_category_request
const updateCategory = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;
    validateId(id);
    let idIsPresent = await BlogCategoryModel.findById(id);
    if (idIsPresent) {
      const updateCategory = await BlogCategoryModel.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );
      res.status(201).send({
        message: "category updated successfully",
        data: updateCategory,
      });
    } else {
      throw new Error("category not found");
    }
  } catch (err) {
    throw new Error(err);
  }
});
//delete_category_request
const deleteCategory = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;
    validateId(id);
    let idIsPresent = await BlogCategoryModel.findById(id);
    if (idIsPresent) {
      const deleteCategory = await BlogCategoryModel.findByIdAndDelete(id);
      res.status(201).send({
        message: "category delete successfully",
        data: deleteCategory,
      });
    } else {
      throw new Error("category not found");
    }
  } catch (err) {
    throw new Error(err);
  }
});
//get_category_request
const getCategory = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;
    validateId(id);
    let idIsPresent = await BlogCategoryModel.findById(id);
    if (idIsPresent) {
      res.status(201).json(idIsPresent);
    } else {
      throw new Error("category not found");
    }
  } catch (err) {
    throw new Error(err);
  }
});
//getall categories
const getallCategory = asyncHandler(async (req, res) => {
  try {
    let idIsPresent = await BlogCategoryModel.find({});
    if (idIsPresent) {
      res.status(201).json(idIsPresent);
    } else {
      throw new Error("category not found");
    }
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
};
