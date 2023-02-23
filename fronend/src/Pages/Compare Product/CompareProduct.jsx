import React from "react";
import "./CompareProduct.css";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import "./CompareProduct.css";
import Meta from "../../Components/MetaComponent/Meta";
import Colors from "../../Components/Colors/Colors";
function CompareProduct(props) {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrums title="Compare Products" />
      <div className="compare-products-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="img-fluid position-absolute cross"
                  alt="cross"
                />
                <div className="prod-img">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="prod-title">
                    Honor T1 7.0.1 1 GB RAM 8 GB ROM 7 Inch with wi-fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="compare-product-all-detail">
                      <h5>Brand</h5>
                      <p>Havels</p>
                    </div>
                    <div className="compare-product-all-detail">
                      <h5>Type</h5>
                      <p>Watch</p>
                    </div>
                    <div className="compare-product-all-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="compare-product-all-detail">
                      <h5>Colors:</h5>
                      <Colors />
                    </div>

                    <div className="compare-product-all-detail">
                      <h5>Size</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="img-fluid position-absolute cross"
                  alt="cross"
                />
                <div className="prod-img">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="prod-title">
                    Honor T1 7.0.1 1 GB RAM 8 GB ROM 7 Inch with wi-fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="compare-product-all-detail">
                      <h5>Brand</h5>
                      <p>Havels</p>
                    </div>
                    <div className="compare-product-all-detail">
                      <h5>Type</h5>
                      <p>Watch</p>
                    </div>
                    <div className="compare-product-all-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="compare-product-all-detail">
                      <h5>Colors:</h5>
                      <Colors />
                    </div>

                    <div className="compare-product-all-detail">
                      <h5>Size</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;
