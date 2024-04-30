import React from "react";
// import headphones from '../info/assets/home/mobile/mk1headphone.png'
import ProductCards from "./ProductCards";
import Product from "./Product";

const Speakers = ({ products }) => {
  const headphoneProducts = products.filter(
    (product) => product.category === "speakers"
  );
  return (
    <div className="pt-[80px]">
      <div className="bg-black h-100px flex items-center justify-center">
        <div className="text-white text-center text-[28px]">SPEAKERS</div>
      </div>

      <div className="flex flex-col">
        {headphoneProducts.map((product, index) => (
          <Product key={product.id} product={product} index={index} />
        ))}
      </div>

      <ProductCards />
    </div>
  );
};

export default Speakers;
