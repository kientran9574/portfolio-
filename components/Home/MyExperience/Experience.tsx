/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import TwinkleBackground from "./TwinkleBackground";

const experiences = [
  {
    logo: "https://vnsweb-asset.vnsilicon.net/cms/ba4869b7-8a50-4f4b-82e9-01752f313354.svg",
    alt: "Logo VNSilicon",
    company: "Vietnam Silicon Company Limited",
    color: "#3b82f6",
    role: "Frontend Developer Intern",
    dateColor: "bg-orange-500",
    date: ["25/5", "25/8"],
    description: (
      <>
        • Built authentication flow registration, email verification, login
        <br />
        • Developed drag-and-drop workflow builder using React Flow with auto
        data synchronization between nodes.
        <br />• Integrated AI Chatbot using OpenRouter (LLaMA 3) and Google Gen
        AI.
      </>
    ),
  },
  {
    logo: "https://secomvn.com/images/logo_horizontal_white_360x.png?v=10.17_t1130",
    alt: "Logo Secom",
    company: "SECOM Service Company Limited",
    color: "#ef4444",
    role: "Frontend Developer Intern",
    dateColor: "bg-red-500",
    date: ["25/5", "25/8"],
    description: (
      <>
        • Built reusable UI components with ReactJS and TypeScript.
        <br />
        • Developed 7-day sales overview dashboard using charts and metrics.
        <br />• Collaborated in Agile/Scrum process, participating in sprint
        planning and code reviews.
      </>
    ),
  },
];

const Experience = () => {
  return (
    <div className="relative z-0  pb-16 bg-[#010f23] pt-16 overflow-hidden">
      <TwinkleBackground></TwinkleBackground>
      <div className="max-w-7xl mx-auto px-4">
        {/* Gradient Title */}
        <motion.h2
          className="text-center text-transparent text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text bg-linear-to-r from-[#007bff] via-[#00c6ff] to-[#007bff] animate-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Experience
        </motion.h2>

        <div className="grid grid-cols-12 gap-6 mt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-span-12 md:col-span-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.25,
              }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative cursor-pointer group bg-[#002243] rounded-2xl shadow-lg border border-slate-700 p-6 transition-all overflow-hidden"
                whileHover={{
                  boxShadow: "0px 0px 25px rgba(0, 102, 255, 0.3)",
                }}
              >
                {/* subtle glowing border animation */}
                <div className=" absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                <div className="relative z-10 flex items-center ">
                  <div className="w-28 h-28 shrink-0">
                    <Image
                      src={exp.logo}
                      alt={exp.alt}
                      width={120}
                      height={120}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="ml-5 flex-1 text-white">
                    <h2
                      className="text-xl font-bold"
                      style={{ color: exp.color }}
                    >
                      {exp.company}
                    </h2>
                    {exp.company === "SECOM Service Company Limited" ? (
                      <h3 className="text-red-600 text-lg font-medium">
                        {exp.role}
                      </h3>
                    ) : (
                      <h3 className="text-[#F25912] text-lg font-medium">
                        {exp.role}
                      </h3>
                    )}

                    <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                      <span>{exp.date[0]}</span>
                      <span className={`w-6 h-[1px] ${exp.dateColor}`}></span>
                      <span>{exp.date[1]}</span>
                    </div>
                    <p className="text-base leading-relaxed text-white/90 h-40">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-move 5s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Experience;
