/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
}

const generateStars = (count: number): Star[] =>
  Array.from({ length: count }).map(() => ({
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2, // ✅ chuyển Math.random() ra đây
  }));

const TwinkleBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(50)); // tạo sao sau khi client mount
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-40">
      {stars.map((star, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white blur-[2px] opacity-80"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 8px 3px rgba(255,255,255,0.8)",
          }}
          //   animate={{
          //     opacity: [0.2, 1, 0.2],
          //   }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default TwinkleBackground;
