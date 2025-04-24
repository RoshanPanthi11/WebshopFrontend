'use client';

import { useAppContext } from '../context/AppContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useAppContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-10 text-center md:text-left">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-lg">Your cart is currently empty.</p>
          <Link href="/" className="mt-4 inline-block text-orange-500 hover:underline font-medium">
            ⬅ Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white shadow-md rounded-xl p-4 border border-gray-100"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-lg border"
                  />
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, 'decrease')}
                    className="w-8 h-8 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full text-lg font-bold transition"
                  >
                    −
                  </button>
                  <span className="min-w-[24px] text-center font-medium text-gray-700">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 'increase')}
                    className="w-8 h-8 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full text-lg font-bold transition"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <p className="text-lg font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 hover:text-red-600 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-12 bg-white border border-gray-100 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <h3 className="text-xl font-bold text-gray-800">Total:</h3>
              <span className="text-2xl font-bold text-orange-600">${total.toFixed(2)}</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <button
                onClick={clearCart}
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                🗑 Clear Cart
              </button>
              <button
                className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                💳 Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
