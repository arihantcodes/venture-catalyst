"use client";
import React from "react";

import Navbar from "./navbar";
import { AnimatedGradientTextDemo } from "@/components/AnimatedGradientTextDemo";
import { Input } from "@/components/ui/input";
import { ConfettiFireworks } from "./buttonfire";

const GridBackgroundDemo = () => {
  return (
    <div>
      <Navbar />
      <AnimatedGradientTextDemo />
      <div className="flex justify-center px-4 ">
        <h1 className="text-3xl md:text-6xl font-bold text-white text-center">
          Redefining
          <span className="bg-clip-text ml-2  md:ml-4 text-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end">
            Entrepreneurship
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center mt-8 px-4 text-center">
        <p className="text-white text-sm md:text-base">
          Join our community to innovate, collaborate, and transform your ideas <br className="hidden md:block" />
          into successful startups. What are you waiting for?
        </p>
      </div>
      <div className="flex flex-col items-center mt-4 md:flex-row justify-center gap-4">
        <Input type="email" placeholder="Email" className="w-60 md:w-80" />
        <ConfettiFireworks />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-8">
        <div className="h-full flex items-center justify-center">
          {/* Left side content can be added here if needed */}
        </div>
        <div className="h-[25rem] w-full bg-black bg-grid-white/[0.07] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            {/* Your content here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridBackgroundDemo;
