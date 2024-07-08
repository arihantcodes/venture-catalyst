'use client'
import React, { useEffect, useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';

const Explore = () => {
    const [profiles, setProfiles] = useState([]);
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    // Debounce function
    const debounce = (func, delay) => {
        let debounceTimer;
        return function (...args) {
            const context = this;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const fetchUser = async (username) => {
        try {
            const response = await axios.get(`/api/v1/search?username=${username}`);
            setProfiles([response.data]);
            setError("");
        } catch (err) {
            setProfiles([]);
            setError(err.response?.data?.message || "Error fetching user");
        }
    };

    const debouncedFetchUser = debounce(fetchUser, 700);

    useEffect(() => {
        if (username) {
            debouncedFetchUser(username);
        } else {
            // Fetch all profiles if no username is searched
            fetchProfilesAndUpdateLocalStorage();
        }
    }, [username]);

    // Function to fetch profiles from API and update localStorage
    const fetchProfilesAndUpdateLocalStorage = async () => {
        try {
            const response = await axios.get('/api/v1/explore');
            const fetchedProfiles = response.data;
            setProfiles(fetchedProfiles);

            // Update localStorage with new profiles
            updateLocalStorageProfiles(fetchedProfiles);
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    };

    // Function to update localStorage with new profiles
    const updateLocalStorageProfiles = (newProfiles) => {
        const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
        const updatedProfiles = [...storedProfiles];

        // Add new profiles that are not already in localStorage
        newProfiles.forEach(profile => {
            if (!storedProfiles.some(p => p._id === profile._id)) {
                updatedProfiles.push(profile);
            }
        });

        // Store updated profiles in localStorage
        localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    };

    useEffect(() => {
        // Fetch profiles on component mount
        fetchProfilesAndUpdateLocalStorage();

        // Set interval to periodically fetch profiles and update localStorage
        const updateInterval = setInterval(fetchProfilesAndUpdateLocalStorage, 5 * 60000); // Update every 5 minutes

        // Clean up interval on component unmount
        return () => clearInterval(updateInterval);
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col items-center">
                <div className="text-white text-3xl text-center p-4">Explore other People</div>

                {/* Search bar */}
                <div className="mb-4 w-3/4 md:w-1/2">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="rounded-lg w-full p-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                        placeholder="Explore other entrepreneurs"
                    />
                </div>

                {/* Error message */}
                {/* Don't show error when there is no username */}
                {username && error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Profile cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 w-full">
                    {profiles.map(profile => {
                        // Filter profiles based on the search input
                        if (!username || profile.username.includes(username)) {
                            return (
                                <ProfileCard
                                    key={profile._id}
                                    fullname={profile.fullname}
                                    username={profile.username}
                                    ventureName={profile.profile.ventureName}
                                    linkedinUrl={profile.profile.linkedinUrl}
                                    bio={profile.profile.bio}
                                    profilePictureUrl={profile.profile.profilePictureUrl}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>

    );
};

export default Explore;
