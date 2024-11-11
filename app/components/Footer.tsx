// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Firat Solar</h3>
          <p className="text-gray-400">© 2024 Firat Solar. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="#hero">
            <span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Home</span>
          </Link>
          <Link href="#products">
            <span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Products</span>
          </Link>
          <Link href="#services">
            <span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Services</span>
          </Link>
          <Link href="#contact">
            <span className="text-gray-400 hover:text-yellow-500 cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
