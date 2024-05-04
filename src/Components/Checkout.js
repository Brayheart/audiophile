import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="mt-[150px] w-full md:px-36">
      <form className="flex flex-col lg:flex-row w-full">
        <div className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-2">CHECKOUT</h2>

          <div class="grid grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Alexei Ward"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="alexei@mail.com"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="+202-555-0136"
              />
            </div>
          </div>
          {/* ... shipping info fields ... */}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Your Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="1137 Williams Avenue"
            />
          </div>

          {/* ... other fields ... */}
          <div class="grid grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="zip"
              >
                ZIP Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="zip"
                type="text"
                placeholder="10001"
              />
            </div>

            {/* ... other fields ... */}

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="New York"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="United States"
              />
            </div>
          </div>
          {/* Payment Details */}

          <fieldset className="mb-4">
            <legend className="block text-gray-700 text-sm font-bold mb-2">
              Payment Method
            </legend>
            <div className="flex items-center mb-4">
              <input
                id="e-money"
                type="radio"
                name="payment"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="e-money"
                className="ml-2 block text-sm text-gray-900"
              >
                e-Money
              </label>
            </div>

            {/* ... other payment method fields ... */}

            <div className="flex items-center">
              <input
                id="cash"
                type="radio"
                name="payment"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="cash"
                className="ml-2 block text-sm text-gray-900"
              >
                Cash on Delivery
              </label>
            </div>
          </fieldset>
          <div class="grid grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="e-money-number"
              >
                e-Money Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="e-money-number"
                type="text"
                placeholder="238521993"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="e-money-pin"
              >
                e-Money PIN
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="e-money-pin"
                type="password"
                placeholder="****"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 ml-10">
          {cart.map((item) => {
            console.log(item);
            return (
              <div className="flex w-full items-center justify-between mt-5">
                <div className="flex items-center text-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/cart/image-${item.slug}.jpg`}
                    alt=""
                    className="w-[90px] rounded-lg block"
                  />
                  <div className="ml-5">
                    <h3 className="font-bold">{item.name}</h3>
                    <p>{"$" + item.price}</p>
                  </div>
                </div>
                <div className="">{"x" + item.quantity}</div>
              </div>
            );
          })}
          <div className="my-5 flex justify-between">
            <div>TOTAL</div>
            <div className="font-bold">${calculateTotalPrice()}</div>
          </div>
          <div className="my-5 flex justify-between">
            <div>SHIPPING</div>
            <div className="font-bold">$50</div>
          </div>
          <div className="my-5 flex justify-between">
            <div>VAT ( included )</div>
            <div className="font-bold">${calculateTotalPrice()}</div>
          </div>
          <div className="my-5 flex justify-between">
            <div>GRAND TOTAL</div>
            <div className="font-bold">${calculateTotalPrice() + 50}</div>
          </div>
          <button class="bg-orange-500 text-white w-full py-3 rounded hover:bg-orange-600 ">
            <Link to="/checkout">Continue and Pay</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
