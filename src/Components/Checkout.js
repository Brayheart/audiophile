import React from "react";

const Checkout = ({ cart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <form>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">CHECKOUT</h2>

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

          {/* ... other billing details fields ... */}

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

          {/* ... other fields ... */}

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
        {cart.map((item) => {
          console.log(item);
          return (
            <p>
              {item.name}
              {item.price}
              {item.quantity}
            </p>
          );
        })}
        <div>Total Price: ${calculateTotalPrice()}</div>
      </form>
    </div>
  );
};

export default Checkout;
