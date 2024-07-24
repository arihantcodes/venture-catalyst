"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Home, Map, Users2, Share2, PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Graph } from "@/components/ui/graph";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const handlelogut = () => {
    try {
      axios.post("/api/v1/auth/logout");

      router.push("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };
  const [userData, setUserData] = useState({
    fullname: "",
    bio: "",
    ventureName: "",
    linkedinUrl: "",
    username: "",
    profilePictureUrl: "",
    websiteUrl: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/v1/dashboard");
        const fetchedData = response.data;
        fetchedData.fullname = fetchedData.fullname.toUpperCase();
        setUserData(fetchedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const {
    fullname,
    bio,
    ventureName,
    linkedinUrl,

    profilePictureUrl,
  } = userData;

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
        <div className="flex flex-col md:flex-row justify-evenly mt-4 px-4 md:px-0">
          <div className="w-full max-w-sm mb-8 md:mb-0 bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              {profilePictureUrl ? (
                <Image
                  src={profilePictureUrl}
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-white shadow-sm"
                />
              ) : (
                <div className="flex items-center justify-center w-24 h-24">
                  <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
                </div>
              )}
            </div>
            <h1 className="text-xl font-bold text-gray-900">{fullname}</h1>
            <p className="text-sm text-gray-600">Founder@{ventureName}</p>

            <div className="flex justify-between mt-4 text-gray-700">
              <div>
                <p className="text-lg font-semibold">{11}</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-lg font-semibold">{250}</p>
                <p className="text-xs text-gray-500">Following</p>
              </div>
              <div>
                <p className="text-lg font-semibold">{185}</p>
                <p className="text-xs text-gray-500">Followers</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">{bio || "Loading..."}</p>
            <div className="flex justify-center mt-4 space-x-4 text-blue-600">
              <Link href={linkedinUrl} className="hover:text-blue-800">
                <FaLinkedin size={20} />
              </Link>
              <Link href={"#"} className="hover:text-blue-800">
                <FaTwitter size={20} />
              </Link>
            </div>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700">
              Edit Profile
            </button>
          </div>

          {/* Progress Card */}
          <div className="w-full md:w-auto p-6 bg-[#2E008E] text-white rounded-lg shadow-lg mt-8 md:mt-0">
            <div className="flex flex-col items-center">
              <Graph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
