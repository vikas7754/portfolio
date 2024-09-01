"use client";

import AboutSection from "./About";
import HeroSection from "./HeroSection";
import SkillsSection from "./Skills";
import SocialBars from "./SocialBar";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SocialBars />
      <AboutSection />
      <SkillsSection />
    </main>
  );
};

export default HomePage;
