import { profile } from "@/lib/data";
import { FloatingDockClient } from "./FloatingDockClient";

// Static navigation items
const navItems = [
  { title: "Home", href: "#home", icon: "IconHome", isExternal: false },
  { title: "About", href: "#about", icon: "IconUser", isExternal: false },
  {
    title: "Experience",
    href: "#experience",
    icon: "IconBriefcase",
    isExternal: false,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: "IconCode",
    isExternal: false,
  },
  { title: "Skills", href: "#skills", icon: "IconBrain", isExternal: false },
  {
    title: "Education",
    href: "#education",
    icon: "IconSchool",
    isExternal: false,
  },
  {
    title: "Achievements",
    href: "#achievements",
    icon: "IconTrophy",
    isExternal: false,
  },
  {
    title: "Certifications",
    href: "#certifications",
    icon: "IconCertificate",
    isExternal: false,
  },
  { title: "Contact", href: "#contact", icon: "IconMail", isExternal: false },
  ...(profile.socialLinks.github
    ? [
        {
          title: "GitHub",
          href: profile.socialLinks.github,
          icon: "IconBrandGithub",
          isExternal: true,
        },
      ]
    : []),
  ...(profile.socialLinks.linkedin
    ? [
        {
          title: "LinkedIn",
          href: profile.socialLinks.linkedin,
          icon: "IconBrandLinkedin",
          isExternal: true,
        },
      ]
    : []),
  ...(profile.socialLinks.takeuforward
    ? [
        {
          title: "TakeUForward",
          href: profile.socialLinks.takeuforward,
          icon: "IconCode",
          isExternal: true,
        },
      ]
    : []),
];

export async function FloatingDock() {
  return <FloatingDockClient navItems={navItems} />;
}
