import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const items = useSelector(state => state.cart)

  return (
    <div className="mt-2 px-10 py-4 flex justify-between z-50 sticky top-0 bg-white shadow-sm">
      <Link to={"/"}>
        <h1 className="text-3xl font-semibold hover:underline">Redux Shopping</h1>
      </Link>
      <Link to={"/cart"}>
        <button className="relative">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
            </svg>
        <p className="absolute z-10 top-[-10px] right-[-5px] bg-black rounded-full px-2 py-1 text-sm text-white">
          {items.length}
        </p>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
