import React from "react";

const ProductCard = ({ product, handleAdd, cart }) => {

  const isAdded = cart.find(item => item.id === product.id);

  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 relative">

     <span
  className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
  ${
    product.tagType === "Popular"
      ? "bg-purple-100 text-purple-600"
      : product.tagType === "New"
      ? "bg-green-100 text-green-600"
      : product.tagType === "Best Seller"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-gray-100 text-gray-500"
  }`}
>
  {product.tagType}
</span>

      
      <div className="w-12 h-12 mb-4">
        <img src={product.icon} alt="" className="w-full h-full object-contain" />
      </div>

     
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>

      
      <p className="text-sm text-gray-500 mb-3">
        {product.description}
      </p>

     
      <h3 className="font-bold text-xl mb-4">
        ${product.price}
        <span className="text-sm text-gray-400">/{product.period}</span>
      </h3>

      
      <ul className="text-sm text-gray-500 space-y-1 mb-5">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            ✔ {f}
          </li>
        ))}
      </ul>

     
      <button
        onClick={() => handleAdd(product)}
        disabled={isAdded}
        className={`w-full py-2 rounded-full text-white transition-all duration-300
        ${isAdded 
          ? "bg-green-600 scale-105" 
          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105"}`}
      >
        {isAdded ? "✔ Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductCard;