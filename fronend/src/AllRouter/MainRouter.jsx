import React from "react";
import Layout from "../Components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
function MainRouter(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRouter;
