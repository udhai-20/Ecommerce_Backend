const { Router } = require("express");
const { createBlog, editBlog } = require("../controller/blog.controller");
const { protection, isAdmin } = require("../middleware/protection.user");
const blogRouter = Router();
//postrequest
blogRouter.route("/create-blog").post(protection, isAdmin, createBlog);
blogRouter.route("/edit-blog/:id").put(protection, isAdmin, editBlog);
// /get blog need to done
module.exports = { blogRouter };
