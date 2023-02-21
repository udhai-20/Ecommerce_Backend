import React from "react";
import "./FamouseCard.css";

function FamouseCard(props) {
  return (
    <>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img
            src="images/famous-1.webp"
            alt="famous-1"
            className="img-fluid"
          />

          <div className="famous-content position-absolute">
            <h5>BIG SCREEN</h5>
            <h6>Smart Watch Serires 7</h6>
            <p>From $399 or $16/mo. for 24 mo.</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img
            src="images/famous-2.webp"
            alt="famous-1"
            className="img-fluid"
          />

          <div className="famous-content position-absolute">
            <h5 className="text-dark">STUDIO DISPLAY</h5>
            <h6 className="text-dark">600 nits of brightness</h6>
            <p className="text-dark">27 inch 5k Retina display</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img
            src="images/famous-3.webp"
            alt="famous-3"
            className="img-fluid"
          />

          <div className="famous-content position-absolute">
            <h5 className="text-dark">STUDIO DISPLAY</h5>
            <h6 className="text-dark">Smart Phone 13 pto</h6>
            <p className="text-dark">Best pbone in the world</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img
            src="images/famous-3.webp"
            alt="famous-3"
            className="img-fluid"
          />

          <div className="famous-content position-absolute">
            <h5 className="text-dark">HOME SPEAKER</h5>
            <h6 className="text-dark">Room filing Sound</h6>
            <p className="text-dark">from $299 to $21366</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FamouseCard;
