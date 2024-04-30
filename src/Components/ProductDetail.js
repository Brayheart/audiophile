import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductCards from "./ProductCards";

const ProductDetail = ({ addToCart }) => {
  const { slug } = useParams();
  const { state } = useLocation();
  const product = state?.product;
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    name,
    image,
    category,
    new: isNew,
    price,
    description,
    features,
    includes,
    gallery,
    others,
  } = product;

  console.log(others);

  return (
    <div className="container mx-auto px-5 py-16 md:px-0 md:py-2 mt-10 md:mt-32">
      <div className="">
        <div className="flex flex-col md:w-full md:flex-row md:items-center">
          <picture>
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <source media="(min-width: 768px)" srcSet={image.tablet} />
            <img
              src={image.mobile}
              alt="XX99 Mark II Headphones"
              className="w-full h-auto mb-5 rounded-lg"
            />
          </picture>
          <div className="flex-col md:w-full px-10">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="text-gray-600 mb-8">{description}</p>
            <p className="text-2xl font-bold mb-6">${price}</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center border border-gray-300 text-gray-600">
                <button
                  onClick={() =>
                    quantity > 0 ? setQuantity(quantity - 1) : quantity
                  }
                  className="p-2 hover:bg-gray-100 focus:outline-none"
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-12 text-center border-0 focus:ring-0"
                  value={quantity}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 focus:outline-none"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => {
                  addToCart(name, quantity, price);
                  setQuantity(0);
                }}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold uppercase mb-4">FEATURES</h2>
          <p className="text-gray-600">{features}</p>
        </div>
        <div className="mt-12 md:flex md:justify-between">
          <h2 className="text-xl font-bold uppercase mb-4">IN THE BOX</h2>
          <ul className="md:w-6/12">
            {includes.map((item) => (
              <li key={item.item} className="text-gray-600 mb-2">
                {item.quantity}x {item.item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:flex md:mt-10">
          <div className="md:flex md:flex-col md:justify-between">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={gallery.first.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={gallery.first.tablet}
              />
              <img
                src={gallery.first.mobile}
                alt="XX99 Mark II Headphones"
                className="w-full h-auto rounded-lg mb-5 mt-10 md:m-0"
              />
            </picture>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={gallery.second.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={gallery.second.tablet}
              />
              <img
                src={gallery.second.mobile}
                alt="XX99 Mark II Headphones"
                className="w-full h-auto rounded-lg mb-5 md:m-0"
              />
            </picture>
          </div>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={gallery.third.desktop}
            />
            <source media="(min-width: 768px)" srcSet={gallery.third.tablet} />
            <img
              src={gallery.third.mobile}
              alt="XX99 Mark II Headphones"
              className="w-full h-auto rounded-lg md:ml-5"
            />
          </picture>
        </div>

        <h2 className="text-center text-3xl font-bold mt-20 mb-10">
          YOU MAY ALSO LIKE
        </h2>
        <div className="md:flex md:flex-row md:gap-5">
          {others.map((el) => {
            return (
              <div>
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={el.image.desktop}
                  />
                  <source media="(min-width: 768px)" srcSet={el.image.tablet} />
                  <img
                    src={el.image.mobile}
                    className="w-full h-auto rounded-lg"
                  />
                </picture>
                <p className="text-center text-2xl font-bold my-5">{el.name}</p>
                <button className="mx-auto block bg-orange-500 text-white uppercase font-bold py-3 px-6 rounded-sm hover:bg-orange-600 transition-colors md:py-4 md:px-8 lg:px-6 lg:text-sm lg:py-3 mb-10">
                  See Product
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col mt-[150px] md:flex-row md:justify-between">
          {/* <Link to="/headphones" onClick={() => setIsMenuVisible(false)}> */}
          <div className="flex flex-col items-center px-10 py-5 bg-gray-100 rounded-lg mb-20 md:mb-0 w-full">
            <img
              className="w-[90px] mt-[-70px] mb-8"
              src={"/assets/home/mobile/mk1headphone.png"}
              alt=""
            />
            <div className="font-bold mb-2">HEADPHONES</div>
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
          </div>
          <div className="flex flex-col items-center px-10 py-5 bg-gray-100 rounded-lg mb-20 md:mb-0 w-full md:mx-5">
            <img
              className="w-[90px] mt-[-70px] mb-8"
              src={"/assets/home/mobile/image-speaker-zx9.png"}
              alt=""
            />
            <div className="font-bold mb-2">SPEAKERS</div>
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
          </div>
          <div className="flex flex-col items-center px-10 py-5 bg-gray-100 rounded-lg md:mb-0 w-full">
            <img
              className="w-[140px] mt-[-90px] mb-8"
              src={"/assets/home/mobile/earphone.png"}
              alt=""
            />
            <div className="font-bold mb-2">EARPHONES</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
