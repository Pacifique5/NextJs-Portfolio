import EnhancedNavbar from "./components/EnhancedNavbar";
import EnhancedHeroSection from "./components/EnhancedHeroSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsShowcase from "./components/SkillsShowcase";
import EnhancedProjectsSection from "./components/EnhancedProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import EnhancedContactSection from "./components/EnhancedContactSection";
import EnhancedFooter from "./components/EnhancedFooter";
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white dark:bg-gray-900 text-black dark:text-white overflow-x-hidden">
      <ParticleBackground />
      <EnhancedNavbar />
      
      <div className="relative z-10">
        <div id="home" className="container mx-auto px-4 sm:px-6 lg:px-8">
          <EnhancedHeroSection />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ExperienceTimeline />
          <SkillsShowcase />
          <EnhancedProjectsSection />
          <TestimonialsSection />
          <EnhancedContactSection />
        </div>
      </div>
      
      <EnhancedFooter />
    </main>
  );
}