const { UserModule } = require("../model/user.model");
const { BlogModel } = require("../model/blog.model");
const asyncHandler = require("express-async-handler");
const { validateId } = require("../utils/mongo_id_validation");

//createblogsController
const createBlog = asyncHandler(async (req, res) => {
  try {
    let query = req.body;
    const blog = await BlogModel.create(query);
    blog.save();
    res.status(201).json(blog);
  } catch (e) {
    throw new Error(e);
  }
});
//edit blog
const editBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    const update = await BlogModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(update);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = { createBlog, editBlog };
