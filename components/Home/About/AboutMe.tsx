"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="bg-[#0a0a0a] pb-8">
      <div className="pt-16 flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-cyan-300 mb-6">
          About Me & Education
        </h2>

        <div className="max-w-7xl w-full border border-gray-200 rounded-xl p-6 bg-linear-to-r from-[#002243] via-[#00c8ff1a] to-[#002243] backdrop-blur-md shadow-lg animate-gradient">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* LEFT: Text */}
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                className="space-y-5 text-base leading-relaxed text-gray-200"
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
                    <strong className="text-cyan-300">Điểm mạnh:</strong> Tôi là
                    người luôn có <strong>tinh thần học hỏi</strong> và{" "}
                    <strong>kiên trì</strong> theo đuổi mục tiêu. Với tôi,{" "}
                    <em className="text-gray-400">
                      “Không có con đường dẫn đến thành công nào mà không trải
                      qua chông gai và thử thách.”
                    </em>{" "}
                    Chính điều đó giúp tôi không ngừng nỗ lực để tiến bộ mỗi
                    ngày.
                  </p>
                </motion.div>

                {/* Weakness */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <p>
                    <strong className="text-cyan-300">Điểm yếu:</strong> Tôi
                    nhận thấy khả năng <strong>giao tiếp</strong> của mình còn
                    hạn chế, đôi khi chưa sắp xếp ý tưởng rõ ràng khi nói. Ngoài
                    ra, tôi vẫn còn yếu ở <strong>thuật toán</strong> và{" "}
                    <strong>tiếng Anh</strong>.
                  </p>
                </motion.div>

                {/* Improvement */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  <p className="text-cyan-300 font-semibold">
                    <strong>Hướng cải thiện:</strong> Tôi đang chủ động rèn
                    luyện kỹ năng <strong>giao tiếp</strong> thông qua việc ghi
                    chép và trình bày ý tưởng hàng ngày, đồng thời tham gia thảo
                    luận nhóm. Tôi cũng dành thời gian ôn luyện{" "}
                    <strong>thuật toán cơ bản</strong> và{" "}
                    <strong>học tiếng Anh giao tiếp</strong> qua phim, podcast,
                    cùng tài liệu chuyên ngành — để phát triển toàn diện cả tư
                    duy và kỹ năng ngôn ngữ.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: Image */}
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
