import React from "react";
import Hero from "./Hero";
import Experience from "./MyExperience/Experience";
import AboutMe from "./About/AboutMe";
import AutoSkillSlider from "./Skills/AutoSkillSlider";
import Education from "./Education/Education";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <Experience></Experience>
      <AboutMe></AboutMe>
      <AutoSkillSlider></AutoSkillSlider>
      <Education></Education>
    </div>
  );
};

export default Home;
