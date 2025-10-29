"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Education = () => {
  return (
    <section className="relative py-20 px-6 bg from-[#010f23] to-[#001018]] overflow-hidden">
      <div className="flex items-center justify-center  mb-10">
        <h2 className="text-4xl text-center font-bold drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]">
          Education
        </h2>
        <Image
          src="https://file1.hutech.edu.vn/file/editor/homepage/stories/hinh34/logo%20CMYK-03.png"
          alt="Hutech Logo"
          width={140}
          height={140}
          className="size-20 drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]"
        />
      </div>
      {/* Ánh sáng nền mờ */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="flex items-center justify-center ">
        <motion.div
          className="relative w-[700px]   rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,200,255,0.1)] p-8 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Logo nổi nhẹ */}
          <motion.div
            className="absolute -top-18 -left-20 z-10"
            animate={{
              y: [0, -6, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="https://file1.hutech.edu.vn/file/editor/homepage/stories/hinh34/logo%20CMYK-03.png"
              alt="Hutech Logo"
              width={140}
              height={140}
              className="size-40 drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]"
            />
          </motion.div>
          {/* Nội dung */}
          <div className="mt-12 text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ho Chi Minh City University of Technology (HUTECH)
            </motion.h2>

            <motion.p
              className="text-lg text-white font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-cyan-400 font-semibold">Name:</span> Trần
              Văn Kiên
            </motion.p>

            <motion.p
              className="text-white mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-cyan-400 font-semibold">Duration:</span>{" "}
              2021 - 2025
            </motion.p>
            <motion.p
              className="text-white mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="text-cyan-400 font-semibold">GPA:</span> 3.11/4
            </motion.p>

            <motion.p
              className="text-white mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="text-cyan-400 font-semibold">Major:</span>{" "}
              Software Technology
            </motion.p>
          </div>
          {/* Đường viền cyan chuyển động */}
          <motion.div
            className="absolute inset-0 border border-cyan-400/10 rounded-2xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(0,200,255,0.15)",
                "0 0 40px rgba(0,200,255,0.35)",
                "0 0 20px rgba(0,200,255,0.15)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
