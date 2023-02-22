import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import BrandName from "../../Components/BrandName/BrandName";
import BlogCard from "../../Components/BlogCard/BlogCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SpecialProduct from "../../Components/SpecialProduct/SpecialProduct";
import FamouseCard from "../../Components/FamousCard/FamouseCard";

function Home(props) {
  return (
    <>
      <div className="home-wrapper-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute t-20">
                  <h4>SUPERCHARGED FOR PRODS.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>Form $999.00 or $41.62/mo.</p>
                  <Link className="button" to="">
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justifiy-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute t-20">
                    <h4>
                      SUPERCHARGED FOR <br /> PRODS.
                    </h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>
                      Form $999.00 or <br /> $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute t-20">
                    <h4>Best sale</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>
                      Form $999.00 or <br /> $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute t-20">
                    <h4>SUper sale</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>
                      Form $999.00 or <br /> $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute t-20">
                    <h4>new arriavals</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>
                      Form $999.00 or <br /> $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //services section */}
      <div className="home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">from all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="" />
                  <div className="">
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="" />
                  <div className="">
                    <h6>Sppport 24/7</h6>
                    <p className="mb-0">Shop with an export</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="" />
                  <div className="mb-0">
                    <h6>Afford Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="" />
                  <div className="">
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* categories section sections */}
      <div className="home-wrapper-3 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p className="">10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p className="">10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Samrt Tv</h6>
                    <p className="">10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p className="">10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p className="">10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p className="">10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Samrt Tv</h6>
                    <p className="">10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p className="">10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brand name automatically generated */}
      <div className="home-wrapper-4 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <BrandName />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* featured-collection section */}
      <div className="featred-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      {/* famouse-products */}
      <div className="famous-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Famous Products</h3>
            </div>
          </div>
          <div className="row">
            <FamouseCard />
          </div>
        </div>
      </div>
      {/* special-product */}
      <div className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </div>
      {/* popular-wrapper */}
      <div className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      {/* blogs section */}
      <div className="blog-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blog</h3>
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
