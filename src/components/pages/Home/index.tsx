"use client";

import useTheme from "@/redux/hooks/useNavbar";
import AboutSection from "./About";
import ContactSection from "./Contact";
import HeroSection from "./HeroSection";
import ProjectsSection from "./Projects";
import SkillsSection from "./Skills";
import SocialBars from "./SocialBar";
import Testimonials from "./Testimonials";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const sectionRefs = useRef<Array<any>>([]);
  const { setActive } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Check which section is currently in the viewport
      sectionRefs.current.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActive(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <HeroSection ref={(el: any) => (sectionRefs.current[0] = el)} />
      <SocialBars />
      <AboutSection ref={(el: any) => (sectionRefs.current[1] = el)} />
      <SkillsSection ref={(el: any) => (sectionRefs.current[2] = el)} />
      <ProjectsSection ref={(el: any) => (sectionRefs.current[3] = el)} />
      <Testimonials ref={(el: any) => (sectionRefs.current[4] = el)} />
      <ContactSection ref={(el: any) => (sectionRefs.current[5] = el)} />
    </main>
  );
};

export default HomePage;
