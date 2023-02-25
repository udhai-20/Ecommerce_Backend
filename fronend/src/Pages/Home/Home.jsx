import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import BrandName from "../../Components/BrandName/BrandName";
import BlogCard from "../../Components/BlogCard/BlogCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SpecialProduct from "../../Components/SpecialProduct/SpecialProduct";
import FamouseCard from "../../Components/FamousCard/FamouseCard";
import Hoc from "../../Components/Hoc/Hoc";
import { services } from "../../Utils/Data";

function Home(props) {
  return (
    <>
      <Hoc class1={"home-wrapper-1"}>
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
        {/* //services section */}
      </Hoc>
      {/* services */}
      <Hoc class1={"home-wrapper-2 py-3"}>
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services &&
                services?.map((el, i) => {
                  return (
                    <div
                      className="d-flex align-items-center gap-10"
                      key={el.title}
                    >
                      <img src={el.image} alt={el.title} />
                      <div>
                        <h6>{el.title} </h6>
                        <p className="mb-0">{el.tagline} </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Hoc>
      {/* categories section sections */}
      <Hoc class1={"home-wrapper-3 py-3"}>
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
      </Hoc>
      {/* brand name automatically generated */}
      <Hoc class1={"home-wrapper-4 py-3"}>
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <BrandName />
            </div>
          </div>
        </div>
      </Hoc>
      {/* featured-collection section */}
      <Hoc class1={"featred-wrapper py-4 home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Hoc>
      {/* famouse-products */}
      <Hoc class1={"famous-wrapper home-wrapper-2 py-4 "}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Famous Products</h3>
          </div>
        </div>
        <div className="row">
          <FamouseCard />
        </div>
      </Hoc>
      {/* special-product */}
      <Hoc class1={"special-wrapper py-5 home-wrapper-2"}>
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
      </Hoc>
      {/* popular-wrapper */}
      <Hoc class1={"popular-wrapper py-5 home-wrapper-2"}>
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
      </Hoc>
      {/* blogs section */}
      <Hoc class1={"blog-wrapper py-4 home-wrapper-2"}>
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
      </Hoc>
    </>
  );
}

export default Home;
