import React from "react";
import { User, Box, Rocket } from "lucide-react";

const Steps = () => {
  return (
    <div className="bg-gray-100 py-20">
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Get Started In 3 Steps
        </h1>

        <p className="text-gray-500 mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          
          <div className="bg-white p-8 rounded-xl shadow-sm relative">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              01
            </span>

            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <User className="text-purple-600 w-6 h-6" />
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">Create Account</h3>
            <p className="text-sm text-gray-500">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          
          <div className="bg-white p-8 rounded-xl shadow-sm relative">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              02
            </span>

            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <Box className="text-purple-600 w-6 h-6" />
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">Choose Products</h3>
            <p className="text-sm text-gray-500">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          
          <div className="bg-white p-8 rounded-xl shadow-sm relative">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              03
            </span>

            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <Rocket className="text-purple-600 w-6 h-6" />
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">Start Creating</h3>
            <p className="text-sm text-gray-500">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Steps;