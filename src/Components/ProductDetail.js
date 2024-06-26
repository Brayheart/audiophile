import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import productData from "../info/data.json";

const ProductDetail = ({ addToCart }) => {
  const { slug } = useParams();
  const { state } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const product = state?.product;

  if (!product) {
    return <div className="mt-[80px]">Product not found</div>;
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

  console.log(product);

  const productDetail = (slug) => {
    return productData.find((product) => product.slug === slug);
  };

  return (
    <div className="container mx-auto px-5 py-16 md:px-0 md:py-2 mt-10 md:mt-32">
      <div className="md:mx-5">
        <div className="flex flex-col md:w-full md:flex-row md:items-center">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={`${process.env.PUBLIC_URL}/` + image.desktop.slice(1)}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${process.env.PUBLIC_URL}/` + image.tablet.slice(1)}
            />
            <img
              src={`${process.env.PUBLIC_URL}/` + image.mobile}
              alt="XX99 Mark II Headphones"
              className="w-full h-auto mb-5 rounded-lg"
            />
          </picture>
          <div className="flex-col md:w-full md:ms-5">
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
                  addToCart(name, quantity, price, slug);
                  setQuantity(0);
                }}
                className="bg-custom-orange text-white px-4 py-2 rounded hover:bg-orange-400 focus:outline-none"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-between">
          <div className="mt-12 lg:w-6/12">
            <h2 className="text-xl font-bold uppercase mb-4 ">FEATURES</h2>
            <p className="text-gray-600">{features}</p>
          </div>
          <div className="mt-12 md:flex md:justify-between lg:flex-col lg:w-4/12 lg:justify-start my-20">
            <h2 className="text-xl font-bold uppercase mb-4">IN THE BOX</h2>
            <ul className="md:w-6/12 lg:w-full">
              {includes.map((item) => (
                <li key={item.item} className="text-gray-600 mb-2">
                  <span className="text-orange-400">{item.quantity}x</span>{" "}
                  {item.item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:flex md:mt-10">
          <div className="md:flex md:flex-col lg:h-full md:mr-5 md:w-[71%] lg:mr-5 lg:w-[72.5%]">
            <picture className="">
              <source
                media="(min-width: 1024px)"
                srcSet={
                  `${process.env.PUBLIC_URL}/` + gallery.first.desktop.slice(1)
                }
              />
              <source
                media="(min-width: 768px)"
                srcSet={
                  `${process.env.PUBLIC_URL}/` + gallery.first.tablet.slice(1)
                }
              />
              <img
                src={
                  `${process.env.PUBLIC_URL}/` + gallery.first.mobile.slice(1)
                }
                alt="XX99 Mark II Headphones"
                className="w-full h-auto rounded-lg mb-5 lg:h-full"
              />
            </picture>
            <picture className="">
              <source
                media="(min-width: 1024px)"
                srcSet={
                  `${process.env.PUBLIC_URL}/` + gallery.second.desktop.slice(1)
                }
              />
              <source
                media="(min-width: 768px)"
                srcSet={
                  `${process.env.PUBLIC_URL}/` + gallery.second.tablet.slice(1)
                }
              />
              <img
                src={
                  `${process.env.PUBLIC_URL}/` + gallery.second.mobile.slice(1)
                }
                alt="XX99 Mark II Headphones"
                className="w-full h-auto rounded-lg mb-5 md:m-0 lg:h-full"
              />
            </picture>
          </div>
          <picture className="w-full">
            <source
              media="(min-width: 1024px)"
              srcSet={
                `${process.env.PUBLIC_URL}/` + gallery.third.desktop.slice(1)
              }
            />
            <source
              media="(min-width: 768px)"
              srcSet={
                `${process.env.PUBLIC_URL}/` + gallery.third.tablet.slice(1)
              }
            />
            <img
              src={`${process.env.PUBLIC_URL}/` + gallery.third.mobile.slice(1)}
              alt="XX99 Mark II Headphones"
              className="w-full h-auto rounded-lg "
            />
          </picture>
        </div>

        <h2 className="text-center text-3xl font-bold mt-20 mb-10">
          YOU MAY ALSO LIKE
        </h2>
        <div className="md:flex md:flex-row md:gap-5">
          {others.map((el) => {
            const productDetails = productDetail(el.slug);
            return (
              <div>
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={
                      `${process.env.PUBLIC_URL}/` + el.image.desktop.slice(1)
                    }
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={
                      `${process.env.PUBLIC_URL}/` + el.image.tablet.slice(1)
                    }
                  />
                  <img
                    src={
                      `${process.env.PUBLIC_URL}/` + el.image.mobile.slice(1)
                    }
                    className="w-full h-auto rounded-lg"
                  />
                </picture>
                <p className="text-center text-2xl font-bold my-5">{el.name}</p>
                <Link
                  to={`/${category}/${el.slug}`}
                  state={{ product: productDetails }}
                >
                  <button className="mx-auto block bg-custom-orange text-white uppercase font-bold py-3 px-6 rounded-sm hover:bg-orange-400 transition-colors md:py-4 md:px-8 lg:px-6 lg:text-sm lg:py-3 mb-10">
                    See Product
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col mt-[150px] md:flex-row md:justify-between">
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
            <Link to="/speakers">
              <div className="font-bold mb-2">SPEAKERS</div>
              <div className="flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default ProductDetail;
