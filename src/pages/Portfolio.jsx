import ScrollProgress from '../components/portfolio/ScrollProgress';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import TechStackSection from '../components/portfolio/TechStackSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import EducationSection from '../components/portfolio/EducationSection';
import CertificationsSection from '../components/portfolio/CertificationsSection';
import RecognitionsSection from '../components/portfolio/RecognitionsSection';
import HobbiesSection from '../components/portfolio/HobbiesSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter antialiased">
      <div className="animated-grid-bg" />
      <div className="relative z-10">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HobbiesSection />
        <EducationSection />
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