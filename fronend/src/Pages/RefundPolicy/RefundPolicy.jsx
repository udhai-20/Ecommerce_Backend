import React from "react";
import "./RefundPolicy.css";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import Meta from "../../Components/MetaComponent/Meta";
function RefundPolicy(props) {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrums title="Refund Policy" />
      <div className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy-content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RefundPolicy;
