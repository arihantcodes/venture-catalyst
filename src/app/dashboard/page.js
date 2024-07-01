import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';

export default function Profile() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col sm:flex-row">
      <Head>
        <title>Profile Page</title>
      </Head>
      <Sidebar />
      <div className="container mx-auto p-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col mr-10 mt-10 sm:mt-0 gap-4">
            {/* Profile Data */}
            <h1 className="relative text-4xl font-bold bg-gradient-to-tr from-pink-400 to-pink-800 text-transparent bg-clip-text">User Details</h1>
            <div className="bg-black flex items-center justify-evenly h-[250px]   from-blue-500 to-purple-600 p-4 rounded-lg mb-4">
              <div>
                <Image src="/squre.svg" alt="Profile Picture" width={96} height={96} className="rounded-full" />
              </div>
              <div className=''>
              <h1 className="relative text-4xl font-bold bg-gradient-to-tr from-pink-400 to-pink-800 text-transparent bg-clip-text">Username</h1>
              <p className="text-center text-xl mt-2">Venture Name</p>
              <p className="text-center text-xl mt-2">Description</p>
              </div>
            </div>
            
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
