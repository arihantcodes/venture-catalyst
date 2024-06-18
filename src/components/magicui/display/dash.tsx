"use client";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { AnimatedGradientTextDemo } from "@/components/AnimatedGradientTextDemo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import toast, { Toaster } from "react-hot-toast";

const GridBackgroundDemo = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlejoin = async () => {
    setLoading(true);
    try {
      await axios.post("/api/waitlist", {
        email,
      });
      toast.success("Thank you for joining the waitlist");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };


      
  const handleClick = () => {



    handlejoin();





    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };


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
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-60 md:w-80 text-white"
        />
        <div className="relative">
        <Button
          onClick={handleClick}
          variant={"outline"}
          className="text-white"
          disabled={!email} 
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
