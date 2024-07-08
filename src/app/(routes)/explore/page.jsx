'use client'
import React, { useEffect, useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';

const Explore = () => {
    const [allProfiles, setAllProfiles] = useState([]);
    const [searchedProfile, setSearchedProfile] = useState(null);
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllProfiles = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('/api/v1/explore');
            setAllProfiles(response.data);
        } catch (error) {
            console.error('Error fetching all profiles:', error);
            setError("Failed to load profiles. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const fetchUser = async () => {
        if (!username) return;
        try {
            setIsLoading(true);
            const response = await axios.get(`/api/v1/search?username=${username}`);
            setSearchedProfile(response.data);
            setError("");
        } catch (err) {
            setSearchedProfile(null);
            setError(err.response?.data?.message || "No profile found");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllProfiles();
    }, []);

    const filteredProfiles = allProfiles.filter(profile => 
        profile.username !== searchedProfile?.username
    );

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchUser();
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar />
            <div className="flex flex-col items-center w-full px-4 md:px-8">
                <h1 className="text-white text-3xl text-center p-4">Explore other People</h1>

                <div className="mb-4 w-full md:w-3/4 flex">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="rounded-l-lg w-full p-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                        placeholder="Explore other entrepreneurs"
                    />
                    <button
                        onClick={fetchUser}
                        className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    >
                        Search
                    </button>
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                {isLoading && <p>Loading profiles...</p>}

                {searchedProfile && (
                    <div className="w-full mb-8">
                        <h2 className="text-white text-2xl mb-4">Search Result</h2>
                        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
                            <ProfileCard
                                fullname={searchedProfile.fullname}
                                username={searchedProfile.username}
                                ventureName={searchedProfile.profile.ventureName}
                                linkedinUrl={searchedProfile.profile.linkedinUrl}
                                bio={searchedProfile.profile.bio}
                                profilePictureUrl={searchedProfile.profile.profilePictureUrl}
                            />
                        </div>
                    </div>
                )}

                <div className="w-full">
                    <h2 className="text-white text-2xl mb-4">Similar Profiles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProfiles.map(profile => (
                            <ProfileCard
                                key={profile._id}
                                fullname={profile.fullname}
                                username={profile.username}
                                ventureName={profile.profile.ventureName}
                                linkedinUrl={profile.profile.linkedinUrl}
                                bio={profile.profile.bio}
                                profilePictureUrl={profile.profile.profilePictureUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;