const { Router } = require("express");

const { protection, isAdmin } = require("../middleware/protection.user");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getallBrand,
  getBrand,
} = require("../controller/brand.controller");
const brandRouter = Router();

brandRouter.route("/add").post(protection, isAdmin, createBrand);
brandRouter.route("/:id").put(protection, isAdmin, updateBrand);
brandRouter.route("/:id").delete(protection, isAdmin, deleteBrand);
brandRouter.route("/getall").get(getallBrand);
brandRouter.route("/:id").get(getBrand);

module.exports = { brandRouter };
