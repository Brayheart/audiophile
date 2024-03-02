import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components here
import Home from './Components/Home';
import Headphones from './Components/Headphones';
import Speakers from './Components/Speakers';
import Earphones from './Components/Earphones';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        {/* Routes for product categories */}
        <Route exact path="/headphones" element={<Headphones/>}/>
        <Route exact path="/speakers" element={<Speakers/>} />
        <Route exact path="/earphones" element={<Earphones/>} />

        {/* Routes for individual products */}
        <Route path="/headphones/:slug" element={<ProductDetail element="headphones" />} />
        <Route path="/speakers/:slug" element={<ProductDetail element="speakers" />} />
        <Route path="/earphones/:slug" element={<ProductDetail element="earphones" />} />


        {/* Checkout Route */}
        <Route path="/checkout" element={Checkout} />

        {/* Add a route for a 404 page or redirect to home */}
        <Route render={() => <div>404: Page Not Found</div>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
