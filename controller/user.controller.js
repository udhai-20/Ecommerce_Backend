const { generateToken } = require("../utils/token");
const { UserModel } = require("../model/user.model");
const { CartModel } = require("../model/cart.model");
const { ProductModel } = require("../model/product.model");
const asyncHandler = require("express-async-handler");
const { validateId } = require("../utils/mongo_id_validation");
const { generateRefreshToken } = require("../utils/refershtoken");
const { sendEmail } = require("./email.controler");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { CouponModel } = require("../model/coupon.model");
const { OrderModel } = require("../model/order.model");
const uniqid = require("uniqid");
require("dotenv").config();
// user_register
const user_register = asyncHandler(async (req, res) => {
  try {
    const { firstname, lastname, email, password, mobile } = req.body;
    let user = await UserModel.find({ email });
    // console.log("user:", user);
    if (user.length > 0) {
      throw new Error("email already exists");
    } else {
      const newUser = new UserModel({
        firstname,
        lastname,
        email,
        password,
        mobile,
      });
      await newUser.save();
      res.send({
        message: "success",
        data: newUser,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
});
// userlogin_auth
const user_login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email });
  // console.log("  user.isBlocked:", user.isBlocked);
  console.log(" user:", user);
  if (user) {
    if (user.isBlocked == true) {
      throw new Error("Your account is blocked");
    } else {
      console.log(await user.matchPassword(password));
      if (user && (await user.matchPassword(password))) {
        const refershToken = await generateRefreshToken(user?._id);
        const update_user = await UserModel.findByIdAndUpdate(
          user?._id,
          {
            refershToken: refershToken,
          },
          { new: true }
        );
        res.cookie("refershToken", refershToken, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000,
        });

        res.send({
          message: "success",
          data: user,
          token: generateToken(user._id),
        });
      } else {
        throw new Error("email or password wrong");
      }
    }
  } else {
    throw new Error("invalid credentials");
  }
});
//admin-login
const admin_login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let admin = await UserModel.findOne({ email });
  if (admin) {
    if (admin.role !== "admin") {
      throw new Error("Not Authorised");
    }
    if (admin.isBlocked == true) {
      throw new Error("Your account is blocked");
    } else {
      if (admin && (await admin.matchPassword(password))) {
        const refershToken = await generateRefreshToken(admin?._id);
        const update_user = await UserModel.findByIdAndUpdate(
          admin?._id,
          {
            refershToken: refershToken,
          },
          { new: true }
        );
        res.cookie("refershToken", refershToken, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000,
        });

        res.send({
          message: "success",
          data: admin,
          token: generateToken(admin?._id),
        });
      } else {
        throw new Error("email or password wrong");
      }
    }
  } else {
    throw new Error("invalid credentials");
  }
});
//refersh-token`
const handle_Refresh_Token = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refershToken) throw new Error("refersh token in cookes");
  const refershToken = cookie.refershToken;
  const user = await UserModel.findOne({ refershToken });
  if (!user) throw new Error("refersh token not found");
  jwt.verify(refershToken, process.env.SECRATE, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("something went wrong in cookies token");
    }
    const accessToken = generateToken(user?._id);
    res.send({ access_token: accessToken });
  });
});
//logout and clear cookie
const handle_logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refershToken) throw new Error("refersh token in cookes");
  const refershToken = cookie.refershToken;
  const user = await UserModel.findOne({ refershToken });
  console.log("  user:", user);
  if (!user) {
    res.clearCookie("refershToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204);
  } else {
    await UserModel.findOneAndUpdate(refershToken, {
      refershToken: "",
    });
    res.clearCookie("refershToken", {
      httpOnly: true,
      secure: true,
    });
    res.sendStatus(204);
  }
});
//save user-address
const saveAddress = asyncHandler(async (req, res) => {
  try {
    validateId(req.user._id);
    const all_det = await UserModel.findById(req.user._id);

    if (all_det) {
      const user = await UserModel.findByIdAndUpdate(
        req.user._id,
        {
          address: req.body?.address,
        },
        {
          new: true,
        }
      );
      res.send({
        message: "user Address Added",
        data: user,
      });
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    throw new Error(`catch ${err}`);
  }
});
//get all users
const user_all = asyncHandler(async (req, res) => {
  try {
    console.log("cheking", req.user);
    let user = await UserModel.find().populate("wishlist").populate("cart");
    res.send({
      totalData: user.length,
      data: user,
    });
  } catch (err) {
    throw new Error(err);
  }
});
//seprate_user
const seprate_user = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;
    validateId(id);
    //   console.log("seprate_user", id);
    let user = await UserModel.findById(id);
    res.send({
      message: "success",
      data: user,
    });
  } catch (err) {
    throw new Error(err);
  }
});
//delete_user
const delete_user = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;
    validateId(id);
    //   console.log("seprate_user", id);
    let user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      throw new Error("User not found");
    } else {
      res.send({
        message: "Delete success",
        data: user,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
});
//update_user
const update_user = asyncHandler(async (req, res) => {
  try {
    validateId(req.user._id);
    const all_det = await UserModel.findById(req.user._id);
    console.log("all_det:", all_det);
    const { firstname, lastname, email, password } = req.body;
    if (all_det) {
      const user = await UserModel.findByIdAndUpdate(
        req.user._id,
        {
          firstname: firstname ? firstname : all_det.firstname,
          lastname: lastname ? lastname : all_det.lastname,
          email: email ? email : all_det.email,
          password: password ? password : all_det.password,
          mobile: mobile ? mobile : all_det.mobile,
        },
        {
          new: true,
        }
      );
      res.send({
        message: "user updated successfully",
        data: user,
      });
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    throw new Error(`catch ${err}`);
  }
});
//user-blocked
const user_blocked = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateId(id);
    let user = await UserModel.findOne({ id });
    console.log("  user:", user);
    let block = await UserModel.findByIdAndUpdate(
      id,
      { isBlocked: true },
      {
        new: true,
      }
    );
    res.send({
      message: "user blocked successfully",
    });
  } catch (err) {
    throw new Error(err);
  }
});
//user un-blocked
const user_unblocked = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateId(id);

    let block = await UserModel.findByIdAndUpdate(
      id,
      { isBlocked: false },
      {
        new: true,
      }
    );
    let user = await UserModel.findOne({ id });
    res.send({
      message: "user unblocked successfully",
    });
  } catch (err) {
    throw new Error(err);
  }
});
//update pasword
const update_password = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateId(_id);
  const user = await UserModel.findById(_id);
  if (password) {
    user.password = password;
    const new_password = await user.save();
    res.send({
      message: "password updated successfully",
      data: new_password,
    });
  } else {
    res.send(user);
  }
});
//generate forget_password token
const forget_Password_Token = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  try {
    const token = await user.createPaswordResetToken();
    await user.save();
    const resetUrl = `Hi Please Follow the link it,s valid Up to 10 mints. <a href="http://localhost:4000/user/reset-password/${token}"> Click here </>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forget password link",
      html: resetUrl,
    };
    sendEmail(data);
    res.status(200).json({
      status: "success",
      message: "Email sent",
    });
  } catch (err) {
    throw new Error(err);
  }
});
//reset password
const resetPassword = asyncHandler(async (req, res) => {
  try {
    const { password } = req.body;
    const { token } = req.params;
    console.log("reset password", password, token);
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await UserModel.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) {
      throw new Error("Invalid Token Plese Try again");
    }
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.status(200).json({
      status: "success",
      message: "Password updated successfully",
    });
  } catch (e) {
    throw new Error(e);
  }
});
//get wishlist from
const getWislist = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const findUser = await UserModel.findById(_id).populate("wishlist");
    res.status(200).json(findUser);
  } catch (err) {
    throw new Error(err);
  }
});
//userAddtoCart
const userCart = asyncHandler(async (req, res) => {
  try {
    let product = [];
    const { cart } = req.body;
    const { _id } = req.user;
    validateId(_id);
    const user = await UserModel.findById(_id);
    // check if user already added product same product in ths cart
    const alreadyExistCart = await CartModel.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      alreadyExistCart.remove();
    }
    for (let i = 0; i < cart.length; i++) {
      let obj = {};
      obj.product = cart[i]._id;
      obj.count = cart[i].count;
      obj.color = cart[i].color;
      let getPrice = await ProductModel.findById(cart[i]._id)
        .select("price")
        .exec();
      obj.price = getPrice.price;
      product.push(obj);
    }
    let cartTotal = 0;
    for (let i = 0; i < product.length; i++) {
      cartTotal += product[i].price * product[i].count;
    }
    const newCart = await new CartModel({
      products: product,
      orderby: user?._id,
      cartTotal,
    }).save();
    res.send({
      data: newCart,
    });
  } catch (err) {
    throw new Error(err);
  }
});
//ge6tuserCart
const getUserCart = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const cart = await CartModel.findOne({ orderby: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (err) {
    throw new Error(err);
  }
});
//emptyCart
const emptyCart = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    validateId(_id);
    const user = await UserModel.findOne({ _id });
    const cart = await CartModel.findOneAndRemove({ orderby: user._id });
    res.json(cart);
  } catch (err) {
    throw new Error(err);
  }
});
//apply coupon
const applyCoupon = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { coupon } = req.body;
    const validateCoupon = await CouponModel.findOne({ name: coupon });
    // console.log("validateCoupon", validateCoupon);
    if (validateCoupon == null) {
      throw new Error("Coupon not found");
    }
    const user = await UserModel.findOne({ _id });
    let { products, cartTotal } = await CartModel.findOne({
      orderby: user._id,
    }).populate("products.product");
    let totalAfterDiscount = (
      cartTotal -
      (cartTotal * validateCoupon.discount) / 100
    ).toFixed(2);
    const newCart = await CartModel.findOneAndUpdate(
      {
        orderby: user._id,
      },
      { totalAfterDiscount },
      {
        new: true,
      }
    );
    console.log("newCart:", newCart);
    res.json(totalAfterDiscount);
  } catch (err) {
    throw new Error(err);
  }
});
//createOrder
const createOrder = asyncHandler(async (req, res) => {
  try {
    const { COD, couponApplied } = req.body;
    const { _id } = req.user;
    validateId(_id);
    const user = await UserModel.findOne({ _id });
    const userCart = await CartModel.findOne({ orderby: user._id });
    let totalAmount = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      totalAmount = userCart.totalAfterDiscount;
    } else {
      totalAmount = userCart.cartTotal;
    }
    const newOrder = await new OrderModel({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: totalAmount,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user._id,
      orderStatus: "Cash on Delivery",
    });
    let update = userCart.products.map((el) => {
      return {
        updateOne: {
          filter: { _id: el.product._id },
          update: { $inc: { quantity: -el.count, sold: +el.count } },
        },
      };
    });

    if (COD || couponApplied) {
      newOrder.save();
      const updated = await ProductModel.bulkWrite(update, {});
      console.log(" updated:", updated);
      res.json({ message: "success" });
    } else {
      throw new Error("Invalid Payment method");
    }
  } catch (err) {
    throw new Error(err);
  }
});
//getorders
const getOrders = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    validateId(_id);
    const orders = await OrderModel.find({ orderby: _id }).populate(
      "products.product"
    );
    res.json(orders);
  } catch (err) {
    throw new Error(err);
  }
});
//updateOrder
const updateOrder = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateId(id);
  try {
    const Updatedorder = await OrderModel.findOneAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },

      { new: true }
    );
    res.json(Updatedorder);
  } catch (err) {
    throw new Error(err);
  }
});
module.exports = {
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
};
