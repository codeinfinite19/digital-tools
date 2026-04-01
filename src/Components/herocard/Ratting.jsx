import React from "react";

const Ratting = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-10">
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white">
        
        <div>
          <h1 className="text-3xl font-bold">50K+</h1>
          <p className="text-sm mt-1 opacity-80">Active Users</p>
        </div>

        <div className="border-y md:border-y-0 md:border-x border-white/30 py-6 md:py-0">
          <h1 className="text-3xl font-bold">200+</h1>
          <p className="text-sm mt-1 opacity-80">Premium Tools</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold">4.9</h1>
          <p className="text-sm mt-1 opacity-80">Rating</p>
        </div>

      </div>

    </div>
  );
};

export default Ratting;