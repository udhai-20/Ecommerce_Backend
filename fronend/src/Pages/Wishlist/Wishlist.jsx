import React from "react";
import Meta from "../../Components/MetaComponent/Meta";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import "./Wishlist.css";
import Hoc from "../../Components/Hoc/Hoc";
function Wishlist(props) {
  return (
    <div>
      <Meta title={"Favouirte Wishlist"} />
      <BreadCrums title="Favouirte Wishlist" />
      <Hoc class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute     img-fluid cross"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="wishlist-content py-3 px-3">
                <h5 className="wishlist-title">
                  Honor T1 7.0.1 1 GB RAM 8 GB ROM 7 Inch with wi-fi+3G Tablet
                </h5>
                <h6 className="wishlist-price mb-3 mt-3">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute     img-fluid cross"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="wishlist-content py-3 px-3">
                <h5 className="wishlist-title">
                  Honor T1 7.0.1 1 GB RAM 8 GB ROM 7 Inch with wi-fi+3G Tablet
                </h5>
                <h6 className="wishlist-price mb-3 mt-3">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute     img-fluid cross"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="wishlist-content py-3 px-3">
                <h5 className="wishlist-title">
                  Honor T1 7.0.1 1 GB RAM 8 GB ROM 7 Inch with wi-fi+3G Tablet
                </h5>
                <h6 className="wishlist-price mb-3 mt-3">$100</h6>
              </div>
            </div>
          </div>
        </div>
      </Hoc>
    </div>
  );
}

export default Wishlist;
