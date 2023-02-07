import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div className="home-wrapper-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute t-20">
                  <h4>SUPERCHARGED FOR PRODS.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>Form $999.00 or $41.62/mo.</p>
                  <Link to="">Buy now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
