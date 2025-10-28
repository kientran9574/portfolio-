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
                      <strong className="text-cyan-300">Điểm mạnh:</strong> Tôi
                      là người luôn có <strong>tinh thần học hỏi</strong> và
                      <strong>kiên trì</strong> theo đuổi mục tiêu. Với tôi,
                      <em className="text-gray-400">
                        “Không có con đường dẫn đến thành công nào mà không trải
                        qua chông gai và thử thách.”{" "}
                      </em>{" "}
                      Chính điều đó giúp tôi không ngừng nỗ lực để tiến bộ mỗi
                      ngày.{" "}
                    </p>{" "}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <p>
                      {" "}
                      <strong className="text-cyan-300">Điểm yếu:</strong> Tôi
                      nhận thấy khả năng <strong>giao tiếp</strong> của mình còn
                      hạn chế, đôi khi chưa sắp xếp ý tưởng rõ ràng khi nói.
                      Ngoài ra, tôi vẫn còn yếu ở <strong>thuật toán</strong> và{" "}
                      <strong>tiếng Anh</strong>.{" "}
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
                        Hướng cải thiện:
                      </strong>{" "}
                      Tôi đang chủ động rèn luyện kỹ năng{" "}
                      <strong>giao tiếp</strong> thông qua việc ghi chép và
                      trình bày ý tưởng hàng ngày, đồng thời tham gia thảo luận
                      nhóm. Tôi cũng dành thời gian ôn luyện{" "}
                      <strong>thuật toán cơ bản</strong> và{" "}
                      <strong>học tiếng Anh giao tiếp</strong> qua phim,
                      podcast, cùng tài liệu chuyên ngành — để phát triển toàn
                      diện cả tư duy và kỹ năng ngôn ngữ.
                      {/* Hiệu ứng ánh sáng quét + glow cyan */}
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
                      {/* Glow mờ quanh chữ */}
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
                      <strong className="text-cyan-300">Mục tiêu gần:</strong>{" "}
                      Tôi muốn trở thành <strong>Fullstack Developer</strong>{" "}
                      làm chủ <strong>Frontend</strong> (ReactJS/NextJS) và{" "}
                      <strong>Backend</strong> (ExpressJS/NestJS). Tôi rất yêu
                      các công nghệ này và đang không ngừng học hỏi, thực hành
                      mỗi ngày để đạt được mục tiêu đó.
                    </p>
                  </motion.div>

                  <motion.div
                    className="col-span-12 lg:col-span-6 space-y-5 text-base leading-relaxed text-gray-200"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <p>
                      <strong className="text-cyan-300">Mục tiêu xa:</strong> Em
                      sẽ học <strong className="text-[#47b5d0]">Golang</strong>/
                      <strong className="bg-linear-to-r from-[#306998] to-[#FFD43B] bg-clip-text text-transparent">
                        Python
                      </strong>{" "}
                      và{" "}
                      <strong className="text-shadow-red-500 text-shadow-2xs shadow-xl shadow-red-400 font-extrabold text-white">
                        System design
                      </strong>{" "}
                      để mở rộng tư duy hệ thống và mong muốn được cọ sát nhiều
                      với các hệ thống lớn{" "}
                      <strong>để giúp cho doanh nghiệp</strong>,
                      <strong>
                        giải quyết được các bài toán khó trong hệ thống{" "}
                      </strong>
                      cùng với đó mong muốn có thể đạt được kỹ năng giao tiếp{" "}
                      <strong>tiếng Anh chuyên ngành</strong>.
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

            {/* SLIDE 3 */}
            {/* <SwiperSlide>
              <div className="grid grid-cols-12 gap-6 items-center">
                <motion.div
                  className="col-span-12 lg:col-span-6 space-y-5 text-base leading-relaxed text-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <p>
                    <strong className="text-cyan-300">Mục tiêu xa:</strong> Tôi
                    mong muốn được tham gia vào các dự án dùng{" "}
                    <strong>Golang</strong> hoặc <strong>Python</strong> để mở
                    rộng tư duy hệ thống và cải thiện{" "}
                    <strong>cấu trúc dữ liệu</strong>,{" "}
                    <strong>giải thuật</strong> cùng khả năng{" "}
                    <strong>tiếng Anh chuyên ngành</strong>.
                  </p>
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
                      src="/images/c5.png"
                      alt="Long Term Goal"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
