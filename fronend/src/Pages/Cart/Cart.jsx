import React from "react";
import "./Cart.css";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import { AiFillDelete } from "react-icons/ai";
import Meta from "../../Components/MetaComponent/Meta";
import { Link } from "react-router-dom";
import Hoc from "../../Components/Hoc/Hoc";
function Cart(props) {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrums title="Cart" />
      <Hoc class1="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="py-3 cart-header d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>

                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="py-3 cart-data d-flex boder-bottom justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-30">
                  <div className="w-25">
                    <img
                      className="im-fluid w-100"
                      src="/images/watch.jpg"
                      alt="cartimg"
                    />
                  </div>
                  <div className="w-75">
                    <h5 className="title">
                      Watch is very expansive look like but its ver low cast
                      optimised to buy everyone who think time is important
                    </h5>
                    <p className="color">Size:every one can wear</p>
                    <p className="Size">color:Red</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price-cart">$10</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-10">
                  <div className="">
                    <input
                      type="number"
                      className="form-control"
                      min={1}
                      max={10}
                      name=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="fs-3 text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price-cart">$10</h5>
                </div>
              </div>
              <div className="py-3 cart-data d-flex boder-bottom justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-30">
                  <div className="w-25">
                    <img
                      className="im-fluid w-100"
                      src="/images/watch.jpg"
                      alt="cartimg"
                    />
                  </div>
                  <div className="w-75">
                    <h5 className="title">
                      Watch is very expansive look like but its ver low cast
                      optimised to buy everyone who think time is important
                    </h5>
                    <p className="color">Size:every one can wear</p>
                    <p className="Size">color:Red</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price-cart">$10</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-10">
                  <div className="">
                    <input
                      type="number"
                      className="form-control"
                      min={1}
                      max={10}
                      name=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="fs-3 text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price-cart">$10</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-3 mt-3">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link className="button" to="">
                  Continue Shoping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>Subtotal:$20</h4>
                  <p>Tax and Shiping Calculated at Checkoput</p>
                  <Link className="button" to="/checkout">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hoc>
    </>
  );
}

export default Cart;
