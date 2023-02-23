import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
function BlogCard(props) {
  return (
    <>
      <div>
        <div className="blog-card">
          <div className="card-images">
            <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
          </div>
          <div className="blog-content">
            <p className="date"> 1 Dec 2023</p>
            <h5 className="title">A beautiful sundy Morinig Resistance</h5>
            <p className="desc">
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem
            </p>
            <Link to="/blog/:id" className="button">
              ReadMore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
