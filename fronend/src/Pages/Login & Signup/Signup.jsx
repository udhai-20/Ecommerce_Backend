import React from "react";
import "./Login.css";
import Meta from "../../Components/MetaComponent/Meta";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import { Link } from "react-router-dom";
import Hoc from "../../Components/Hoc/Hoc";
import CustomeInput from "../../Components/CustomInput/CustomeInput";
function Signup(props) {
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrums title="Signup" />
      <Hoc class1="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomeInput
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="First name"
                  />
                  <CustomeInput
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Last name"
                  />
                  <CustomeInput
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <CustomeInput
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile number"
                  />
                  <CustomeInput
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />

                  <div className="mt-2 d-flex justify-content-center gap-10">
                    <button className="button login border-0">Signup</button>
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

export default Signup;
