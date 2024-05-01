import React from "react";
import { Link } from "react-router-dom";

const ProductCards = ({ setIsMenuVisible }) => {
  return (
    <div className="px-5 flex flex-col mt-20 md:flex-row md:justify-between md:px-10 lg:px-36">
      {/* <Link to="/headphones" onClick={() => setIsMenuVisible(false)}> */}
      <div className="flex flex-col items-center px-10 py-5 bg-gray-100 rounded-lg mb-20 md:mb-0 w-full">
        <img
          className="w-[90px] mt-[-70px] mb-8"
          src={`${process.env.PUBLIC_URL}/assets/home/mobile/mk1headphone.png`}
          alt=""
        />
        <div className="font-bold mb-2">HEADPHONES</div>
        <Link to="/headphones">
          <div className="flex items-center">
            <div className="mr-2 text-gray-500">SHOP</div>
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
      <div className="flex flex-col items-center px-10 py-5 bg-gray-100 rounded-lg mb-20 md:mb-0 w-full md:mx-5">
        <img
          className="w-[90px] mt-[-70px] mb-8"
          src={`${process.env.PUBLIC_URL}/assets/home/mobile/image-speaker-zx9.png`}
          alt=""
        />
        <div className="font-bold mb-2">SPEAKERS</div>
        <Link to="/speakers">
          <div className="flex items-center">
            <div className="mr-2 text-gray-500">SHOP</div>
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
      <div className="flex flex-col items-center px-10 py-5 bg-gray-100 rounded-lg md:mb-0 w-full">
        <img
          className="w-[140px] mt-[-90px] mb-8"
          src={`${process.env.PUBLIC_URL}/assets/home/mobile/earphone.png`}
          alt=""
        />
        <div className="font-bold mb-2">EARPHONES</div>
        <Link to="/earphones">
          <div className="flex items-center">
            <div className="mr-2 text-gray-500">SHOP</div>
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
