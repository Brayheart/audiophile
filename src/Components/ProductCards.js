import React from 'react';
// import '/assets/home/mobile/mk1headphone.png' from '../info/assets/home/mobile/mk1headphone.png'

const ProductCards = () => {

  return (
    <div className="product-box-container">
        <div className="product-box">
            <img className='mk1' src={'/assets/home/mobile/mk1headphone.png'} alt="" />
            <div className="product-box-title mb-3">HEADPHONES</div>
            <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
            </svg>
            </div>
        </div>
        <div className="product-box">
            <img className='mk1' src={'/assets/home/mobile/mk1headphone.png'} alt="" />
            <div className="product-box-title mb-3">HEADPHONES</div>
            <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
            </svg>
            </div>
        </div>
        <div className="product-box">
            <img className='mk1' src={'/assets/home/mobile/mk1headphone.png'} alt="" />
            <div className="product-box-title mb-3">HEADPHONES</div>
            <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
            </svg>
            </div>
        </div>
    </div>
  );
}

export default ProductCards;
