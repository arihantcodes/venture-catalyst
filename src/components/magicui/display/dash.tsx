"use client";
import React from "react";
import { Spotlight } from "../aceternity/light";
import Navbar from "./navbar";

const GridBackgroundDemo = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 h-screen">
        <div className="h-full flex items-center justify-center">
          {/* Left side content can be added here if needed */}
        </div>
        <div className="h-full w-full bg-black bg-grid-white/[0.07] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            {/* Your content here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridBackgroundDemo;
