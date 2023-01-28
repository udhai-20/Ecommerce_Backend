const { Router } = require("express");
const {
  create_Product,
  product_get,
  all_product_get,
  update_Product,
  delete_products,
} = require("../controller/product.controller");
const { protection, isAdmin } = require("../middleware/protection.user");
const productRouter = Router();

productRouter.route("/add").post(protection, isAdmin, create_Product);
productRouter.route("/get").get(all_product_get);
productRouter.route("/edit/:id").put(protection, isAdmin, update_Product);
productRouter.route("/del/:id").delete(protection, isAdmin, delete_products);
productRouter.route("/:id").get(product_get);

module.exports = { productRouter };
