import React from "react";
import "./SingleBlog.css";
import Meta from "../../Components/MetaComponent/Meta";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Hoc from "../../Components/Hoc/Hoc";

function SingleBlog(props) {
  return (
    <>
      <Meta title={"Single Blog"} />
      <BreadCrums title="Single Blog" />
      <Hoc class1="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <div className="single-blog-card">
                <div className="mb-3">
                  <Link to="/blog">
                    <HiOutlineArrowLeft className="fs-5 " /> Back To
                  </Link>
                </div>
                <h3 className="title mb-2">A Beautiful Sunday Morning</h3>
                <img
                  src="/images/blog-1.jpg"
                  className="w-100 img-fluid  mb-3"
                  alt="blog"
                />
                <p>
                  something what they planned to for your feature it definetly
                  need to be happen until unless you loss your hope and all
                  opputunity and the main rule opprtunity never come and knock
                  your door you need to make your self ready to face whatever
                  happen to look for another one and same time need to be
                  updated the last one which u can't able to answare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Hoc>
    </>
  );
}

export default SingleBlog;
