import React from "react";
import "./TermsAndCondition.css";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import Meta from "../../Components/MetaComponent/Meta";
import Hoc from "../../Components/Hoc/Hoc";
function TermsAndCondition(props) {
  return (
    <>
      <Meta title={"Terms And Condition"} />
      <BreadCrums title="Terms And Condition" />
      <Hoc class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy-content"></div>
          </div>
        </div>
      </Hoc>
    </>
  );
}

export default TermsAndCondition;
