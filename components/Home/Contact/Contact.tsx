"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaRegHandshake } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-8 text-center relative"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-2 mb-1"
        animate={{ rotate: [0, 15, 0, 15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
      >
        <FaRegHandshake className="text-cyan-300 text-5xl drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]" />
      </motion.div>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/ki%C3%AAn-tr%E1%BA%A7n-6315a8327/"
          target="_blank"
          className="flex items-center gap-3 hover:opacity-90 transition-all group"
        >
          <div className="p-2 rounded-full bg-[#0A66C2]/10 group-hover:scale-110 transition-transform">
            <FaLinkedin size={28} color="#0A66C2" />
          </div>
          <span className="text-sm sm:text-base text-white">
            My LinkedIn (click here)
          </span>
        </Link>

        {/* Gmail */}
        <div className="flex items-center gap-3 hover:opacity-90 transition-all group">
          <div className="p-2 rounded-full bg-[#EA4335]/10 group-hover:scale-110 transition-transform">
            <SiGmail size={28} color="#EA4335" />
          </div>
          <span className="text-sm sm:text-base text-white">
            kientran9574@gmail.com
          </span>
        </div>

        {/* Zalo / Phone */}
        <div className="flex items-center gap-3 hover:opacity-90 transition-all group">
          <div className="p-2 rounded-full bg-[#0068FF]/10 group-hover:scale-110 transition-transform">
            <FaPhoneAlt size={26} color="#0068FF" />
          </div>
          <span className="text-sm sm:text-base text-white">
            0799 777 497 (Zalo)
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
