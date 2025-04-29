'use client';
import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function CheckoutPage() {
  const { cart, clearCart, updateQuantity } = useAppContext();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/');
    }
  }, [cart, router]);

  const handleBuy = () => {
    alert(' Thank you for your purchase!');
    clearCart();
    router.push('/thank-you');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-12 drop-shadow-sm">
        🛍️ Checkout & Confirm Your Order
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Cart Items Section */}
        <div className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            🛒 Your Cart
          </h2>

          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm border"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-xl border"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-500">Unit Price: ${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center mt-4 sm:mt-0 gap-4">
                  <div className="flex items-center border rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => updateQuantity(item.id, 'decrease')}
                      className="bg-orange-100 hover:bg-orange-200 text-orange-600 p-2"
                      title="Decrease quantity"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="px-4 text-gray-800 font-medium bg-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 'increase')}
                      className="bg-orange-100 hover:bg-orange-200 text-orange-600 p-2"
                      title="Increase quantity"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-fit">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">💳 Payment Summary</h2>

          <div className="space-y-4 text-base text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleBuy}
            className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-md transition"
          >
             Confirm & Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
