import React from "react";
import Meta from "../../Components/MetaComponent/Meta";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import { Link } from "react-router-dom";
function ResetPassword(props) {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrums title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="confirm password"
                    />
                  </div>

                  <div className="mt-2 d-flex justify-content-center gap-10">
                    <button className="button border-0">Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
