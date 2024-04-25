import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";

const CartItem = ({ item, quantity, onIncrement, onDecrement, removeItem }) => {
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

      <TrashIcon onClick={() => removeItem(item.name)} className="w-1/12" />
    </div>
  );
};

export default CartItem;
