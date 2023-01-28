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
} = require("../controller/user.controller");
const { protection, isAdmin } = require("../middleware/protection.user");
const userRouter = Router();

userRouter.route("/register").post(user_register);
userRouter.route("/updatepassword").put(protection, update_password);
userRouter.route("/forgetpassword").post(forget_Password_Token);
userRouter.route("/reset-password/:token").put(resetPassword);
userRouter.route("/login").post(user_login);
userRouter.route("/ref").get(handle_Refresh_Token);
userRouter.route("/logout").get(handle_logout);
userRouter.route("/all").get(protection, isAdmin, user_all);
userRouter.route("/:id").get(seprate_user);
userRouter.route("/del-user").delete(delete_user);
userRouter.route("/edit-user").put(protection, update_user);
userRouter.route("/user-block/:id").patch(protection, isAdmin, user_blocked);
userRouter
  .route("/user-unblock/:id")
  .patch(protection, isAdmin, user_unblocked);

module.exports = { userRouter };
