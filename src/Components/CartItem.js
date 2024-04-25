import React, { useState } from "react";

const CartItem = ({ item, quantity, onIncrement, onDecrement }) => {
  return (
    <div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </div>
      <button
        onClick={onDecrement}
        className="p-2 hover:bg-gray-100 focus:outline-none"
      >
        -
      </button>
      <input
        type="text"
        className="w-12 text-center border-0 focus:ring-0"
        value={quantity}
        readOnly
      />
      <button
        onClick={onIncrement}
        className="p-2 hover:bg-gray-100 focus:outline-none"
      >
        +
      </button>
    </div>
  );
};

export default CartItem;
