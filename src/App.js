import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";

// Import your page components here
import Home from "./Components/Home";
import Headphones from "./Components/Headphones";
import Speakers from "./Components/Speakers";
import Earphones from "./Components/Earphones";
import ProductDetail from "./Components/ProductDetail";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import productData from "./info/data.json";

function cleanProductName(name) {
  const substringsToRemove = ["headphones", "speaker", "wireless earphones"];

  let cleanedName = name.toLowerCase();

  substringsToRemove.forEach((substring) => {
    cleanedName = cleanedName.replace(substring, "");
  });

  return cleanedName.toUpperCase().trim();
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (name, quantity, price, slug) => {
    setCart((prevCart) => {
      const cleanName = cleanProductName(name);

      // Check if the product (by cleaned name) already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (item) => cleanProductName(item.name) === cleanName
      );

      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Add new item to the cart with cleaned name and quantity
        return [...prevCart, { name: cleanName, quantity, price, slug }];
      }
    });
  };

  return (
    <Router>
      <Header cart={cart} setCart={setCart} />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home productData={productData} />} />

        {/* Routes for product categories */}
        <Route
          exact
          path="/headphones"
          element={<Headphones products={productData} />}
        />
        <Route
          exact
          path="/speakers"
          element={<Speakers products={productData} />}
        />
        <Route
          exact
          path="/earphones"
          element={<Earphones products={productData} />}
        />

        {/* Routes for individual products */}
        <Route
          path="/:category/:slug"
          element={<ProductDetail addToCart={addToCart} />}
        />

        {/* Checkout Route */}
        <Route
          exact
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />

        {/* Add a route for a 404 page or redirect to home */}
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
