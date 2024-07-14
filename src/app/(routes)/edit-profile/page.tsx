"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

export default function Editprofile() {
  const [profile, setProfile] = useState({
    fullname: "",
    username: "",
    email: "",
    ventureName: "",
    bio: "",

    profilePictureUrl: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/v1/dashboard");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put("/api/auth/v1/profile", profile);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
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
                  <span className="sr-only">Acme Inc</span>
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
                  <Link href="/dashboard">Edit Profile</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex flex-col md:flex-row justify-evenly mt-4">
  <div className="max-w-3xl w-full">
    <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            {profile.profilePictureUrl ? (
              <Image
                src={profile.profilePictureUrl}
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
            <Button className="mt-4">✎ Edit</Button>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Your Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={profile.fullname}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-200 rounded border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-700 mb-1">
                User Name
              </label>
              <Input
                type="text"
                id="username"
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-200 rounded border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="founder" className="block text-gray-700 mb-1">
                Founder @
              </label>
              <Input
                type="text"
                id="founder"
                name="founder"
                value={profile.ventureName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-200 rounded border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-200 rounded border border-gray-300"
                style={{ height: "150px" }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button variant="outline" className="bg-black text-white">
            Save
          </Button>
        </div>
      </form>
    </div>
  </div>
</main>

      </div>
    </div>
  );
}
