'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../app/context/AppContext'; // use relative path
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import PDFViewer only on client
const PDFViewer = dynamic(() => import('../../../components/Pdfreader'), { ssr: false });

export default function ProductDetail() {
  const { addToCart } = useAppContext();
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    if (!id) return;

    const parsedId = typeof id === 'string' ? parseInt(id) : null;

    if (parsedId) {
      fetch('/Product.json')
        .then(res => res.json())
        .then(data => {
          const found = data.find(item => item.id === parsedId);
          setProduct(found);
        })
        .catch(err => console.error('Error fetching product:', err));

      // Sample reviews (static)
      setReviews([
        { rating: 5, comment: 'Excellent product!' },
        { rating: 4, comment: 'Very good and helpful.' },
        { rating: 3, comment: 'Satisfactory.' }
      ]);
    }
  }, [id]);

  if (!id) return <div className="text-center mt-20">Invalid Product ID</div>;
  if (!product) return <div className="text-center mt-20">Loading product...</div>;

  const handleBuyNow = () => {
    addToCart(product);
    router.push('/buy');
  };

  return (
    <div className="bg-gray-50 pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <div className="relative w-full h-[400px] bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <div className="flex items-center gap-3 text-lg">
            <span className="text-yellow-500">{'⭐'.repeat(Math.round(product.rating?.rate || 0))}</span>
            <span className="text-gray-500 text-sm">({product.rating?.count} reviews)</span>
          </div>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          {/* Certifications */}
          {product.certifications && (
            <div>
              <h3 className="font-semibold text-gray-700">Certifications</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Size Options */}
          {product.sizeOptions && (
            <div>
              <h3 className="font-semibold text-gray-700">Available Sizes</h3>
              <div className="flex gap-3 mt-2">
                {product.sizeOptions.map((size, i) => (
                  <button
                    key={i}
                    className="px-3 py-2 border border-gray-300 rounded-md hover:bg-green-500 hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-md"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Medicine Information (PDF)</h2>
        <div className="h-[600px] w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <PDFViewer fileUrl="/pdf/dummy.pdf" />
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-5xl mx-auto mt-12 px-4 pb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Reviews</h2>
        {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review, i) => (
          <div key={i} className="border-b py-4">
            <div className="text-yellow-500">{'⭐'.repeat(review.rating)}</div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
        {reviews.length > 3 && (
          <button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="mt-4 text-green-600 hover:underline"
          >
            {showAllReviews ? 'Show Less' : 'Show All Reviews'}
          </button>
        )}
      </div>
    </div>
  );
}
