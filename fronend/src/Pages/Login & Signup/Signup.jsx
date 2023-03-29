import React from "react";
import "./Login.css";
import Meta from "../../Components/MetaComponent/Meta";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import { Link, useNavigate } from "react-router-dom";
import Hoc from "../../Components/Hoc/Hoc";
import CustomeInput from "../../Components/CustomInput/CustomeInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Feature/User/UserSlice";

let signupSchema = yup.object({
  firstname: yup.string().required("First Name Required"),
  lastname: yup.string().required("Last Name Required"),
  email: yup
    .string()
    .email("Email Should Be Valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile Number Requird"),
  password: yup.string().required("Password is Required"),
});
function Signup(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values)).then((res) => {
        if (!res.error) {
          navigate("/login");
        }
      });
    },
  });
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
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-10"
                >
                  <CustomeInput
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="First name"
                    value={formik.values.firstname}
                    onBlur={formik.handleBlur("firstname")}
                    onChange={formik.handleChange("firstname")}
                  />
                  <div className="text-danger">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                  <CustomeInput
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Last name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                  <div className="text-danger">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                  <CustomeInput
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="text-danger">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <CustomeInput
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                  <div className="text-danger">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                  <CustomeInput
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <div className="error text-danger">
                    {formik.touched.password && formik.errors.password}
                  </div>

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
