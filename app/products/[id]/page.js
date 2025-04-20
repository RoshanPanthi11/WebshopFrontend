'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/context/AppContext';
import Image from 'next/image'; 

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const { addToCart } = useAppContext();

  const params = useParams(); 
  const { id } = params; 

  useEffect(() => {
    if (!id) return; 
    
    const parsedId = typeof id === 'string' ? parseInt(id) : null;

    if (parsedId) {
      fetch('/Product.json')
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((item) => item.id === parsedId);
          setProduct(found);
        })
        .catch((err) => console.error('Fetch error:', err));

      const fakeReviews = [
        { rating: 5, comment: 'Excellent product!' },
        { rating: 4, comment: 'Pretty good overall.' },
        { rating: 3, comment: 'It was okay.' },
      ];
      setReviews(fakeReviews);
    }
  }, [id]); 

  if (!id) return <div className="text-center mt-20">Invalid Product ID</div>;
  if (!product) return <div className="text-center mt-20">Loading product...</div>;

  return (
    <div className="bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto p-8 flex gap-12 items-center">
        <div className="flex-1">
          <div className="relative w-full h-[450px] bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill" 
              objectFit="contain" 
              priority 
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <div className="flex items-center gap-3 text-xl">
            <span className="text-yellow-500">
              {'⭐'.repeat(Math.round(product.rating?.rate || 0))}
            </span>
            <span className="text-gray-600 text-sm">({product.rating?.count || 0} reviews)</span>
          </div>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>

          <div className="mt-6">
            <h3 className="text-xl text-gray-800">Health Information</h3>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            {product.certifications && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">Certifications</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {product.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {product.sizeOptions && (
            <div className="mt-6">
              <h3 className="text-xl text-gray-800">Select Variant</h3>
              <div className="flex gap-4 mt-3">
                {product.sizeOptions.map((size) => (
                  <button
                    key={size}
                    className="bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white transition duration-300 transform hover:scale-105"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-green-500 to-teal-400 text-white py-3 rounded-lg mt-8 hover:bg-teal-500 transition duration-300 text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>

          <div className="max-h-96 overflow-y-auto mb-4">
            {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review, index) => (
              <div
                key={index}
                className="border-b-2 border-gray-200 pb-6 mb-6 hover:bg-gray-50 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Reviewer"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
                    <p className="text-sm text-gray-500">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-500 text-lg">
                    {'⭐'.repeat(review.rating)}
                  </span>
                  <span className="text-gray-500 text-sm">({review.rating} stars)</span>
                </div>

                <p className="text-gray-700 text-base">{review.comment}</p>
              </div>
            ))}
          </div>

          {reviews.length > 3 && (
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="text-green-600 font-semibold mt-4 hover:text-green-800 transition duration-300"
            >
              {showAllReviews ? 'Show Less Reviews' : 'Show More Reviews'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
