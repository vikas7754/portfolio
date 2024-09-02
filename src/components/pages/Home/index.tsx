"use client";

import AboutSection from "./About";
import ContactSection from "./Contact";
import HeroSection from "./HeroSection";
import ProjectsSection from "./Projects";
import SkillsSection from "./Skills";
import SocialBars from "./SocialBar";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SocialBars />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default HomePage;
