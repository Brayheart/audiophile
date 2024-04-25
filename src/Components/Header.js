import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline"; // Ensure you have @heroicons/react installed
import "./Header.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import CartItem from "./CartItem";

const Header = ({ cart, setCart }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const updateQuantity = (itemName, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  const incrementQuantity = (itemName, quantity) => {
    updateQuantity(itemName, quantity + 1);
  };

  const decrementQuantity = (itemName, quantity) => {
    updateQuantity(itemName, quantity - 1);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <>
      <header className="header bg-black text-white flex justify-between items-center p-4">
        {/* Hamburger Menu Icon */}
        <MenuIcon className="h-6 w-6 md:hidden" />

        {/* Logo */}
        <Link className="text-xl font-bold" to="/">
          audiophile
        </Link>

        {/* Shopping Cart Icon */}
        <button onClick={() => setIsCartVisible(!isCartVisible)}>
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
      </header>

      {isCartVisible && (
        <div class="bg-white shadow-lg rounded-lg p-6 w-80">
          {cart.map((item) => {
            console.log(item);
            return (
              <CartItem
                item={item}
                // key={item.id} // Make sure each item has a unique key
                removeItem={removeItem}
                quantity={item.quantity} // Pass quantity as prop
                onIncrement={() => incrementQuantity(item.name, item.quantity)}
                onDecrement={() =>
                  item.quantity > 1
                    ? decrementQuantity(item.name, item.quantity)
                    : ""
                }
              />
            );
          })}
          <div>Total Price: ${calculateTotalPrice()}</div>
          <button class="bg-orange-500 text-white w-full py-3 rounded hover:bg-orange-600 mt-4">
            CHECKOUT
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
