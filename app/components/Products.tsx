// components/ProductsSection.tsx
import React from 'react';

const Products: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20 w-full" id="products">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold leading-tight mb-8 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Systems</h3>
            <p className="leading-normal text-lg">
              High-performance solar systems for residential and commercial use.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Modules</h3>
            <p className="leading-normal text-lg">
              Efficient and durable solar modules for various applications.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Storage</h3>
            <p className="leading-normal text-lg">
              Reliable energy storage solutions for uninterrupted power supply.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Trackers</h3>
            <p className="leading-normal text-lg">
              Advanced solar trackers to maximize energy capture.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Inverters</h3>
            <p className="leading-normal text-lg">
              High-efficiency inverters for optimal energy conversion.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Accessories</h3>
            <p className="leading-normal text-lg">
              Essential accessories for a complete solar power system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
