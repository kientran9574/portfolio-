import React from "react";
import Hero from "./Hero";
import Experience from "./MyExperience/Experience";
import AboutMe from "./About/AboutMe";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <Experience></Experience>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
