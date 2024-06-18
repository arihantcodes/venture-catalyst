import Footer from "@/components/footer";
import {AnimatedGradientTextDemo} from "../components/AnimatedGradientTextDemo";
import GridPatternDashed from "@/components/magicui/display/dash";
import Roadmap from "@/components/roadmap";
import Image from "next/image";
import { BentoGrids } from "@/components/magicui/display/why";

export default function Home() {
  return (
   <>
   <GridPatternDashed/>
    <Roadmap/>
    <BentoGrids/>
    <Footer/>
   </>
  );
}
