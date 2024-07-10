"use client";

import { useEffect, useState } from "react";
import Particles from "../magicui/particles";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import AnimatedShinyText from "../magicui/animated-shiny-text";

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <section className="relative mt-8 h-[100vh] md:mt-10 px-4 mx-auto container">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center flex justify-center mb-8 lg:mb-14"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 border border-primary/30 rounded-full">
              <span>✨ No Signup required</span>
            </AnimatedShinyText>
          </div>
          <h1 className="text-5xl font-semibold xs:text-6xl md:text-6xl text-primary mb-8">
            Create professional <br /> Resume easily.
          </h1>
          <p className="md:text-md text-gray-500 dark:text-primary/40 font-semibold mb-8 sm:mb-10">
            Make resume and get the ATS score for free
          </p>
          <div className="flex justify-center mx-auto items-center gap-4">
            <Button className="font-semibold ">Start Building</Button>
            <Button
              variant={"outline"}
              className="font-semibold hover:bg-gray-100/10"
            >
              Start Parsing
            </Button>
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={300}
        ease={50}
        color={color}
        refresh
      />
    </section>
  );
};

export default Hero;
