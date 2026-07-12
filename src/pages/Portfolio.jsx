import { Navbar, SocialRail, Footer } from "../components/portfolio/Layout";
import HeroSection from "../components/portfolio/Hero";
import {
  AboutSection,
  HobbiesSection,
  EducationSection,
  LeadershipSection,
  TechStackSection,
  ProjectsSection,
  CertificationsSection,
  RecognitionsSection,
  ContactSection,
} from "../components/portfolio/Sections";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter antialiased">
      <div className="animated-grid-bg" />
      <div className="relative z-10">
        <Navbar />
        <SocialRail />
        <main>
          <HeroSection />
          <AboutSection />
          <HobbiesSection />
          <EducationSection />
          <LeadershipSection />
          <TechStackSection />
          <ProjectsSection />
          <CertificationsSection />
          <RecognitionsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
