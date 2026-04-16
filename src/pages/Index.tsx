import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ConnectSection from "@/components/ConnectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GlobalBubble from "@/components/GlobalBubble";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GlobalBubble />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ConnectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;