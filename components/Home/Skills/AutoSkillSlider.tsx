import TwinkleBackground from "../MyExperience/TwinkleBackground";
import SkillSection, { backendSkills, frontendSkills } from "./SkillSection";

export default function AutoSkillSlider() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#020617] via-[#040d1a] to-[#000000] overflow-hidden">
      <TwinkleBackground />

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-2">
          My Technical Skills
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Technologies I use to craft scalable, beautiful, and performant apps.
        </p>
      </div>

      {/* FRONTEND */}
      <div className="max-w-6xl mx-auto px-4">
        <SkillSection title="Frontend" skills={frontendSkills} />
        <div className="my-10"></div>
        <SkillSection title="Backend" skills={backendSkills} />
      </div>
    </section>
  );
}
