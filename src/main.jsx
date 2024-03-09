import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./layout/Header/Header";
import Banner from "./layout/Banner/Banner";
import Content from "./layout/Content/Content";
import Footer from "./layout/Footer/Footer";
import "../src/index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Content />
    <Footer />
  </React.StrictMode>
);
