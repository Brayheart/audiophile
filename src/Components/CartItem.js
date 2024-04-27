import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";

const CartItem = ({ item, quantity, onIncrement, onDecrement, slug }) => {
  return (
    <div className="flex w-full items-center justify-between mt-5">
      <div className="flex items-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/cart/image-${slug}.jpg`}
          alt=""
          className="w-[90px] rounded-lg block"
        />
        <div className="ml-5">
          <h3 className="font-bold">{item.name}</h3>
          <p>{"$" + item.price}</p>
        </div>
      </div>
      <div className="bg-gray-300 rounded-md">
        <button
          onClick={onDecrement}
          className="px-3 py-2 hover:bg-gray-100 focus:outline-none"
        >
          -
        </button>
        <div className="w-12 text-center border-0 focus:ring-0 bg-gray-300">
          {quantity}
        </div>
        <button
          onClick={onIncrement}
          className="px-3 py-2 hover:bg-gray-100 focus:outline-none"
        >
          +
        </button>
      </div>

      {/* <TrashIcon onClick={() => removeItem(item.name)} className="w-1/12" /> */}
    </div>
  );
};

export default CartItem;
