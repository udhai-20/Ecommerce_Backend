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
//delete blog
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    const update = await BlogModel.findByIdAndDelete(id);
    if (update) {
      res.json(update);
    } else {
      throw new Error("user Not Found");
    }
  } catch (e) {
    throw new Error(e);
  }
});
//get blogs
const getBlogs = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateId(id);
  try {
    const blogs = await BlogModel.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    )
      .populate("likes")
      .populate("dislikes");
    if (blogs) {
      res.json(blogs);
    } else {
      throw new Error("Blog Not Found");
    }
  } catch (e) {
    throw new Error(e);
  }
});
//get all blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    if (blogs) {
      res.send({ total_Blog: blogs.length, blogs });
    } else {
      throw new Error("Blog Not Found");
    }
  } catch (e) {
    throw new Error(e);
  }
});
//const like blog
const likeBlog = asyncHandler(async (req, res) => {
  console.log("Like Blog", req.body);
  const { blogId } = req.body;
  validateId(blogId);
  //find the blog which you want to be liked
  const blog = await BlogModel.findById(blogId);
  console.log(" blog:", blog);
  //find login user
  const loginUserId = req.user?._id;
  console.log(" loginUserId:", loginUserId);
  // find if user is liked the blog
  const isLiked = blog?.isLiked;
  console.log("  isLiked:", isLiked);
  const alreadyDisLiked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  console.log("  alreadyLiked:", alreadyDisLiked);

  if (alreadyDisLiked) {
    const blog = await BlogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    // res.json(blog);
  }
  if (isLiked) {
    console.log("chekibng");
    const blog = await BlogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },

        isLiked: false,
      },

      {
        new: true,
      }
    );
    console.log("updated,blog:", blog);
    res.json(blog);
  } else {
    const blog = await BlogModel.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});
//blog dilikes the
//const like blog
const dislikeBlog = asyncHandler(async (req, res) => {
  console.log("Like Blog", req.body);
  const { blogId } = req.body;
  validateId(blogId);
  //find the blog which you want to be liked
  const blog = await BlogModel.findById(blogId);
  // console.log(" blog:", blog);
  //find login user
  const loginUserId = req.user?._id;
  // console.log(" loginUserId:", loginUserId);
  // find if user is liked the blog
  const isdisLiked = blog?.isDisliked;
  console.log("  isdisLiked:", isdisLiked);
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  console.log("  alreadyDisLiked:", alreadyLiked);

  if (alreadyLiked) {
    const blog = await BlogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    // res.json(blog);
  }
  if (isdisLiked) {
    console.log("chekibng");
    const blog = await BlogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },

      {
        new: true,
      }
    );
    console.log("updated,blog:", blog);
    res.json(blog);
  } else {
    const blog = await BlogModel.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});

module.exports = {
  createBlog,
  editBlog,
  deleteBlog,
  getBlogs,
  getAllBlogs,
  likeBlog,
  dislikeBlog,
};
