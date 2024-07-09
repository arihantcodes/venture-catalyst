'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isLinkActive = (href: string) => pathname === href;

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/v1/auth/logout');
      if (response.status === 200) {
        localStorage.removeItem('token');
        router.push('/login');
        toast.success('Logged out successfully');
      }
    } catch (error: any) {
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
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
    } else {
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handleScroll);
    }

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
      <div className={`min-h-screen w-[15rem] border-r border-gray-700 bg-black text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-10 overflow-y-auto`}>
        <div className="flex flex-col items-center ml-8 md:block">
          <Image
            src="/Vector.svg"
            alt="Profile Picture"
            width={96}
            height={96}
            className="rounded-full mb-10" />
          <nav className="space-y-4">
            <Link 
              className={`flex items-center space-x-1 p-1 rounded-md cursor-pointer ${
                isLinkActive('/dashboard') ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`} 
              href="/dashboard"
            >
              <Image alt='roadmap' src='/rmicon.png' width={24} height={24} />
              <span className="text-xl items-center">Dashboard</span>
            </Link>
            <Link 
              className={`flex items-center space-x-1 p-1 rounded-md cursor-pointer ${
                isLinkActive('/roadmap') ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`} 
              href="/roadmap"
            >
              <Image alt='icon' src='/rmicon.png' width={24} height={24} />
              <span className="text-xl items-center">Roadmap</span>
            </Link>
            <Link 
              className={`flex items-center space-x-1 p-2 rounded-md cursor-pointer ${
                isLinkActive('/explore') ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`} 
              href="/explore"
            >
              <Image alt='icon' width={24} height={24} src='/pficon.png' />
              <span className="flex text-xl items-center">Explore</span>
            </Link>
            <Link 
              className={`flex items-center space-x-1 p-2 rounded-md cursor-pointer ${
                isLinkActive('/share') ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`} 
              href="/share"
            >
              <Image alt='icon' width={20} height={20} src='/shareicon.png' />
              <span className="flex text-xl items-center">Share</span>
            </Link>
            <Button
              variant={'outline'}
              onClick={handleLogout}
              className='block md:hidden bg-red-500 hover:bg-red-700 rounded-lg text-white'>
              Logout
            </Button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 flex flex-col right-0 p-4">
          <button
            onClick={handleLogout}
            className='hidden md:block bg-red-600 text-lg p-2 m-3 text-white rounded-lg'>
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