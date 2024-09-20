import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
// import ProductFruit from "./component/product/ProductFruit";
import ProductDescription from "./pages/ProductDescription";
import ContactUs from "./pages/ContactUs";
import "./App.css";
import AboutUs from "./pages/AboutUs";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<Navbar />}>
        <Route path="home" element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        {/* <Route path="fruits" element={<ProductFruit />} /> */}
        <Route path="details/:id" element={<ProductDescription />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default App;
