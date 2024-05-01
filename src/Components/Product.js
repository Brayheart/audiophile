import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, index }) => {
  const { name, image, slug, new: isNew, price, description } = product;
  const isReverse = index % 2 !== 0;

  return (
    <div>
      <div
        className={`bg-white rounded-lg p-4 text-center lg:px-36 ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:flex lg:items-center lg:justify-center`}
      >
        <picture className="lg:w-full">
          <source
            media="(min-width: 1024px)"
            srcSet={product.categoryImage.desktop.slice(1)}
          />
          <source
            media="(min-width: 768px)"
            srcSet={product.categoryImage.tablet}
          />
          <img
            src={product.categoryImage.mobile}
            className="mb-5 rounded-lg md:my-10"
          />
        </picture>
        {/* Use desktop image for now, adjust for responsiveness */}
        {/* {isNew && (
          <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full mb-2">
            New product
          </span>
        )} */}
        <div className="lg:text-left lg:w-full lg:p-20">
          <h3 className="text-3xl font-semibold px-10 md:text-5xl md:px-[200px] lg:p-0">
            {name}
          </h3>
          <p className="text-gray-700 text-md my-5 md:my-10 md:px-20 lg:p-0">
            {description}
          </p>
          <Link to={`${slug}`} state={{ product }}>
            <button className="bg-orange-500 text-white uppercase font-bold py-3 px-6 rounded-sm hover:bg-orange-600 transition-colors md:py-4 md:px-8 lg:px-6 lg:text-sm lg:py-3 mb-20">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
