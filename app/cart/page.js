'use client';

import { useAppContext } from '../context/AppContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useAppContext();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10">
          🛒 Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-lg mb-4">Your cart is currently empty.</p>
            <Link href="/" className="text-orange-500 hover:underline font-medium">
              ⬅ Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
                >
                  {/* Image + Info */}
                  <div className="flex items-center gap-4 w-full sm:w-2/3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain bg-gray-100 p-2 rounded-lg border"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Price: <span className="font-medium">${item.price.toFixed(2)}</span>
                      </p>
                    </div>
                  </div>

                  {/* Quantity + Subtotal */}
                  <div className="flex flex-col items-center sm:items-end gap-3 mt-4 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, 'decrease')}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full text-orange-600 font-bold transition"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 'increase')}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full text-orange-600 font-bold transition"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-md font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Summary */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-6">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800 mb-6 border-t pt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={clearCart}
                className="w-full bg-red-100 hover:bg-red-200 text-red-600 py-2 rounded-md font-medium transition mb-4"
              >
                🗑 Clear Cart
              </button>

              <Link
                href="/buy"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold text-lg transition"
              >
                🛍 Proceed to Buy
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
