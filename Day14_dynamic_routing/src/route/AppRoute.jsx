import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetail from "../componenet/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
