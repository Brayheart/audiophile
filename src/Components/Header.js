import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";
// import "./Header.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import CartItem from "./CartItem";
import ProductCards from "./ProductCards";

const Header = ({ cart, setCart }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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
      <header className="lg:px-36 header bg-black text-white transparent bg-opacity-0 h-20 fixed top-0 w-full z-10">
        <div className="flex justify-between items-center h-full border-b border-gray-700 ">
          <MenuIcon
            onClick={() => {
              setIsMenuVisible(!isMenuVisible);
              setIsCartVisible(false);
            }}
            className="h-6 w-6 lg:hidden"
          />
          <Link
            className="text-2xl font-bold lg:flex-grow-0 md:flex-grow md:align-center md:text-start md:ml-12 lg:ml-0"
            to="/"
          >
            audiophile
          </Link>
          <ul className="flex gap-5">
            <Link to="/" className="hover:text-orange-400">
              HOME
            </Link>
            <Link to="/headphones" className="hover:text-orange-400">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="hover:text-orange-400">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="hover:text-orange-400">
              EARPHONES
            </Link>
          </ul>
          <ShoppingCartIcon
            onClick={() => {
              setIsCartVisible(!isCartVisible);
              setIsMenuVisible(false);
            }}
            className="h-6 w-6 hover:text-orange-400 hover:cursor-pointer"
          />
        </div>
      </header>

      {isMenuVisible && <ProductCards setIsMenuVisible={setIsMenuVisible} />}

      {isCartVisible && (
        <div class="bg-white shadow-lg rounded-lg p-6 w-80">
          {cart.map((item) => {
            return (
              <CartItem
                item={item}
                // key={item.id} // Make sure each item has a unique key
                quantity={item.quantity}
                removeItem={removeItem}
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
          <button
            onClick={() => setIsCartVisible(false)}
            class="bg-orange-500 text-white w-full py-3 rounded hover:bg-orange-600 mt-4"
          >
            <Link to="/checkout">CHECKOUT</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
