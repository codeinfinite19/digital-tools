import React from "react";

const ProductCard = ({ product, handleAdd }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm relative hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

     
      <span
        className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full
        ${
          product.tag === "best"
            ? "bg-yellow-100 text-yellow-600"
            : product.tag === "popular"
            ? "bg-purple-100 text-purple-600"
            : "bg-green-100 text-green-600"
        }`}
      >
        {product.tagType}
      </span>

     
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
        <img src={product.icon} className="w-6" />
      </div>

      
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>

      <p className="font-bold mt-2">
        ${product.price}
        <span className="text-sm text-gray-400">/{product.period}</span>
      </p>

     
      <ul className="text-sm mt-2 space-y-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-green-500">✔</span>
            {f}
          </li>
        ))}
      </ul>

      
      <button
        onClick={() => handleAdd(product)}
        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-full
        hover:opacity-90 transition-opacity duration-300"
      >
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;