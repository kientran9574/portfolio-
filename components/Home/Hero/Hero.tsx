"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import ContactSection from "../Contact/Contact";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen mt-18 sm:mt-14 md:mt-12 lg:mt-10 pt-8 px-4 text-center text-white overflow-hidden">
      <ParticlesHero />

      {/* Ảnh đại diện */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-[#0c0c48aa] shadow-[0_0_25px_rgba(15,100,255,0.3)]"
      >
        <Image
          src="/images/kien.jpg"
          alt="Kien"
          width={240}
          height={240}
          priority
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Giới thiệu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6"
      >
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-6 font-bold">
          KO DEV is a role main{" "}
          <span className="text-[#F25912]">Frontend developer</span>,<br />{" "}
          <p className="text-center mt-1">
            as well as can
            <span className="text-[#59AC77] ml-2">NodeJS developer</span>
          </p>
        </h1>

        <h2 className="flex justify-center mt-8 text-base sm:text-xl md:text-2xl lg:text-3xl">
          Hi! I’m Kien —
          <span className="ml-2">
            <Typewriter
              options={{
                strings: [
                  '<span class="text-[#F25912]">Frontend Developer</span>',
                  '<span class="text-[#59AC77]">NodeJS Developer</span>',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </span>
        </h2>
      </motion.div>

      {/* Quotes */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 space-y-6 max-w-md text-sm sm:text-base italic text-white/90"
      >
        <blockquote className="border-l-2 border-cyan-500/40 pl-4">
          "Always learning, always improving — because technology never stands
          still."
        </blockquote>

        <blockquote className="border-l-2 border-cyan-500/40 pl-4">
          "I may not have become the person I want to be yet, but I must be
          different from who I once was!"
        </blockquote>

        <blockquote className="border-l-2 border-cyan-500/40 pl-4">
          "It’s not that the result won’t come — it just hasn’t come yet.{" "}
          <strong className="block text-cyan-300 mt-1 drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]">
            Like wine, the longer it’s aged, the richer its flavor!
          </strong>
          "
        </blockquote>
      </motion.div>

      {/* Liên hệ */}
      <div className="mt-10">
        <ContactSection />
      </div>
    </section>
  );
};

export default Hero;
