import React from "react";
import "./ProductCard.css";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoWishlist } from "../../Feature/Products/ProductSlice";
function ProductCard({ grid, data }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleaddtoWishlist = (prodId) => {
    console.log(prodId);
    dispatch(addtoWishlist(prodId));
  };

  return (
    <>
      {data &&
        data?.length > 0 &&
        data.map((item, i) => {
          return (
            <div
              className={`${
                location.pathname == "/store" ? `gr-${grid}` : "col-3"
              }`}
            >
              <Link
                to=""
                // to={`${
                //   Location.pathname == "/"
                //     ? "/single-product/:id"
                //     : location.pathname == "/store/:id"
                //     ? "/single-product/1"
                //     : "/single-product/:id"
                // }`}
              >
                <div className="product-card position-relative">
                  <div className="wishlist-icon position-aboslute">
                    <button className="border-0 bg-transparent">
                      <img
                        src="images/wish.svg"
                        alt="wishlist"
                        onClick={() => handleaddtoWishlist(item._id)}
                      />
                    </button>
                  </div>
                  <div className="product-image">
                    <img
                      className="image-fluid"
                      src={item.images[0]?.url}
                      alt={item.title}
                    />
                    <img
                      src={item.images[0]?.url}
                      className="image-fluid"
                      alt={item.title}
                    />
                  </div>
                  <div className="product-details">
                    <h6 className="brand">{item.brand}</h6>
                    <h5 className="product-title">{item.title}</h5>
                    <ReactStars
                      count={5}
                      value={item.totalrating.toString()}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p
                      className={`desctiption ${
                        grid == 12 ? "d-block" : "d-none"
                      }`}
                    >
                      {item?.description}
                    </p>
                    <p className="price">Rs: {item.price}</p>
                  </div>
                  <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                      <button className="border-0 bg-transparent">
                        <img src="images/view.svg" alt="view" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src="images/prodcompare.svg" alt="compare" />
                      </button>
                      <button className="border-0 bg-transparent">
                        <img src="images/add-cart.svg" alt="view" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
}

export default ProductCard;
