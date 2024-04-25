import React from "react";
import { Link } from "react-router-dom";

const ProductCards = ({ setIsMenuVisible }) => {
  return (
    <div className="product-box-container">
      <Link to="/headphones" onClick={() => setIsMenuVisible(false)}>
        <div className="product-box">
          <img
            className="mk1"
            src={"/assets/home/mobile/mk1headphone.png"}
            alt=""
          />
          <div className="product-box-title mb-3">HEADPHONES</div>
          <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.32178 1L6.32178 6L1.32178 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </Link>
      <div className="product-box">
        <Link to="/speakers" onClick={() => setIsMenuVisible(false)}>
          <img
            className="mk1"
            src={"/assets/home/mobile/image-speaker-zx9.png"}
            alt=""
          />
          <div className="product-box-title mb-3">Speakers</div>
          <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.32178 1L6.32178 6L1.32178 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="product-box">
        <Link to="/earphones" onClick={() => setIsMenuVisible(false)}>
          <img
            className="mk1"
            src={"/assets/home/mobile/earphone.png"}
            alt=""
          />
          <div className="product-box-title mb-3">HEADPHONES</div>
          <div className="shop-text-container">
            <div className="shop-text">SHOP</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.32178 1L6.32178 6L1.32178 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;
