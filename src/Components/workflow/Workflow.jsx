import React from "react";

const Workflow = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-20 text-center text-white">
      
      <div className="max-w-3xl mx-auto px-6">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h1>

        <p className="text-sm md:text-base opacity-90 mb-6">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100">
            Explore Products
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>

        </div>

        <p className="text-xs opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

    </div>
  );
};

export default Workflow;