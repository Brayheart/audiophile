import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

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

  const getTotalQuantity = () => {
    return cart.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  };

  const total = getTotalQuantity();

  return (
    <>
      <header
        className={`fixed top-0 w-full z-10 text-white h-20 lg:px-36 header ${
          !isHomePage || (isHomePage && hasScrolled)
            ? "bg-black"
            : "bg-opacity-0"
        }`}
      >
        <div className="flex px-5 justify-between items-center h-full md:border-b border-gray-700">
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
            <Link to="/" className="hover:text-orange-400 transition-colors">
              HOME
            </Link>
            <Link
              to="/headphones"
              className="hover:text-orange-400 transition-colors"
            >
              HEADPHONES
            </Link>
            <Link
              to="/speakers"
              className="hover:text-orange-400 transition-colors"
            >
              SPEAKERS
            </Link>
            <Link
              to="/earphones"
              className="hover:text-orange-400 transition-colors"
            >
              EARPHONES
            </Link>
          </ul>
          <div className="relative">
            <ShoppingCartIcon
              onClick={() => {
                setIsCartVisible(!isCartVisible);
                setIsMenuVisible(false);
              }}
              className="h-6 w-6 hover:text-orange-400 hover:cursor-pointer transition-colors"
            />
            <span className="absolute bg-orange-500 rounded-full px-[6.4px] top-[-10px] right-[-5px] text-[12px]">
              {total ? total : ""}
            </span>
          </div>
        </div>
        {isMenuVisible && (
          <div
            onClick={() => setIsMenuVisible(false)}
            className="fixed top-[80px] inset-x-0 bottom-0 bg-black bg-opacity-50 p-0 m-0"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black px-10 py-16 md:flex md:px-0 md:rounded-b-md md:px-5"
            >
              <div className="flex flex-col items-center px-10 md:px-5 py-5 bg-gray-100 rounded-lg mb-16 md:mb-0 w-full">
                <img
                  className="w-[60px] mt-[-70px] mb-5"
                  src={`${process.env.PUBLIC_URL}/assets/home/mobile/mk1headphone.png`}
                  alt=""
                />
                <div className="font-bold mb-2">HEADPHONES</div>
                <Link to="/headphones" onClick={() => setIsMenuVisible(false)}>
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
              <div className="flex flex-col items-center px-10 md:px-5 py-5 bg-gray-100 rounded-lg mb-16 md:mb-0 w-full md:mx-5">
                <img
                  className="w-[60px] mt-[-70px] mb-5"
                  src={`${process.env.PUBLIC_URL}/assets/home/mobile/image-speaker-zx9.png`}
                  alt=""
                />
                <div className="font-bold mb-2">SPEAKERS</div>
                <Link to="/speakers" onClick={() => setIsMenuVisible(false)}>
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
              <div className="flex flex-col items-center px-10 md:px-5 py-5 bg-gray-100 rounded-lg md:mb-0 w-full">
                <img
                  className="w-[100px] mt-[-80px] mb-5"
                  src={`${process.env.PUBLIC_URL}/assets/home/mobile/earphone.png`}
                  alt=""
                />
                <div className="font-bold mb-2">EARPHONES</div>
                <Link to="/earphones" onClick={() => setIsMenuVisible(false)}>
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
        )}
        {isCartVisible && (
          <div
            onClick={() => setIsCartVisible(false)}
            className="fixed top-[60px] inset-x-0 bottom-0 bg-black bg-opacity-50 p-0 m-0 md:flex md:justify-end  md:px-36"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black shadow-lg rounded-lg m-5 p-5 mt-20 md:w-[400px] h-fit"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl">Cart ( {cart.length} )</h2>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setCart([]);
                    setIsCartVisible(false);
                  }}
                >
                  Remove All
                </p>
              </div>
              {cart.map((item) => {
                return (
                  <div className="flex items-center">
                    {console.log(item)}
                    <CartItem
                      slug={item.slug}
                      item={item}
                      // key={item.id} // Make sure each item has a unique key
                      quantity={item.quantity}
                      removeItem={removeItem}
                      onIncrement={() =>
                        incrementQuantity(item.name, item.quantity)
                      }
                      onDecrement={() =>
                        item.quantity > 1
                          ? decrementQuantity(item.name, item.quantity)
                          : ""
                      }
                    />
                  </div>
                );
              })}
              <div className="my-5 flex justify-between">
                <div>TOTAL</div>
                <div className="font-bold">${calculateTotalPrice()}</div>
              </div>
              {cart.length > 0 && (
                <Link to="/checkout">
                  <button
                    onClick={() => setIsCartVisible(false)}
                    class="bg-orange-500 text-white w-full py-3 rounded hover:bg-orange-600"
                  >
                    CHECKOUT
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
