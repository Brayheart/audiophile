import React from 'react';
import header from '../info/assets/home/mobile/image-header.jpg';
import speakers from '../info/assets/home/mobile/image-speaker-zx9.png';
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
      {/* <div className="product-card">
        <p>HEADPHONES</p>
      </div> */}

    </div>
  );
}

export default Home;
