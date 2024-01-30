import React from "react";
import deskLogo from "../assets/basics/logo_2x.png";
import cart from "../assets/basics/cart.svg";

const Header = () => {
  return (
    <header className="flex justify-around h-12 item-center mt-2">
      <img className="" src={deskLogo} alt="company-logo"></img>
      <nav className="flex justify-evenly gap-4 items-center">
        <a>Home</a>
        <a>Products</a>
      </nav>
      <div className="flex gap-4 items-center">
        <nav>
          <a className="ml-4">Sign In</a>
          <a className="ml-4">Register</a>
        </nav>
        <button className="relative flex items-center">
          <img className="h-8 w-8" src={cart} alt="cart-logo" />
          <span className="absolute h-5 w-3 top-0 right-0 bg-red-500 text-white rounded-md">
            0
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
