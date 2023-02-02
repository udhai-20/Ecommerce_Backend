const { BrandModel } = require("../model/brand.model");
const asyncHandler = require("express-async-handler");
const { validateId } = require("../utils/mongo_id_validation");
//create_Brand_request
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await BrandModel.create(req.body);
    await newBrand.save();
    res.status(201).json(newBrand);
  } catch (err) {
    throw new Error(err);
  }
});
//update_Brand_request
const updateBrand = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;
    validateId(id);
    let idIsPresent = await BrandModel.findById(id);
    if (idIsPresent) {
      const updateBrand = await BrandModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).send({
        message: "Brand updated successfully",
        data: updateBrand,
      });
    } else {
      throw new Error("Brand not found");
    }
  } catch (err) {
    throw new Error(err);
  }
});
//delete_Brand_request
const deleteBrand = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;
    validateId(id);
    let idIsPresent = await BrandModel.findById(id);
    if (idIsPresent) {
      const deleteBrand = await BrandModel.findByIdAndDelete(id);
      res.status(201).send({
        message: "Brand delete successfully",
        data: deleteBrand,
      });
    } else {
      throw new Error("Brand not found");
    }
  } catch (err) {
    throw new Error(err);
  }
});
//get_Brand_request
const getBrand = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;
    validateId(id);
    let idIsPresent = await BrandModel.findById(id);
    if (idIsPresent) {
      res.status(201).json(idIsPresent);
    } else {
      throw new Error("Brand not found");
    }
  } catch (err) {
    throw new Error(err);
  }
});
//getall categories
const getallBrand = asyncHandler(async (req, res) => {
  try {
    let idIsPresent = await BrandModel.find({});
    if (idIsPresent) {
      res.status(201).json(idIsPresent);
    } else {
      throw new Error("Brand not found");
    }
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
};
