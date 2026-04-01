import React from "react";
import banner from "../../assets/banner.png";

const HeroCard = () => {
  return (
    <div className="bg-gray-10 py-16">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
       
        <div>
          
          <div className="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4">
          New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 mb-6 max-w-md">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
              Explore Products
            </button>

            <button className="border border-purple-500 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50">
              Watch Demo
            </button>
          </div>

        </div>

       
        <div className="flex justify-center">
          <img
            src={banner}
            alt="banner"
            className="w-[400px] md:w-[450px] rounded-xl"
          />
        </div>

      </div>

    </div>
  );
};

export default HeroCard;