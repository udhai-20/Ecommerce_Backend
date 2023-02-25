import React from "react";
import Meta from "../../Components/MetaComponent/Meta";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import { Link } from "react-router-dom";
import Hoc from "../../Components/Hoc/Hoc";
import CustomeInput from "../../Components/CustomInput/CustomeInput";
function ResetPassword(props) {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrums title="Reset Password" />
      <Hoc class1="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomeInput
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                  />
                  <CustomeInput
                    type="password"
                    name="confirmpassword"
                    className="form-control"
                    placeholder="confirm password"
                  />

                  <div className="mt-2 d-flex justify-content-center gap-10">
                    <button className="button border-0">Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Hoc>
    </>
  );
}

export default ResetPassword;
