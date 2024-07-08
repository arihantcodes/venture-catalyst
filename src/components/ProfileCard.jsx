import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const ProfileCard = ({ fullname, username, ventureName, bio, linkedinUrl, profilePictureUrl }) => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0">
                        <Image
                            src={profilePictureUrl || "/peter.png"}
                            alt={`${fullname || 'User'}'s Profile Picture`}
                            width={120}
                            height={120}
                            className="rounded-full border-2 border-gray-500 shadow-lg"
                        />
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                        {fullname && (
                            <h1 className="text-3xl font-bold text-white bg-clip-text mb-2">
                                {fullname}
                            </h1>
                        )}
                        <div className='flex items-center justify-center sm:justify-start space-x-2 mb-2'>
                            {username && <p className="text-gray-300">@{username}</p>}
                            {linkedinUrl && (
                                <Link target='_blank' href={linkedinUrl} className="text-blue-400 hover:text-blue-300 transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                            )}
                        </div>
                        {ventureName && (
                            <p className="text-lg text-gray-300 mb-2">Founder <span className="text--400">@{ventureName}</span></p>
                        )}
                    </div>
                </div>
                {bio && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400">{bio}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;