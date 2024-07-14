'use client'
import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from 'react';
import ProfileCard from '@/components/ProfileCard';
import axios from 'axios';

import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Map,
    Users2,
    Share2,
    Loader,
  } from "lucide-react";
  import { ModeToggle } from "@/components/ui/moon";
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';
import Image from 'next/image';
  
interface Profile {
    _id: string;
    fullname: string;
    username: string;
    profile: {
        ventureName: string;
        linkedinUrl: string;
        bio: string;
        profilePictureUrl: string;
    };
}

interface SearchedProfile {
    fullname: string;
    username: string;
    profile: {
        ventureName: string;
        linkedinUrl: string;
        bio: string;
        profilePictureUrl: string;
    };
}

const Explore: React.FC = () => {
    const [allProfiles, setAllProfiles] = useState<Profile[]>([]);
    const [searchedProfile, setSearchedProfile] = useState<SearchedProfile | null>(null);
    const [username, setUsername] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchAllProfiles = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('/api/v1/explore');
            setAllProfiles(response.data);
        } catch (error: any) {
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
        } catch (err: any) {
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

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            fetchUser();
        }
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Image src="/Vector.svg" alt="Logo" width={36} height={36} />
              <span className="sr-only">Vcatalyst</span>
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/dashboard"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/roadmap"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Map className="h-5 w-5" />
                    <span className="sr-only">Roadmap</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Roadmap</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/share"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Share</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/explore"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Explore</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Explore</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/edit-profile"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Image
                      src="/user-pen.svg"
                      className="h-5 w-5 "
                      alt=""
                      height={30}
                      width={30}
                    />
                    <span className="sr-only">Profile</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Profile</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent side="right"></TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Image
                      src="/vector.svg"
                      height={30}
                      width={40}
                      alt=""
                      className="h-5 w-5 transition-all group-hover:scale-110"
                    />
                    <span className="sr-only">Vcatalyst</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/roadmap"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Roadmap
                  </Link>
                  <Link
                    href="/share"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Share Profile
                  </Link>
                  <Link
                    href="/expolre"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    Explore
                  </Link>
                  <ModeToggle />
                </nav>
              </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard">Explore other People</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <main className="flex justify-evenly mt-4 md:flex-row flex-col">
          <div className="">
            <div className="flex flex-col items-center w-full px-4 md:px-8">
                <h1 className="text-white text-3xl text-center p-4">Explore other People</h1>

                <div className="mb-4 w-full md:w-3/4 flex">
                    <input
                        type="text"
                        value={username}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
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
        </main>
      </div>
    </div>
    );
};

export default Explore;






