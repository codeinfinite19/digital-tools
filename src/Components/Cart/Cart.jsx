import React from "react";

const Cart = ({ cart, handleRemove, handleCheckout }) => {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto">

      <div className="bg-white p-6 rounded-xl border shadow-sm">

        <h2 className="text-lg font-semibold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-400">No items added</p>
        ) : (
          <>
           
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >

                  
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      className="w-10 h-10 rounded-full bg-white p-1"
                    />

                    <div>
                      <h3 className="text-sm font-medium">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                 
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-pink-500 text-sm font-medium hover:underline"
                  >
                    Remove
                  </button>

                </div>
              ))}
            </div>

            
            <div className="flex justify-between mt-6 text-sm">
              <span className="text-gray-400">Total:</span>
              <span className="font-semibold text-gray-700">
                ${total}
              </span>
            </div>

           
            <button
              onClick={handleCheckout}
              className="w-full mt-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
            >
              Proceed to Checkout
            </button>
          </>
        )}

      </div>

    </div>
  );
};

export default Cart;