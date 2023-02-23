import React from "react";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import "./Login.css";
import Meta from "../../Components/MetaComponent/Meta";
import { Link } from "react-router-dom";
function Login(props) {
  return (
    <div>
      <Meta title={"Login"} />
      <BreadCrums title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-30">
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
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <Link to="forget-password">Forget Password?</Link>
                <div className="mt-2 d-flex justify-content-center gap-10">
                  <button className="button login">Login</button>
                  <button className="button signup">Sigup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
