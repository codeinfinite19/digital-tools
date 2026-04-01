import React from "react";

const Cart = ({ cart, handleRemove, handleCheckout }) => {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-6">

      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

      <div className="bg-white p-6 rounded-xl shadow">

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 p-3 bg-gray-100 rounded"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-6 font-semibold">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-4 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500"
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