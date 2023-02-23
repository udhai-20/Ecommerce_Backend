import React from "react";
import "./Login.css";
import Meta from "../../Components/MetaComponent/Meta";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import { Link } from "react-router-dom";
function Signup(props) {
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrums title="Signup" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      placeholder="mobile number"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>

                  <div className="mt-2 d-flex justify-content-center gap-10">
                    <button className="button login border-0">Signup</button>
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

export default Signup;
