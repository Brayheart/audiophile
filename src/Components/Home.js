import React from "react";
import "./Home.scss";
import ProductCards from "./ProductCards";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="relative text-center text-white">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={"/assets/home/desktop/image-hero.jpg"}
          />
          <source
            media="(min-width: 768px)"
            srcSet={"/assets/home/tablet/image-header.jpg"}
          />
          <img
            src={"/assets/home/mobile/image-header.jpg"}
            alt="XX99 Mark II Headphones"
            className="w-full h-auto"
          />
        </picture>

        {/* Product Info */}
        <div className="absolute top-[160px] flex justify-center w-full md:top-[180px] lg:top-[100px] xl:top-[250px] lg:justify-start">
          <div className="text-white p-6 w-full px-10 md:px-44 lg:px-36 lg:pr-0 lg:text-left lg:w-1/2">
            <div className="text-sm uppercase tracking-widest font-semibold mb-2 md:text-xl md:mb-8 lg:text-base">
              New Product
            </div>
            <h1 className="text-3xl font-bold leading-tight mb-4 md:text-5xl md:mb-8 lg:text-4xl">
              XX99 Mark II Headphones
            </h1>
            <p className="text-base mb-6 md:text-lg md:mb-8 lg:text-xl">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="bg-orange-500 text-white uppercase font-bold py-3 px-6 rounded-sm hover:bg-orange-600 transition-colors md:py-4 md:px-8 lg:px-6 lg:text-sm lg:py-3">
              See Product
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <ProductCards />

      <div className="bg-orange-400 rounded mx-5 mt-20 lg:mx-36 flex flex-col items-center text-center text-white lg:flex-row lg:justify-center lg:text-left lg:justify-evenly">
        <div className="w-[150px] md:w-[250px] lg:mb-[-83px] overflow-hidden">
          <img
            src={"assets/home/mobile/image-speaker-zx9.png"}
            alt="ZX9 Speaker"
            className="w-full mb-[-22px] md:mb-[-50px] lg:mb-[-10px]"
          />
        </div>
        <div className="mt-16">
          <h2 className="font-bold text-4xl mb-10 md:text-6xl lg:text-4xl lg:mb-5">
            <span className="block">ZX9</span>
            <span className="block">SPEAKER</span>
          </h2>

          <p className="text-md px-5 mb-5 md:w-[400px] md:text-lg md:mb-10 lg:pl-0 lg:mb-5">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black text-white uppercase font-bold py-3 px-6 rounded-sm mb-16 hover:bg-orange-600 transition-colors md:py-4 md:px-8 lg:px-6 lg:py-3 lg:text-sm">
            See Product
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <div className="p-5">
          <div className="relative rounded-lg overflow-hidden">
            <div
              className="bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${"/assets/home/mobile/image-speaker-zx7.jpg"})`,
                paddingTop: "75%", // This sets the aspect ratio of the image container
              }}
            >
              {/* The image will cover this div, which has rounded corners at the top */}
            </div>
            <div className="text-center p-6 absolute top-1/4">
              <h2 className="text-2xl font-bold mb-4">ZX7 SPEAKER</h2>
              <Link
                to="/speakers/zx9-speaker"
                className="border-2 border-black text-black px-8 py-2 inline-block hover:bg-black hover:text-white transition-colors"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div
          className="bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${"assets/home/mobile/image-earphones-yx1.jpg"})`,
            paddingTop: "75%", // This sets the aspect ratio of the image container
          }}
        ></div>
      </div>

      <div className="flex justify-start items-center bg-gray-100 m-5 rounded p-10 h-72">
        <div className="text-start">
          <h2 className="text-2xl font-bold mb-4">YX1 EARPHONES</h2>
          <Link
            to="/earphones/yx1-earphones"
            className="border-2 border-black text-black px-8 py-2 inline-block hover:bg-black hover:text-white transition-colors"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
