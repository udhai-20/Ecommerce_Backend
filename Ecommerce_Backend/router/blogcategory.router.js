const { Router } = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../controller/blogcategory.controller");
const { protection, isAdmin } = require("../middleware/protection.user");
const blogcategoryRouter = Router();

blogcategoryRouter.route("/add").post(protection, isAdmin, createCategory);
blogcategoryRouter.route("/:id").put(protection, isAdmin, updateCategory);
blogcategoryRouter.route("/:id").delete(protection, isAdmin, deleteCategory);
blogcategoryRouter.route("/getall").get(getallCategory);
blogcategoryRouter.route("/:id").get(getCategory);

module.exports = { blogcategoryRouter };
