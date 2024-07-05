"use client";
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Linkedin } from 'lucide-react';

export default function Dashboard() {
  const [userData, setUserData] = useState({
    fullname: '',
    bio: '',
    ventureName: '',
    linkedinUrl: '',
    username: '',
    profilePictureUrl: '',
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      parsedData.fullname = parsedData.fullname.toUpperCase(); // Convert fullname to uppercase
      setUserData(parsedData);
    } else {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('/api/v1/dashboard');
          const fetchedData = response.data;
          fetchedData.fullname = fetchedData.fullname.toUpperCase(); // Convert fullname to uppercase
          setUserData(fetchedData);
          localStorage.setItem('userData', JSON.stringify(fetchedData));
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, []);

  const { fullname, bio, ventureName, linkedinUrl, username, profilePictureUrl } = userData;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col sm:flex-row">
      <Sidebar />
      <div className="container mx-auto p-4 flex-grow">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold bg-gradient-to-tr from-yellow-400 to-pink-800 text-transparent bg-clip-text">User Details</h1>
            <div className="flex flex-col items-center p-4 bg-white text-black text-lg rounded-lg sm:flex-row sm:items-start sm:space-x-4">
              <div className="flex-shrink-0">
                {profilePictureUrl ? (
                  <Image src={profilePictureUrl} alt="Profile Picture" width={106} height={106} className="rounded-full border-2" />
                ) : (
                  <Image src='/peter.png' className="rounded-full border-2 p-4 text-center" width={106} height={106} />
                )}
              </div>
              <div className="text-center sm:text-left">
                {fullname && <h1 className="text-3xl font-bold bg-gradient-to-tr from-pink-400 to-pink-800 text-transparent bg-clip-text">{fullname}</h1>}
                {username && <p className="text-md mt-2">@{username}</p>}
                {ventureName && <p className="text-md mt-2">Venture Name: {ventureName}</p>}
                {linkedinUrl && (
                  <p className="text-md mt-2 flex items-center space-x-2">
                    <Linkedin /> 
                    <span>{linkedinUrl}</span>
                  </p>
                )}

                {bio && <p className="text-sm mt-2">Bio: {bio}</p>}
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-tr from-yellow-400 to-pink-500 text-transparent bg-clip-text">Achievements</h1>
            <div className="bg-gradient-to-tr from-yellow-400 to-pink-500 h-[250px] text-center p-4 rounded-lg mb-4">
              {/* Achievements content here */}
              <h1 className='text-xl font-bold'>Coming Soon !!</h1>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-10 sm:mt-0">
            <h1 className="text-4xl mb-8 text-center font-bold text-[#B32AC2]">Level</h1>
            <Image src='/level.svg' width={400} height={400} className='' alt="Level" />
          </div>
        </div>
      </div>
    </div>
  );
}
