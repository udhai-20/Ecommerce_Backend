import React from "react";
import "./ShippingPolicy.css";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import Meta from "../../Components/MetaComponent/Meta";
import Hoc from "../../Components/Hoc/Hoc";

function ShippingPolicy(props) {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrums title="Shipping Policy" />
      <Hoc class1="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy-content"></div>
            </div>
          </div>
        </div>
      </Hoc>
    </>
  );
}

export default ShippingPolicy;
