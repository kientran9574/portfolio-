"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AboutMe = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-12 text-gray-200 overflow-hidden">
      {/* TITLE */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cyan-300 mb-3">
          About Me & My Goals
        </h2>
        <div className="h-1 w-20 bg-cyan-500 rounded-full" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto rounded-2xl border border-gray-700/50 bg-gradient-to-r from-[#00152b] via-[#003c52]/10 to-[#00152b] backdrop-blur-md shadow-lg overflow-hidden">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={40}
          className="mySwiper"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-10 lg:p-16">
              {/* LEFT TEXT */}
              <motion.div
                className="space-y-6 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  <strong className="text-cyan-300">Strengths:</strong> I’m a
                  person who values a{" "}
                  <strong className="text-white">learning mindset</strong> and{" "}
                  <strong className="text-white">perseverance</strong> in
                  achieving goals.{" "}
                  <em className="text-gray-400">
                    “There’s no path to success without facing challenges.”
                  </em>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <strong className="text-cyan-300">Weaknesses:</strong> I’m
                  still working on improving my{" "}
                  <strong className="text-white">communication</strong> and{" "}
                  <strong className="text-white">algorithm</strong> skills, as
                  well as enhancing my{" "}
                  <strong className="text-white">English proficiency</strong>.
                </motion.p>

                <motion.p
                  className="relative font-medium text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <strong className="text-gray-100">Improvement Plan:</strong> I
                  practice expressing ideas daily, join group discussions, and
                  study <strong className="text-white">algorithms</strong> and{" "}
                  <strong className="text-white">English</strong> through
                  real-world materials to grow in both logic and communication.
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: "-100%" }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 0%, rgba(0,255,255,0.2) 45%, rgba(0,255,255,0.6) 50%, rgba(0,255,255,0.2) 55%, transparent 100%)",
                      filter: "blur(6px)",
                    }}
                  />
                </motion.p>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-cyan-500/40">
                  <Image
                    src="/images/kien_1.jpg"
                    alt="About Me"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-10 lg:p-16">
              {/* LEFT TEXT */}
              <motion.div
                className="space-y-6 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  <strong className="text-cyan-300">Short-term Goal:</strong> I
                  aim to become a{" "}
                  <strong className="text-white">Fullstack Developer</strong>,
                  mastering{" "}
                  <strong className="text-white">ReactJS/NextJS</strong> and{" "}
                  <strong className="text-white">ExpressJS/NestJS</strong>. I’m
                  deeply passionate about these technologies and practice daily
                  to reach this goal.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <strong className="text-cyan-300">Long-term Goal:</strong> I
                  plan to learn{" "}
                  <strong className="text-[#47b5d0]">Golang</strong> and{" "}
                  <strong className="bg-gradient-to-r from-[#306998] to-[#FFD43B] bg-clip-text text-transparent">
                    Python
                  </strong>{" "}
                  while mastering{" "}
                  <strong className="text-white font-semibold">
                    System Design
                  </strong>{" "}
                  to strengthen my ability to build large-scale, maintainable
                  systems.
                </motion.p>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-cyan-500/40">
                  <Image
                    src="/images/kien_2.jpg"
                    alt="Future Goal"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutMe;
