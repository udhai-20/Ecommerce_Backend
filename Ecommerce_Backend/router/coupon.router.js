const { Router } = require("express");
const {
  create_Coupon,
  get_All_Coupon,
  update_Coupon,
  delete_Coupon,
} = require("../controller/coupon.controler");
const { protection, isAdmin } = require("../middleware/protection.user");
const couponRouter = Router();

couponRouter.route("/add").post(protection, isAdmin, create_Coupon);
couponRouter.route("/getall").get(protection, isAdmin, get_All_Coupon);
couponRouter.route("/update/:id").put(protection, isAdmin, update_Coupon);
couponRouter.route("/delete/:id").delete(protection, isAdmin, delete_Coupon);

module.exports = { couponRouter };
