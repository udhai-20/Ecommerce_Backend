import React from "react";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import "./ForgetPassword.css";
import Meta from "../../Components/MetaComponent/Meta";
import { Link } from "react-router-dom";
import Hoc from "../../Components/Hoc/Hoc";
import CustomeInput from "../../Components/CustomInput/CustomeInput";
function ForgetPassword(props) {
  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrums title="Forget Password" />
      <Hoc class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Rest Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an register email to reset your password{" "}
              </p>
              <form action="" className="d-flex flex-column gap-30">
                <CustomeInput
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                />
                <div className="mt-2 d-flex flex-column align-items-center justify-content-center gap-10">
                  <button className="button login border-0">Sumbit</button>
                  <Link className="mt-3" to="/login">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Hoc>
    </>
  );
}

export default ForgetPassword;
