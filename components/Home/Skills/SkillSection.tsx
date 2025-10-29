"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiFramer,
  SiSocketdotio,
  SiTailwindcss,
  SiMaterialdesign,
  SiAntdesign,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiSwagger,
} from "react-icons/si";

import { MdOutlineWidgets } from "react-icons/md";
import { FaMagic } from "react-icons/fa";
import { ReactNode } from "react";

export const frontendSkills = [
  { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
  { name: "ReactJS", icon: <SiReact color="#61DAFB" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" /> },
  { name: "Zustand", icon: <span className="text-4xl">🐻</span> },
  { name: "React Query", icon: <SiReactquery color="#FF4154" /> },
  { name: "Framer Motion", icon: <SiFramer color="#E91E63" /> },
  { name: "Socket.IO", icon: <SiSocketdotio color="#010101" /> },
  { name: "React Native", icon: <SiReact color="#61DAFB" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "Shadcn/UI", icon: <MdOutlineWidgets color="#C084FC" /> },
  { name: "Material UI", icon: <SiMaterialdesign color="#007FFF" /> },
  { name: "Magic UI", icon: <FaMagic color="#FACC15" /> },
  { name: "Ant Design", icon: <SiAntdesign color="#0170FE" /> },
];

export const backendSkills = [
  { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "ExpressJS", icon: <SiExpress color="#FFFFFF" /> },
  { name: "REST API", icon: <SiSwagger color="#00BFFF" /> },
  { name: "Prisma ORM", icon: <SiPrisma color="#2D3748" /> },
  { name: "Socket.IO", icon: <SiSocketdotio color="#010101" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
];

function SkillSection({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: ReactNode }[];
}) {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="h-5 w-1.5 bg-cyan-400 rounded-full"></span>
        {title}
      </h3>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={24}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        allowTouchMove={true}
        className="w-full"
      >
        {skills.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="group relative flex flex-col items-center justify-center py-6 rounded-xl bg-gradient-to-b from-[#0a192f]/40 to-[#0a192f]/10 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <span className="mt-3 text-sm font-medium text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                {s.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SkillSection;
