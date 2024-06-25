// components/Roadmap.tsx
import Image from "next/image";
import React from "react";

// display roadmap.svg when on md and above and contnet.svg when on sm and below

const Roadmap = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-10 lg:px-20 mt-16 bg-black text-white">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end">
          Gamifying
        </span>{" "}
        the Process
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center mb-8">
        Roadmap to making your venture a reality
      </h2>
      <div className="w-16 h-16 mb-8">
        <Image src="/squre.svg" alt="Rocket" width={64} height={64} />
      </div>
      <div className="relative flex flex-col">
        <Image
          src="/roadmap.svg"
          alt="Roadmap"
          className="md:block hidden"
          width={1200}
          height={400}
        />
        <div className="md:hidden block ">
          <Image src="/Content.svg" alt="Content" width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
