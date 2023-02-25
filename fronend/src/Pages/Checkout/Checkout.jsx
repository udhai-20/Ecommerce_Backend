import React from "react";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import Meta from "../../Components/MetaComponent/Meta";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Hoc from "../../Components/Hoc/Hoc";

function Checkout(props) {
  return (
    <>
      <Hoc class1="checkout-wrapper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="checkout-form">
            <div className="row">
              <div className="col-7">
                <div className="checkout-left-data"></div>
                <h3 className="website-name">Dev</h3>
                <nav
                  aria-label="breadcrumb"
                  style={{ "--bs-breadcrumb-divider": ">" }}
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active">Information</li>
                    &nbsp;/
                    <li className="breadcrumb-item active">Shipping</li>
                    &nbsp;/
                    <li className="breadcrumb-item active">Payment</li>
                  </ol>
                </nav>
                <h4 className="title mb-3">Contact Information</h4>
                <p className="user-details">
                  Udhaya Prakash Udhayaprakash122@gmail.com
                </p>
                <div>
                  <form
                    action=""
                    className="d-flex flex-wrap gap-10 justify-content-between"
                  >
                    <div className="w-100">
                      <select name="" className="form-control" id="">
                        <option value={""} selected disabled>
                          Selected Country
                        </option>
                      </select>
                    </div>

                    <div className="flex-grow-1">
                      <input
                        className="form-control"
                        placeholder="firstname"
                        type="text"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <input
                        className="form-control"
                        placeholder="lastname"
                        type="text"
                      />
                    </div>
                    <div className="w-100">
                      <input
                        className="form-control"
                        placeholder="Address"
                        type="text"
                      />
                    </div>
                    <div className="w-100">
                      <input
                        className="form-control"
                        placeholder="Appartment, suite, etc"
                        type="text"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <input
                        className="form-control"
                        placeholder="City"
                        type="text"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <select
                        name=""
                        className="form-control form select"
                        id=""
                      >
                        <option value={""} selected disabled>
                          Select State
                        </option>
                      </select>
                    </div>
                    <div>
                      <input
                        className="form-control"
                        placeholder="Zipcode"
                        type="text"
                      />
                    </div>
                    <div className="w-100">
                      <div className="d-flex gap-30 justify-content-between align-items-center">
                        <Link to="/cart" className="text-dark">
                          <BiArrowBack className="fs-5" /> Return to Cart
                        </Link>
                        <Link to="/billing" className="button">
                          Continue to Bill
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-5">
                <div className="border-bottom py-4">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="w-75 d-flex gap-10 align-items-center">
                      <div className="w-25 position-relative">
                        <span className="badge bg-secondary text-white rounded-circle position-absolute">
                          2
                        </span>
                        <img
                          src="/images/watch.jpg"
                          alt="product"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div>
                        <h5 className="total-price">heading of his product</h5>
                        <p className="total-price">size:l</p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="total">$ 100</h5>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-between align-items-center py-1 border-bottom mt-4">
                    <div>
                      <p className="total-price">SubTotal</p>
                      <p className="total-price">Shipping</p>
                    </div>
                    <div>
                      <p className="total">$100</p>
                      <p className="total">$ 10</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center py-4">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">$ 1010</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hoc>
    </>
  );
}

export default Checkout;
