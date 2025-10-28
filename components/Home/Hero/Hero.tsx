"use client";
import Download from "@/components/icon/Download";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white flex-col">
      <ParticlesHero></ParticlesHero>
      <div className="flex flex-col items-center ">
        <Image
          src={"/images/s1.jpg"}
          alt="image"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
        ></Image>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-6 font-bold">
          KO DEV is a role main{" "}
          <span className="text-[#F25912]">Frontend developer</span>,<br />{" "}
          <p className="text-center mt-1">
            as well as can
            <span className="text-[#59AC77] ml-2">NodeJS developer</span>
          </p>
        </h1>
        <h2 className="flex mt-8 text-base sm:text-xl md:text-2xl lg:text-3xl">
          Hi! I'm Kien - is a
          <span className="text-[#F25912] ml-2">
            <Typewriter
              options={{
                strings: ["Frontend developer", "NodeJS developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            ></Typewriter>
          </span>
        </h2>
        <button className="flex items-center justify-center py-3 px-6 gap-2 bg-blue-600 text-white text-center rounded hover:bg-blue-500 transition-all duration-200 cursor-pointer mt-8">
          <Download className="text-white shrink-0 size-5"></Download>
          <p className="whitespace-nowrap"> Download CV</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
