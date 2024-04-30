import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import ProductCards from "./ProductCards";

const Header = ({ cart, setCart }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Set the state to true if the page has scrolled down
      setHasScrolled(window.pageYOffset > 0);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header
        className={`fixed top-0 w-full z-10 text-white h-20  md:px-10 md:px-28 lg:px-36 header ${
          !isHomePage || (isHomePage && hasScrolled)
            ? "bg-black"
            : "bg-opacity-0"
        }`}
      >
        <div className="flex px-5 justify-between items-center h-full md:border-b border-gray-700 ">
          <MenuIcon
            onClick={() => {
              setIsMenuVisible(!isMenuVisible);
              setIsCartVisible(false);
            }}
            className="h-6 w-6 lg:hidden"
          />
          <Link
            className="md:text-2xl text-lg font-bold lg:flex-grow-0 md:flex-grow md:align-center md:text-start md:ml-12 lg:ml-0"
            to="/"
          >
            audiophile
          </Link>
          <ul className="gap-5 hidden lg:flex">
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
        {isMenuVisible && (
          <div
            className="bg-white text-black px-5 pt-20"
            onClick={setIsMenuVisible}
          >
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
        )}
      </header>

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
