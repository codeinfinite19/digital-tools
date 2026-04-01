import React, { useState } from "react";
import productsData from "../../data/products.json";
import ProductCard from "./ProductCard";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  
  const handleAdd = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      toast.warning("Already added!");
      return;
    }

    setCart([...cart, product]);
    toast.success("Added to cart ✅");
  };

  
  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed ❌");
  };

  
  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout done 🛒");
  };

  return (
    <div className="bg-gray-100 py-20">

     
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Premium Digital Tools
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto mb-6">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-full ${
              view === "products"
                ? "bg-purple-600 text-white"
                : "bg-white border"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full ${
              view === "cart"
                ? "bg-purple-600 text-white"
                : "bg-white border"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      
      {view === "products" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {productsData.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              handleAdd={handleAdd}
              cart={cart}  
            />
          ))}
        </div>
      ) : (
        <Cart
          cart={cart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default Products;