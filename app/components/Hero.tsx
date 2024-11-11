// components/Hero.tsx
import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div
      className="bg-gray-900 text-white py-20 w-full bg-cover bg-center"
      id="hero"
      style={{ backgroundImage: "url('/solar-panels.png')" }}
    >
      <div className="w-full px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left p-24">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to Firat Solar
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Distributing high-end solar systems for a sustainable future.
          </p>
          <Link href="#products">
            <span className="bg-yellow-500 text-gray-900 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-yellow-400 cursor-pointer">
              Learn More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
