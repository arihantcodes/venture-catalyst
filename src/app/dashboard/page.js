"use client"
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';



export default function Dashboard() {

  const [userData, setUserData] = useState({
    fullname: '',
    bio: '',
    ventureName: '',
    linkedinUrl: '',
    username: ''
  });


  // show user data on dashboard page fetch from api profile data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/v1/dashboard');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const { fullname, bio, ventureName, linkedinUrl, username } = userData;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col sm:flex-row">

      <Sidebar />
      <div className="container mx-auto p-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col mr-10 mt-10 sm:mt-0 gap-4">
            {/* Profile Data */}
            <h1 className="relative text-xl font-bold bg-gradient-to-tr from-yellow-400 to-pink-800 text-transparent bg-clip-text">User Details</h1>

            <div className="flex flex-col items-center p-4 md:flex-row md:items-start md:space-x-4">
              <div className="flex-shrink-0">
                <Image src="/peter.png" alt="Profile Picture" width={106} height={106} className="rounded-full" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold bg-gradient-to-tr from-pink-400 to-pink-800 text-transparent bg-clip-text">{fullname}</h1>
                <p className="text-md mt-2">@{username}</p>
                <p className="text-md mt-2">Venture Name : {ventureName}</p>
                <p className="text-md mt-2">{linkedinUrl}</p>
                <p className="text-sm mt-2">Bio: {bio}</p>
              </div>
            </div>


            {/* <div className="bg-black flex items-center justify-evenly h-[250px]   from-blue-500 to-purple-600 p-4 rounded-lg mb-4">
              <div>
                <Image src="/squre.svg" alt="Profile Picture" width={96} height={96} className="rounded-full" />
              </div>

              <div className=''>
              <h1 className="relative text-2xl font-bold bg-gradient-to-tr from-pink-400 to-pink-800 text-transparent bg-clip-text">{fullname}</h1>
              <p className="text-center text-md mt-2">{username}</p>
              <p className="text-center text-md mt-2">{ventureName}</p>
              <p className="text-center text-md mt-2">{linkedinUrl}</p>
              <p className="text-center text-sm mt-2">{bio} </p>
              </div>
            </div> */}

            {/* Achievements */}

            <h1 className="relative text-4xl font-bold bg-gradient-to-tr from-yellow-400 to-pink-500 text-transparent bg-clip-text">Achievements</h1>

            <div className="bg-gradient-to-tr h-[250px] from-yellow-400 to-pink-500 p-4 rounded-lg mb-4">


            </div>
          </div>

          {/* Level Section */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-8 text-center font-bold text-[#B32AC2]">Level</h1>
            <Image src='/level.svg' width={400} height={400} className='' />
          </div>
        </div>
      </div>
    </div>
  );
}
