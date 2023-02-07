const { Router } = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../controller/productcategory.controller");
const { protection, isAdmin } = require("../middleware/protection.user");
const categoryRouter = Router();

categoryRouter.route("/add").post(protection, isAdmin, createCategory);
categoryRouter.route("/:id").put(protection, isAdmin, updateCategory);
categoryRouter.route("/:id").delete(protection, isAdmin, deleteCategory);
categoryRouter.route("/getall").get(getallCategory);
categoryRouter.route("/:id").get(getCategory);

module.exports = { categoryRouter };
