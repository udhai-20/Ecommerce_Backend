import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import MainRouter from "./AllRouter/MainRouter";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
