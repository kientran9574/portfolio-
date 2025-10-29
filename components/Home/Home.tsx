import React from "react";
import Hero from "./Hero";
import Experience from "./MyExperience/Experience";
import AboutMe from "./About/AboutMe";
import AutoSkillSlider from "./Skills/AutoSkillSlider";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <Experience></Experience>
      <AboutMe></AboutMe>
      <AutoSkillSlider></AutoSkillSlider>
    </div>
  );
};

export default Home;
