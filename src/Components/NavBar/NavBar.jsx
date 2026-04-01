import React from "react";
import { ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
   <div className="navbar bg-base-100 shadow-md px-6">
  
  <div className="flex-1">
    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      DigiTools
    </h1>
  </div>

  <div className="flex-1 hidden lg:flex justify-center">
    <ul className="menu menu-horizontal px-1 gap-4 font-medium">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>

  <div className="flex-1 flex justify-end items-center gap-4">
    <div className="flex items-center gap-2 cursor-pointer">
      <ShoppingCart className="w-5 h-5" />
      <span className="font-medium">Login</span>
    </div>

    <button className="btn bg-purple-600 text-white rounded-full px-6 hover:bg-purple-700">
      Get Started
    </button>
  </div>

</div>
  );
};

export default NavBar;