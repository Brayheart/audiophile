import React from 'react';
import header from '../info/assets/home/mobile/image-header.jpg';
import speakers from '../info/assets/home/mobile/image-speaker-zx9.png';
import earphone from '../info/assets/home/mobile/earphone.png'
import mk1headphone from '../info/assets/home/mobile/mk1headphone.png'
import './Home.scss';

const Home = () => {
  return (
    <div>
      {/* header */}
      <div class="relative text-center text-white">
        {/* Product Image */}
        <img src={header} alt="XX99 Mark II Headphones" class="w-full h-auto" />

        {/* Product Info */}
        <div class="product-header absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span class="new-product">New Product</span>
          <h2 class="product-title">XX99 MARK II HEADPHONES</h2>
          <p class="mb-6">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <a href="#" class="see-product-btn">See Product</a>
        </div>
      </div>


      {/* Products */}
      <div className="product-box-container">
        <div className="product-box">
          <img className='mk1' src={mk1headphone} alt="" />
          <div className="product-box-title mb-3">HEADPHONES</div>
          <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
            </svg>
          </div>
        </div>
        <div className="product-box">
          <img className='mk1' src={mk1headphone} alt="" />
          <div className="product-box-title mb-3">HEADPHONES</div>
          <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
            </svg>
          </div>
        </div>
        <div className="product-box">
          <img className='mk1' src={mk1headphone} alt="" />
          <div className="product-box-title mb-3">HEADPHONES</div>
          <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
