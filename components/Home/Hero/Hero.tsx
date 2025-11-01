"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import ContactSection from "../Contact/Contact";
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white flex-col">
      <ParticlesHero></ParticlesHero>
      <div className="flex flex-col items-center ">
        <div className="w-[220px] h-[220px] rounded-full overflow-hidden border-8 border-[#0c0c48aa]">
          <Image
            src="/images/kien.jpg"
            alt="Kien"
            width={220}
            height={220}
            className="object-cover w-full h-full"
          />
        </div>

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
          <span className="ml-2">
            <Typewriter
              options={{
                strings: [
                  '<span class="text-[#F25912] transition-colors duration-500">Frontend developer</span>',
                  '<span class="text-[#59AC77] transition-colors duration-500">NodeJS developer</span>',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            ></Typewriter>
          </span>
        </h2>
        <motion.blockquote
          className="mt-8 italic text-white text-sm border-l-2 border-cyan-500/30 pl-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          "Always learning, always improving — because technology never stands
          still."
        </motion.blockquote>
        <motion.blockquote
          className="mt-8 italic text-white text-sm border-l-2 border-cyan-500/30 pl-4 text-nowrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          "I may not have become the person I want to be yet, but I must be
          different from who I once was!"
        </motion.blockquote>
        <motion.blockquote
          className="mt-8 italic text-white text-sm border-l-2 border-cyan-500/30 pl-4 flex flex-col items-center justify-center "
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          "It’s not that the result won’t come — it just hasn’t come yet
          <strong className="text-center mx-auto text-cyan-300 drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]">
            Like wine, the longer it’s aged, the richer its flavor{" "}
            <span className="text-white">!"</span>
          </strong>{" "}
        </motion.blockquote>
        <ContactSection></ContactSection>
      </div>
    </div>
  );
};

export default Hero;
