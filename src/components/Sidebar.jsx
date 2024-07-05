'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";

const Sidebar = () => {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {

      const response = await axios.get('/api/v1/auth/logout');
      toast.success('Logged out successfully');
      if (response.status === 200) {
        // Redirect to login page
        router.push('/');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Error logging out');
    }
  }
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
          <nav className="space-y-4">
            <Link className='flex items-center space-x-1 hover:bg-gray-700 p-1 rounded-md cursor-pointer' href="/roadmap" passHref>

              <Image
                src='/rmicon.png'
                width={24}
                height={24}
              />

              <span className=" text-xl items-center  hover:bg-gray-700  rounded-md cursor-pointer">Roadmap</span>
            </Link>
            {/* <Link href="/module" passHref>
              <span className="flex text-xl items-center space-x-2 hover:bg-gray-700 p-2 rounded-md cursor-pointer">Module</span>
            </Link> */}
            <Link className='flex items-center space-x-1 hover:bg-gray-700 p-2 rounded-md cursor-pointer' href="/explore" passHref>
              <Image
                width={24}
                height={24}
                src='/pficon.png'
              />
              <span className="flex text-xl items-center  hover:bg-gray-700  rounded-md cursor-pointer">Explore</span>
            </Link>
            <Link className='flex items-center space-x-1 hover:bg-gray-700 p-2 rounded-md cursor-pointer' href="/share" passHref>
              <Image
                width={20}
                height={20}
                src='/shareicon.png'
              />
              <span className="flex text-xl items-center  hover:bg-gray-700 rounded-md cursor-pointer">Share</span>
            </Link>
            <Button
              variant={'outline'}
              onClick={handleLogout}
              className='block md:hidden bg-red-500 hover:bg-red-700 rounded-lg text-white ' >
              Logout
            </Button>
          </nav>
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="flex flex-col items-center ml-8 md:block">
            {/* Add your sidebar links and other content here */}



          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex flex-col right-0 p-4">
          <button
            onClick={handleLogout}
            className=' hidden md:block  bg-red-600 text-lg p-2 m-3 text-white rounded-lg'>
            Logout
          </button>
          <span className="text-center text-sm">© 2024 VCatalyst</span>
          <span className="text-center text-sm">V 0.0.2</span>
        </div>
      </div>
      <Toaster />
    </div>

  );
}



export default Sidebar;