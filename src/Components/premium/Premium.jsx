import React, { useState } from "react";

const Premium = () => {
  const [active, setActive] = useState("pro");

  const Card = ({ id, title, price, features, highlight }) => {
    const isActive = active === id;

    return (
      <div
        onClick={() => setActive(id)}
        className={`p-8 rounded-xl shadow-sm cursor-pointer transition 
        ${isActive
          ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg"
          : "bg-white text-gray-700"
        }`}
      >
        {highlight && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}

        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm opacity-70 mb-4">Best for professionals</p>

        <h1 className="text-3xl font-bold mb-4">
          {price}
          <span className="text-sm">/Month</span>
        </h1>

       
        <ul className="space-y-3 mb-6">
          {features.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <span className="text-green-500">✔</span>
              {item}
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-2 rounded-full font-medium
          ${
            isActive
              ? "bg-white text-purple-600"
              : "bg-purple-600 text-white"
          }`}
        >
          {id === "starter"
            ? "Get Started Free"
            : id === "pro"
            ? "Start Pro Trial"
            : "Contact Sales"}
        </button>
      </div>
    );
  };

  return (
    <div className="bg-gray-10 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h1 className="text-3xl font-bold mb-3">
          Simple, Transparent Pricing
        </h1>

        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          <Card
            id="starter"
            title="Starter"
            price="$0"
            features={[
              "Access to 10 free tools",
              "Basic templates",
              "Community support",
              "1 project per month",
            ]}
          />

          <div className="relative">
            <Card
              id="pro"
              title="Pro"
              price="$29"
              highlight
              features={[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ]}
            />
          </div>

          <Card
            id="enterprise"
            title="Enterprise"
            price="$99"
            features={[
              "Everything in Pro",
              "Team collaboration",
              "Custom integrations",
              "Dedicated support",
              "SLA guarantee",
              "Custom branding",
            ]}
          />

        </div>
      </div>
    </div>
  );
};

export default Premium;