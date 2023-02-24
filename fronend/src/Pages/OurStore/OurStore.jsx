import React, { useState } from "react";
import "./OurStore.css";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import Meta from "../../Components/MetaComponent/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Colors from "../../Components/Colors/Colors";
import { Link, useNavigate } from "react-router-dom";
function OurStore(props) {
  const [grid, setGrid] = useState(4);
  const navigate = useNavigate();
  // alert(grid);
  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrums title="Our Store" />
      <Link to="/single-product/:id">
        <div className="store-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h3 className="sub-title"> Availability</h3>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id=""
                    />
                    <lable className="form-check-lable">In Stock (1)</lable>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id=""
                    />
                    <lable className="form-check-lable">Out Of Stock (1)</lable>
                  </div>
                  <h3 className="sub-title"> Colors</h3>
                  <div>
                    <div className="d-flex flex-wrap">
                      <Colors />
                    </div>
                  </div>
                </div>
                <h3 className="filter-title">Price</h3>
                <div className="d-flex align-items-center justify-content-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control py-1"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">Form</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control py-1"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h3 className="sub-title"> Size</h3>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="color"
                    />
                    <lable className="form-check-lable">M (1)</lable>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="color-1"
                    />
                    <lable className="form-check-lable">XL (1)</lable>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align*-items-center gap-10">
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3">
                      laptop
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3">
                      HeadPhone
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3">
                      WiredPhone
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3">
                      Smart Watch
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center gap-10">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0">Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual" selected="selected">
                        Featured
                      </option>
                      <option value="best-sellig">Best selling</option>
                      <option value="title-ascending">Alphabetical, A-Z</option>
                      <option value="title-descending">
                        Alphabetical, Z-A
                      </option>
                      <option value="title-ascending">
                        Price, high to low
                      </option>
                      <option value="price-descending">
                        Price, low to high
                      </option>
                      <option value="created-ascending">
                        Date, high to low
                      </option>
                      <option value="Created-descending">
                        Date, old to new
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10 grid">
                    <p className="totalproducts mb-0">21 products</p>
                    <div className="d-flex gap-10 align-items-center">
                      <img
                        onClick={() => setGrid(3)}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(4)}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(6)}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(12)}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-3">
                <div className="d-flex flex-wrap gap-10">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default OurStore;
