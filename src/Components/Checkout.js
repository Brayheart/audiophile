import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cart, setCart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [dummyData, setDummyData] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [modal, setIsModal] = useState(false);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const isFormValid = () => {
    return name && email && phone && address && country && zip && city
      ? true
      : false;
  };

  const fillForm = () => {
    setName("Tyler Bray");
    setEmail("example@gmail.com");
    setPhone(9999999999);
    setAddress("42 wallaby way sydney");
    setCity("Los Angeles");
    setZip(67894);
    setCountry("USA");
    setPaymentMethod(true);
  };

  return (
    <div>
      {
        <div className="mt-[150px] w-full px-5 md:px-5">
          <form className="flex flex-col lg:flex-row w-full">
            <div className="mb-6 w-full">
              <h2 className="text-2xl font-semibold mb-2">CHECKOUT</h2>
              {dummyData && (
                <button
                  onClick={() => {
                    setDummyData(false);
                    fillForm();
                  }}
                  className="text-white text-[12px] py-2 px-3 mb-5 rounded hover:bg-orange-600 cursor-pointer bg-orange-400"
                >
                  Click me for dummy data!
                </button>
              )}
              <div className="text-red-400 text-[14px] mb-2">
                * Required Field
              </div>
              <div class="grid flex-col lg:grid-cols-2 gap-6">
                <div className="md:mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Alexei Ward"
                    value={name}
                    required
                  />
                </div>

                <div className="md:mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={email}
                    placeholder="alexei@mail.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    value={phone}
                    placeholder="+202-555-0136"
                    required
                  />
                </div>
              </div>
              {/* ... shipping info fields ... */}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Your Address <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  value={address}
                  placeholder="1137 Williams Avenue"
                  required
                />
              </div>

              {/* ... other fields ... */}
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="md:mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="zip"
                  >
                    ZIP Code <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={(e) => setZip(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="zip"
                    type="text"
                    placeholder="10001"
                    value={zip}
                    required
                  />
                </div>

                {/* ... other fields ... */}

                <div className="md:mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="city"
                  >
                    City <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="New York"
                    value={city}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="country"
                  >
                    Country <span className="text-red-400">*</span>
                  </label>
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="country"
                    type="text"
                    placeholder="United States"
                    value={country}
                    required
                  />
                </div>
              </div>
              {/* Payment Details */}

              <fieldset className="mb-4">
                <legend className="block text-gray-700 text-sm font-bold mb-2">
                  Payment Method <span className="text-red-400">*</span>
                </legend>
                <div className="flex items-center mb-4">
                  <input
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    id="e-money"
                    type="radio"
                    name="payment"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    checked={paymentMethod}
                    required
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
                    required
                  />
                  <label
                    htmlFor="cash"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Cash on Delivery
                  </label>
                </div>
              </fieldset>
              <div class="grid flex-col lg:grid-cols-2 gap-6">
                <div className="md:mb-4">
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
            {cart.length > 0 && (
              <div className="lg:w-5/12 ml-0 lg:ml-10 lg:mr-5">
                {cart.map((item) => {
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
                  {console.log(isFormValid())}
                </div>
                <button
                  onClick={() => setIsModal(true)}
                  disabled={!isFormValid()}
                  className={`${
                    isFormValid()
                      ? "bg-orange-500"
                      : "bg-gray-300 hover:bg-gray-300 cursor-default"
                  } text-white w-full py-3 rounded hover:bg-orange-600 cursor-pointer`}
                >
                  Continue and Pay
                </button>
              </div>
            )}
          </form>
        </div>
      }
      {modal && (
        <div className="fixed w-full h-full bg-[rgb(64,64,64,0.6)] inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col p-5 bg-white rounded-lg">
            <h2 className="text-xl font-bold">THANK YOU FOR YOUR ORDER</h2>
            <p className="my-2">
              You will receive an email confirmation shortly
            </p>
            <div>
              {cart.map((item) => {
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
                <div>GRAND TOTAL</div>
                <div className="font-bold">${calculateTotalPrice() + 50}</div>
              </div>
            </div>
            <Link
              to="/"
              onClick={() => setCart([])}
              className="bg-orange-500 text-white w-full py-3 rounded hover:bg-orange-600 text-center font-bold"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
