import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 md:mt-5 rounded-md md:rounded-full shadow-md p-4 mx-auto max-w-2xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8"/>
          <span className="font-bold text-xl">VentureCatalyst</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/about">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">About</span>
          </Link>
          
          <Link href="/customers">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Customers</span>
          </Link>
          <Link href="/pricing">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Pricing</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/get-started">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/about">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">About</span>
          </Link>
         
          <Link href="/customers">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Customers</span>
          </Link>
          <Link href="/pricing">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Pricing</span>
          </Link>
          <Link href="/get-started">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
