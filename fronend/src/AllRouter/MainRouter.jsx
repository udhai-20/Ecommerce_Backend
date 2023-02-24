import React from "react";
import Layout from "../Components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import OurStore from "../Pages/OurStore/OurStore";
import Footer from "../Components/Footer/Footer";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import CompareProduct from "../Pages/Compare Product/CompareProduct";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/Login & Signup/Login";
import Signup from "../Pages/Login & Signup/Signup";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import SingleBlog from "../Pages/SingleBlog/SingleBlog";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import RefundPolicy from "../Pages/RefundPolicy/RefundPolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ShippingPolicy from "../Pages/ShippingPolicy/ShippingPolicy";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
function MainRouter(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/single-product/:id" element={<SingleProduct />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compareproducts" element={<CompareProduct />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/terms-condition" element={<TermsAndCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRouter;
