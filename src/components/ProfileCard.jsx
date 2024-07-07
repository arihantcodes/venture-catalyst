import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const ProfileCard = ({ fullname, username, ventureName, bio, linkedinUrl, profilePictureUrl }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white text-black text-lg rounded-lg sm:flex-row sm:items-start sm:space-x-4">
            <div className="flex-shrink-0">
                {profilePictureUrl ? (
                    <Image
                        src={profilePictureUrl}
                        alt="Profile Picture"
                        width={110}
                        height={110}
                        className="rounded-full border-2"
                    />
                ) : (
                    <Image
                        src="/peter.png"
                        alt="Default Profile Picture"
                        width={110}
                        height={110}
                        className="rounded-full border-2"
                    />
                )}
            </div>
            <div className="text-center sm:text-left">
                {fullname && (
                    <h1 className="text-3xl font-bold bg-gradient-to-tr from-pink-400 to-pink-800 text-transparent bg-clip-text">
                        {fullname}
                    </h1>
                )}
                <div className='flex items-center justify-between'>
                    {username && <p className="text-md mt-2">@{username}</p>}
                    {linkedinUrl && (
                        <Link className='mr-4' target='_blank' href={linkedinUrl}>
                            <Linkedin />
                        </Link>
                    )}
                </div>
                {ventureName && (
                    <p className="text-md mt-2">Founder @{ventureName}</p>
                )}
                {bio && <p className="text-sm mt-2">Bio: {bio}</p>}
            </div>
        </div>
    );
};

export default ProfileCard;
