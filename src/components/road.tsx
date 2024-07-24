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
  BadgeDollarSign,
  Map,
  User,
  Users2,
  Share2,
  Loader,
  LogOut,
} from "lucide-react";
import { forwardRef, useRef } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";

import { useRouter } from "next/navigation";
import axios from "axios";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Roadmap({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handlelogut = () => {
    try {
      axios.post("/api/v1/auth/logout");

      router.push("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
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
                <div className=" text-white" onClick={handlelogut}>
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
        <h1 className="text-white font-bold text-4xl">Roadmap</h1>
        <main className="flex justify-center items-center">
          <div
            className={cn(
              "relative flex h-[500px] w-full items-center justify-center overflow-hidden   p-10 md:shadow-xl",
              className
            )}
            ref={containerRef}
          >
            <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
              <div className="flex flex-col justify-center gap-2 text-black">
                <Link href="/docs/getting-started/introduction">
                  <Circle ref={div1Ref}>1</Circle>
                </Link>
                <Link href="/docs/getting-started/introduction">
                  <Circle ref={div2Ref}>2</Circle>
                </Link>
                <Link href="/docs/getting-started/introduction">
                  <Circle ref={div3Ref}>3</Circle>
                </Link>
                <Link href="/docs/getting-started/introduction">
                  <Circle ref={div4Ref}>4</Circle>
                </Link>
                <Link href="/docs/getting-started/introduction">
                  <Circle ref={div5Ref}>5</Circle>
                </Link>
              </div>
              <div className="flex flex-col justify-center text-black">
                <Circle ref={div6Ref} className="size-16">
                  <User />
                </Circle>
              </div>
              <div className="flex flex-col justify-center text-black">
                <Circle ref={div7Ref} className="size-16">
                  <BadgeDollarSign />
                </Circle>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div4Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
