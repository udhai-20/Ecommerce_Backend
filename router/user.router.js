const { Router } = require("express");
const {
  user_register,
  user_login,
  user_all,
  seprate_user,
  delete_user,
  update_user,
  user_blocked,
  user_unblocked,
  handle_Refresh_Token,
  handle_logout,
  update_password,
  forget_Password_Token,
  resetPassword,
  admin_login,
  getWislist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrder,
} = require("../controller/user.controller");
const { protection, isAdmin } = require("../middleware/protection.user");
const userRouter = Router();

userRouter.route("/register").post(user_register);
userRouter.route("/updatepassword").put(protection, update_password);
userRouter.route("/forgetpassword").post(forget_Password_Token);
userRouter.route("/reset-password/:token").put(resetPassword);
userRouter.route("/login").post(user_login);
userRouter.route("/adminlogin").post(admin_login);
userRouter.route("/cart").post(protection, userCart);
userRouter.route("/cart/applycoupon").post(protection, applyCoupon);
userRouter.route("/createorder").post(protection, createOrder);

userRouter.route("/ref").get(protection, handle_Refresh_Token);
userRouter.route("/logout").get(handle_logout);
userRouter.route("/all").get(protection, isAdmin, user_all);
userRouter.route("/wishlists").get(protection, getWislist);
userRouter.route("/getcart").get(protection, getUserCart);
userRouter.route("/getorderbyuser").get(protection, getOrders);
userRouter.route("/:id").get(seprate_user);
userRouter.route("/cartempty").delete(protection, emptyCart);
userRouter.route("/del-user").delete(delete_user);
userRouter.route("/edit-user").put(protection, update_user);
userRouter.route("/saveaddress").put(protection, saveAddress);
userRouter.route("/user-block/:id").patch(protection, isAdmin, user_blocked);
userRouter
  .route("/user-unblock/:id")
  .patch(protection, isAdmin, user_unblocked);
userRouter
  .route("/update-order-status/:id")
  .put(protection, isAdmin, updateOrder);
module.exports = { userRouter };
