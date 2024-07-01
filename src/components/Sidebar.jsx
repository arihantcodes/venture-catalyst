'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        // Close the menu if it is open
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Prevent scrolling on the body when menu is open
      document.body.style.overflow = 'hidden';
      // Add event listener to handle scroll
      window.addEventListener('scroll', handleScroll);
    } else {
      // Re-enable scrolling on the body when menu is closed
      document.body.style.overflow = 'unset';
      // Remove event listener if menu is closed
      window.removeEventListener('scroll', handleScroll);
    }

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <div className="md:hidden flex justify-end p-4 bg-black">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Sidebar Content */}
      <div className={`min-h-screen w-[15rem] border-r border-gray-700 mr-10 bg-black text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-10`}>
        <div className="flex flex-col items-center ml-8 md:block">
          <Image src="/Vector.svg" alt="Profile Picture" width={96} height={96} className="rounded-full mb-10" />
          <Link href="/" passHref>
            <span className="text-xl font-bold mb-4 cursor-pointer">VCatalyst</span>
          </Link>
          <nav className="space-y-4">
            <Link href="/roadmap" passHref>
              <span className="flex text-xl items-center space-x-2 hover:bg-gray-700 p-2 rounded-md cursor-pointer">Road-Map</span>
            </Link>
            <Link href="/profile" passHref>
              <span className="flex text-xl items-center space-x-2 hover:bg-gray-700 p-2 rounded-md cursor-pointer">Profile</span>
            </Link>
            <Link href="/share" passHref>
              <span className="flex text-xl items-center space-x-2 hover:bg-gray-700 p-2 rounded-md cursor-pointer">Share</span>
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col right-0 p-4">
            <span className="text-center text-sm">© 2024 VCatalyst</span>
            <span className="text-center text-sm">V 0.0.2</span>
        </div>
      </div>
    </div>
  );
}
