import {
  AboutSection,
  CertificationsSection,
  ContactSection,
  EducationSection,
  HeroSection,
} from "@/components/sections";

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}

export default PortfolioContent;
