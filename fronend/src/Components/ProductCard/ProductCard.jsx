import React from "react";
import "./ProductCard.css";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
function ProductCard({ grid }) {
  console.log(grid);
  const location = useLocation();
  console.log("  location:", location);
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-aboslute">
            <Link to="/">
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              className="image-fluid"
              src="images/watch.jpg"
              alt="prod watch"
            />
            <img
              src="images/watch.jpg"
              className="image-fluid"
              alt="prod watch"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids Headphone Bulk 10 pack multi colored for student
            </h5>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`desctiption ${grid == 12 ? "d-block" : "d-none"}`}>
              allow me condition for the following product could be be the reson
              form the foramtaion of the following should be not ignored
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link to="">
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link to="">
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to="">
                <img src="images/add-cart.svg" alt="view" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-aboslute">
            <Link to="/">
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              className="image-fluid"
              src="images/watch.jpg"
              alt="prod watch"
            />
            <img
              src="images/watch.jpg"
              className="image-fluid"
              alt="prod watch"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids Headphone Bulk 10 pack multi colored for student
            </h5>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`desctiption ${grid == 12 ? "d-block" : "d-none"}`}>
              allow me condition for the following product could be be the reson
              form the foramtaion of the following should be not ignored
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link to="">
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link to="">
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to="">
                <img src="images/add-cart.svg" alt="view" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
