'use client'
import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from 'react';
import ProfileCard from '@/components/ProfileCard';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

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
    LogOut,
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
import { useRouter } from 'next/navigation';

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
    const router = useRouter()
    const handlelogut = () =>{
  
      try {
        axios.post("/api/v1/auth/logout");
  
        router.push("/")
      } catch (error) {
        console.log("Logout error:", error);
      }
    }
    return (
        <div className="flex min-h-screen w-full flex-col bg-black">
           <div className="fixed inset-y-0 left-0 z-10 hidden w-16 md:w-32 flex-col border-r bg-background sm:flex">
        <div className="flex flex-col items-center justify-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Image src="/Vector.svg" alt="Logo" width={36} height={36} />
            <span className="sr-only">Vcatalyst</span>
          </Link>

          {[
            { href: "/dashboard", icon: Home, label: "Dashboard" },
            { href: "/roadmap", icon: Map, label: "Roadmap" },
            { href: "/explore", icon: Users2, label: "Explore" },
            { href: "/share", icon: Share2, label: "Share" },
            { href: "/editprofile", icon: "/user-pen.svg", label: "Profile" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group text-white flex flex-col items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {typeof item.icon === "string" ? (
                <Image
                  src={item.icon}
                  className="h-5 w-5 text-white"
                  alt=""
                  height={30}
                  width={30}
                />
              ) : (
                <item.icon className="h-5 w-5" />
              )}
              <span className="text-xs text-white md:text-sm group-hover:text-foreground">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div
          className="mt-auto flex flex-col text-white items-center justify-center gap-4 px-2 py-4"
          onClick={handlelogut}
        >
          <Link
            href="/logout"
            className="group flex flex-col items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <LogOut className="h-5 w-5" />
            <span className="text-xs md:text-sm group-hover:text-foreground">
              Logout
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-20 md:pl-36">
        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only text-white">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Image
                    src="/Vector.svg"
                    height={30}
                    width={40}
                    alt=""
                    className="h-5 w-5 transition-all group-hover:scale-110"
                  />
                  <span className="sr-only">Vcatalyst</span>
                </Link>
                {[
                  { href: "/dashboard", icon: Home, label: "Dashboard" },
                  { href: "/roadmap", icon: Map, label: "Roadmap" },
                  { href: "/share", icon: Share2, label: "Share Profile" },
                  {
                    href: "/editprofile",
                    icon: "/user-pen.svg",
                    label: "Profile",
                  },
                  { href: "/explore", icon: Users2, label: "Explore" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {typeof item.icon === "string" ? (
                      <Image
                        src={item.icon}
                        className="h-5 w-5 text-white"
                        alt=""
                        height={30}
                        width={30}
                      />
                    ) : (
                      <item.icon className="h-5 w-5" />
                    )}
                    <span className="text-xs text-white md:text-sm group-hover:text-foreground">
                      {item.label}
                    </span>
                  </Link>
                ))}
                <div
                  className=" text-white"
                  onClick={handlelogut}
                >
                  <Link
                    href="/logout"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="text-xs md:text-sm group-hover:text-foreground">
                      Logout
                    </span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
                <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12">
                    <h1 className="text-white text-2xl sm:text-3xl text-center p-4">Explore other People</h1>

                    <div className="mb-4 w-full max-w-2xl flex">
                        <input
                            type="text"
                            value={username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="rounded-l-lg w-full p-2 text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
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
                    {isLoading && <p className="text-white">Loading profiles...</p>}

                    {searchedProfile && (
                        <div className="w-full mb-8">
                            <h2 className="text-white text-xl sm:text-2xl mb-4">Search Result</h2>
                            <div className="w-full max-w-md mx-auto">
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
                        <h2 className="text-white text-xl sm:text-2xl mb-4">Similar Profiles</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                </main>
            </div>
        </div>
    );
};

export default Explore;