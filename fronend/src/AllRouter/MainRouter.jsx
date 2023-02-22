import React from "react";
import Layout from "../Components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import OurStore from "../Pages/OurStore/OurStore";
import Footer from "../Components/Footer/Footer";
import Blog from "../Pages/Blog/Blog";
function MainRouter(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRouter;
