import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (name, quantity, price) => {
    setCart((prevCart) => {
      // Check if the product (by name) already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (item) => item.name === name
      );

      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Add new item to the cart with name and quantity
        return [...prevCart, { name, quantity, price }];
      }
    });
  };

  return (
    <Router>
      <Header cart={cart} setCart={setCart} />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />

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
        <Route exact path="/checkout" element={<Checkout cart={cart} />} />

        {/* Add a route for a 404 page or redirect to home */}
        <Route render={() => <div>404: Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
