import React from "react";
import ReactStars from "react-rating-stars-component";
import "./SpecialProduct.css";
import { Link } from "react-router-dom";
function SpecialProduct(props) {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="special-prod-image">
            <img src="images/watch.jpg" className="image-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Svmsung Galaxy Note 10+ Mobile Phone; sim</h6>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$1000</span> &nbsp;
              <strike>$1200</strike>
            </p>
            <div className="dicount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-warning">1</span>
                <span className="badge rounded-circle p-3 bg-warning">2</span>
                <span className="badge rounded-circle p-3 bg-warning">3</span>
              </div>
            </div>
            <div className="prod-count my-4">
              <p className="mb-0">Product:5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow={"25"}
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}
                ></div>
              </div>
            </div>
            <Link to="" className="button mt-3">
              {" "}
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
