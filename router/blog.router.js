const { Router } = require("express");
const {
  createBlog,
  editBlog,
  deleteBlog,
  getAllBlogs,
  getBlogs,
  likeBlog,
  dislikeBlog,
} = require("../controller/blog.controller");
const { protection, isAdmin } = require("../middleware/protection.user");
const blogRouter = Router();
//postrequest
blogRouter.route("/create-blog").post(protection, isAdmin, createBlog);
blogRouter.route("/like-blog").put(protection, likeBlog);
blogRouter.route("/dislike-blog").put(protection, dislikeBlog);
blogRouter.route("/edit-blog/:id").put(protection, isAdmin, editBlog);
blogRouter.route("/delete-blog/:id").delete(protection, isAdmin, deleteBlog);
blogRouter.route("/get/:id").get(getBlogs);
blogRouter.route("/get/").get(getAllBlogs);
// /get blog need to done
module.exports = { blogRouter };
