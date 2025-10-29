"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const AboutMe = () => {
  return (
    <div className="bg-[#0a0a0a] pb-16">
      <div className="pt-16 flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-cyan-300 mb-6">
          About Me & My Goal
        </h2>

        <div className="max-w-7xl w-full border border-gray-200 rounded-xl p-6 bg-gradient-to-r from-[#002243] via-[#00c8ff1a] to-[#002243] backdrop-blur-md shadow-lg animate-gradient">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={50}
            slidesPerView={1}
          >
            {/* SLIDE 1 */}
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* LEFT TEXT */}
                <motion.div
                  className="col-span-12 lg:col-span-6 space-y-5 text-base leading-relaxed text-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Strength */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    <p>
                      <strong className="text-cyan-300">Strengths:</strong> I’m
                      a person who always has a{" "}
                      <strong>learning mindset</strong> and{" "}
                      <strong>perseverance</strong> in pursuing goals. To me,{" "}
                      <em className="text-gray-400">
                        “There is no path to success without facing challenges
                        and difficulties.”
                      </em>{" "}
                      That’s what keeps me striving to improve every single day.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <p>
                      <strong className="text-cyan-300">Weaknesses:</strong> I
                      realize that my <strong>communication skills</strong> are
                      still limited — sometimes I struggle to organize my ideas
                      clearly when speaking. Besides, I’m still improving my{" "}
                      <strong>algorithm skills</strong> and{" "}
                      <strong>English proficiency</strong>.
                    </p>
                  </motion.div>

                  {/* Improvement */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <motion.p
                      className="relative font-medium text-gray-300 leading-relaxed overflow-hidden"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <strong className="text-gray-100">
                        Improvement Plan:
                      </strong>{" "}
                      I’m actively improving my{" "}
                      <strong>communication skills</strong> by journaling and
                      presenting ideas daily, as well as joining discussion
                      groups. I also spend time practicing{" "}
                      <strong>basic algorithms</strong> and{" "}
                      <strong>English communication</strong> through movies,
                      podcasts, and technical materials — aiming for a
                      well-rounded growth in both logic and language skills.
                      {/* Light sweep + glow effect */}
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
                          boxShadow: "0 0 25px 10px rgba(0,255,255,0.15)",
                          filter: "blur(4px)",
                        }}
                      />
                      {/* Soft glow around text */}
                      <motion.span
                        className="absolute inset-0 pointer-events-none mix-blend-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          background:
                            "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.25), transparent 60%)",
                          filter: "blur(12px)",
                        }}
                      />
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  className="col-span-12 lg:col-span-6 flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-[350px] h-[350px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-cyan-500/40">
                    <Image
                      src="/images/s1.jpg"
                      alt="About Me"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-6 items-center">
                <motion.div
                  className="col-span-12 lg:col-span-6 space-y-5 text-base leading-relaxed text-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    <p>
                      <strong className="text-cyan-300">
                        Short-term goal:
                      </strong>{" "}
                      I aim to become a <strong>Fullstack Developer</strong>,
                      mastering both <strong>Frontend</strong> (ReactJS/NextJS)
                      and <strong>Backend</strong> (ExpressJS/NestJS). I’m truly
                      passionate about these technologies and keep learning and
                      practicing every day to achieve that goal.
                    </p>
                  </motion.div>

                  <motion.div
                    className="col-span-12 lg:col-span-6 space-y-5 text-base leading-relaxed text-gray-200"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <p>
                      <strong className="text-cyan-300">Long-term goal:</strong>{" "}
                      I plan to learn{" "}
                      <strong className="text-[#47b5d0]">Golang</strong>/
                      <strong className="bg-linear-to-r from-[#306998] to-[#FFD43B] bg-clip-text text-transparent">
                        Python
                      </strong>{" "}
                      and{" "}
                      <strong className="text-shadow-red-500 text-shadow-2xs shadow-xl shadow-red-400 font-extrabold text-white">
                        System Design
                      </strong>{" "}
                      to strengthen my system-thinking mindset. I want to work
                      with large-scale systems{" "}
                      <strong>to help businesses</strong> and{" "}
                      <strong>solve complex architectural challenges</strong>.
                      Alongside that, I aim to achieve{" "}
                      <strong>technical English communication fluency</strong>.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="col-span-12 lg:col-span-6 flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-[350px] h-[350px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-cyan-500/40">
                    <Image
                      src="/images/c4.png"
                      alt="Future Goal"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
