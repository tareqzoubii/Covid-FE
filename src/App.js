import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Home from "./Home";
import AllCountries from "./AllCountries";
import Records from "./Records";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcountries" element={<AllCountries />} />
          <Route path="/myrecords" element={<Records />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;