"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Education = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#010f23] to-[#001018] py-16 sm:py-20 md:py-28 px-4 sm:px-8 overflow-hidden">
      {/* Hiệu ứng ánh sáng nền */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <header className="relative flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-16 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-100 drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]">
          Education
        </h2>
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
          <Image
            src="https://file1.hutech.edu.vn/file/editor/homepage/stories/hinh34/logo%20CMYK-03.png"
            alt="Hutech Logo"
            fill
            sizes="(max-width: 768px) 64px, 96px"
            className="object-contain drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]"
          />
        </div>
      </header>

      {/* Nội dung chính */}
      <div className="flex justify-center">
        <motion.article
          className="relative w-full max-w-[700px] rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,200,255,0.1)] p-6 sm:p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Logo bay nổi */}
          <motion.div
            className="absolute top-22 -left-2 sm:-top-16 sm:-left-14 md:-top-18 md:-left-16 z-10"
            animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="https://file1.hutech.edu.vn/file/editor/homepage/stories/hinh34/logo%20CMYK-03.png"
              alt="Hutech Logo"
              width={120}
              height={120}
              className="w-22 sm:w-28 md:w-32 drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]"
            />
          </motion.div>

          {/* Thông tin học tập */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ho Chi Minh City University of Technology (HUTECH)
          </motion.h3>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold">Name:</span> Trần Văn
            Kiên
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold">Duration:</span> 2021
            – 2025
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold">GPA:</span> 3.11 /
            4.00
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold">Major:</span> Software
            Technology
          </motion.p>

          {/* Hiệu ứng khung sáng */}
          <motion.div
            className="absolute inset-0 border border-cyan-400/10 rounded-2xl"
            animate={{
              boxShadow: [
                "0 0 15px rgba(0,200,255,0.15)",
                "0 0 40px rgba(0,200,255,0.35)",
                "0 0 15px rgba(0,200,255,0.15)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.article>
      </div>
    </section>
  );
};

export default Education;
