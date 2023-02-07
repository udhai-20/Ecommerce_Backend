const { CouponModel } = require("../model/coupon.model");
const asyncHandler = require("express-async-handler");
const { validateId } = require("../utils/mongo_id_validation");

const create_Coupon = asyncHandler(async (req, res) => {
  try {
    const newcoupon = await CouponModel.create(req.body);
    res.status(201).json(newcoupon);
  } catch (err) {
    throw new Error(err);
  }
});

const get_All_Coupon = asyncHandler(async (req, res) => {
  try {
    const coupon = await CouponModel.find();
    res.status(200).json(coupon);
  } catch (err) {
    throw new Error(err);
  }
});
//update token
const update_Coupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    const updateCoupon = await CouponModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

//delete token
const delete_Coupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    const deleteCoupon = await CouponModel.findByIdAndDelete(id);
    res.status(200).json(deleteCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  create_Coupon,
  get_All_Coupon,
  update_Coupon,
  delete_Coupon,
};
