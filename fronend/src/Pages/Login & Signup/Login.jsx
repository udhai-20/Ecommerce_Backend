import React from "react";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import "./Login.css";
import Meta from "../../Components/MetaComponent/Meta";
import { Link, useNavigate } from "react-router-dom";
import Hoc from "../../Components/Hoc/Hoc";
import CustomeInput from "../../Components/CustomInput/CustomeInput";
function Login(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Meta title={"Login"} />
      <BreadCrums title="Login" />
      <Hoc class1="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomeInput
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                  />
                  <CustomeInput
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                  />
                  <Link to="/forget-password">Forget Password?</Link>
                  <div className="mt-2 d-flex justify-content-center gap-10">
                    <button className="button login">Login</button>
                    <button
                      className="button signup"
                      onClick={() => navigate("/signup")}
                    >
                      Sigup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Hoc>
    </div>
  );
}

export default Login;
