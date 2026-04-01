import React from 'react';
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    
    <>

  <div>
 <footer className="bg-[#101727] text-gray-300 px-10 py-14">

  
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

    
    <div className="md:col-span-2">
      <h1 className="text-2xl font-bold text-white mb-4">DigiTools</h1>
      <p className="text-sm max-w-sm leading-6">
        Premium digital tools for creators, professionals, and businesses. 
        Work smarter with our suite of powerful tools.
      </p>
    </div>

    
    <nav>
      <h6 className="text-white font-semibold mb-3">Services</h6>
      <a className="block text-sm hover:text-white">Branding</a>
      <a className="block text-sm hover:text-white">Design</a>
      <a className="block text-sm hover:text-white">Marketing</a>
      <a className="block text-sm hover:text-white">Advertisement</a>
    </nav>

    
    <nav>
      <h6 className="text-white font-semibold mb-3">Company</h6>
      <a className="block text-sm hover:text-white">About us</a>
      <a className="block text-sm hover:text-white">Contact</a>
      <a className="block text-sm hover:text-white">Jobs</a>
      <a className="block text-sm hover:text-white">Press kit</a>
    </nav>

    
    <nav>
      <h6 className="text-white font-semibold mb-3">Social</h6>

      <div className="flex gap-3">

  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
    <FaYoutube className="text-black text-sm" />
  </div>

  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
    <FaFacebookF className="text-black text-sm" />
  </div>

  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
    <FaXTwitter className="text-black text-sm" />
  </div>

</div>


    </nav>

  </div>

  
  <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

    <p className="text-sm text-gray-400">
      Copyright © 2024 - All right reserved by DigiTools Ltd
    </p>

    <div className="flex gap-6 text-sm mt-4 md:mt-0">
      <li className="list-none hover:text-white cursor-pointer">Privacy Policy</li>
      <li className="list-none hover:text-white cursor-pointer">Terms of Use</li>
      <li className="list-none hover:text-white cursor-pointer">Cookie Policy</li>
    </div>

  </div>

</footer>
  </div>
    
    
    </>
  );
};

export default Footer;