import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrement, increment, remove } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (itemId) => {
    dispatch(remove(itemId));
  };

  const incrementQuantity = (itemId) => {
    dispatch(increment({ id: itemId }));
  };

  const decrementQuantity = (itemId) => {
    dispatch(decrement({ id: itemId }));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div>
        <div className="mt-3 text-xl w-fit mx-auto ">
          {items.length > 0 ? (
            <div className="flex gap-9 justify-between items-center">
              <h1 className="">Total Items : {totalQuantity}</h1>
              <h1 className="">Total Cost : $ {totalPrice}</h1>
              <button
                className="px-4 py-1 border border-red-500 text-red-500 rounded-md"
                onClick={clear}
              >
                Clear Cart
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center w-fit">
              <p>Cart is empty</p>
              <img className="w-[450px]" src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/media/99db7af8c3d839dd65017f76ae434785.gif" alt="" />
              <Link to={'/'}>
                <button className="px-3 py-1 bg-gray-500 rounded-md text-white">Return to Homepage</button>
              </Link>
            </div>
          )}
        </div>
        <div className="grid grid-cols-5 p-6">
          {items.map((item) => (
            <div className="rounded-md w-[250px] border mt-2" key={item.id}>
              <div className="flex justify-end">
                <button
                  className="rounded-md px-2 py-1 m-2 text-red-600 font-bold"
                  onClick={() => removeItem(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-[150px] h-[150px] p-4 m-auto">
                <img
                  className="w-full h-full object-fill"
                  src={item.images[0]}
                  alt=""
                />
              </div>
              <div className="mx-2">
                <h4 className="truncate font-medium text-xl">{item.title}</h4>
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">$ {item.price}</h5>
                  <div className="flex items-center">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-md mr-2"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-md ml-2"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
