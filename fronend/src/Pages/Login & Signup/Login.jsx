import React from "react";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import "./Login.css";
import Meta from "../../Components/MetaComponent/Meta";
import { Link, useNavigate } from "react-router-dom";
import Hoc from "../../Components/Hoc/Hoc";
import CustomeInput from "../../Components/CustomInput/CustomeInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Feature/User/UserSlice";
let loginSchema = yup.object({
  email: yup
    .string()
    .email("Email Should Be Valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
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
                <form
                  onSubmit={formik.handleSubmit}
                  action=""
                  className="d-flex flex-column gap-10"
                >
                  <CustomeInput
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="text-danger">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <CustomeInput
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <div className="error text-danger">
                    {formik.touched.password && formik.errors.password}
                  </div>
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
