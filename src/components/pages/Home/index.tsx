"use client";

import AboutSection from "./About";
import HeroSection from "./HeroSection";
import SocialBars from "./SocialBar";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SocialBars />
      <AboutSection />
    </main>
  );
};

export default HomePage;
