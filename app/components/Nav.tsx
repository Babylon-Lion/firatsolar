// components/NavBar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 w-full h-[70px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logoW.svg" alt="Firat Solar Logo" width={150} height={60} />
          
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#hero">
              <span className="text-white hover:text-yellow-500 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="#products">
              <span className="text-white hover:text-yellow-500 cursor-pointer">Products</span>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <span className="text-white hover:text-yellow-500 cursor-pointer">Services</span>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <span className="text-white hover:text-yellow-500 cursor-pointer">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
