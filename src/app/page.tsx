import Footer from "@/components/footer";

import GridPatternDashed from "@/components/magicui/display/dash";
import Roadmap from "@/components/roadmap";
import Image from "next/image";
import { BentoGrids } from "@/components/magicui/display/why";

export default function Home() {
  return (
    <>
      <GridPatternDashed />
      <Roadmap />
      <div>
        <div className="flex flex-col md:flex-row justify-center px-4 mt-12 ">
          <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-center">
            Why Choose
          </h1>
          <span className="text-3xl md:text-6xl font-bold ml-0 md:ml-4 text-white text-center">
            Us
          </span>
        </div>
        <BentoGrids />
      </div>
      <Footer />
    </>
  );
}
