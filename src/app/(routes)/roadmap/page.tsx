"use client";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import Image from "next/image";
import Countdown from "react-countdown";

const Roadmap = () => {
    const launchDate = new Date('2024-08-01T00:00:00');
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <span>We are live now!</span>;
  } else {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-6xl font-bold text-white">Coming Soon</h1>
        <div className="flex space-x-4 text-4xl font-semibold text-white">
          <div>
            <div>{days}</div>
            <div className="text-sm">Days</div>
          </div>
          <div>
            <div>{hours}</div>
            <div className="text-sm">Hours</div>
          </div>
          <div>
            <div>{minutes}</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div>
            <div>{seconds}</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div>
        <p className="mt-4 text-xl text-white">
          We are working hard to bring something amazing!
        </p>
      </div>
    );
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
                  <Link href="/dashboard">Roadmap</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex justify-center items-center">
          <div className="flex items-center justify-center  ">
            <div className="text-center animate-fadeIn">
              <Countdown date={launchDate} renderer={renderer} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Roadmap;
