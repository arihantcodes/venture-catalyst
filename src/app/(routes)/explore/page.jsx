'use client'
import React, { useEffect, useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';

const Explore = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
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

        // Fetch profiles on component mount
        fetchProfilesAndUpdateLocalStorage();

        // Set interval to periodically fetch profiles and update localStorage
        const updateInterval = setInterval(fetchProfilesAndUpdateLocalStorage, 5*60000); // Update every minute

        // Clean up interval on component unmount
        return () => clearInterval(updateInterval);
    }, []);

    return (
        <>
            <div className='text-white text-3xl text-center p-4'>Explore other People</div>
            <Sidebar />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
                {profiles.map(profile => (
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
        </>
    );
};

export default Explore;
