"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Linkedin } from "lucide-react";

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
import {
  FaLinkedin,
  FaGlobe,
  FaTwitter,
  FaFacebook,
  FaBehance,
} from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Graph } from "@/components/ui/graph";

export default function Dashboard() {
  const [userData, setUserData] = useState({
    fullname: "",
    bio: "",
    ventureName: "",
    linkedinUrl: "",
    username: "",
    profilePictureUrl: "",
    websiteUrl: "arihant.com",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/v1/dashboard");
        const fetchedData = response.data;
        fetchedData.fullname = fetchedData.fullname.toUpperCase(); // Convert fullname to uppercase
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
    username,
    profilePictureUrl,
    websiteUrl,
  } = userData;

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
                  <Image src="/vector.svg" height={30} width={40} alt="" className="h-5 w-5 transition-all group-hover:scale-110" />
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
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
             
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex justify-evenly mt-4 md:flex-row flex-col">
          {/* Profile Card */}
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
                <Image
                  src="/peter.png"
                  className="rounded-full border-4 border-white shadow-sm"
                  width={100}
                  height={100}
                  alt="Profile Picture"
                />
              )}
            </div>
            <h1 className="text-xl font-bold text-gray-900">{fullname}</h1>
            <p className="text-sm text-gray-500">{"UI/UX Designer"}</p>
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
            <p className="mt-4 text-sm text-gray-600">
              {bio ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est et velit ornare ultricies. Ut vitae diam volutpat, mattis eros eget."}
            </p>
            <div className="flex justify-center mt-4 space-x-4 text-blue-600">
              <Link href={"#"} className="hover:text-blue-800">
                <FaLinkedin size={20} />
              </Link>
              <Link href={"#"} className="hover:text-blue-800">
                <FaTwitter size={20} />
              </Link>
            </div>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-teal-700">
              Edit Profile
            </button>
          </div>

          {/* Progress Card */}
          <div className="p-6 bg-[#2E008E] text-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <Graph />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
