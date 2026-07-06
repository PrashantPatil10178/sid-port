import {
  AboutSection,
  AchievementsSection,
  CertificationsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default PortfolioContent;
