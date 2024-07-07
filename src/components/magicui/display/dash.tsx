"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import { AnimatedGradientTextDemo } from "@/components/AnimatedGradientTextDemo";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";


const GridBackgroundDemo = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoinClick = () => {
    router.push("/login");
  }

  return (
    <div>
      <Navbar />
      <AnimatedGradientTextDemo />
      <div className="flex flex-col md:flex-row justify-center px-4">
        <h1 className="text-3xl md:text-6xl font-bold text-white text-center">
          Redefining
        </h1>
        <span className="text-3xl md:text-6xl font-bold bg-clip-text ml-0 md:ml-4 text-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-center">
          Entrepreneurship
        </span>
      </div>

      <div className="flex flex-col items-center mt-8 px-4 text-center">
        <p className="text-white text-sm md:text-base">
          Join our community to innovate, collaborate, and transform your ideas{" "}
          <br className="hidden md:block" />
          into successful startups. What are you waiting for?
        </p>
      </div>
      <div className="flex flex-col items-center mt-4 md:flex-row justify-center gap-4">
        <div className="relative">

          <Button
            onClick={handleJoinClick}
            variant={"outline"}
            className=" w-full py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg focus:outline-none"
          >
            Join The Community
          </Button>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="h-full flex items-center justify-center ">
          {/* Left side content can be added here if needed */}
        </div>
        <div className="h-full w-full bg-black bg-grid-white/[0.07] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default GridBackgroundDemo;
