import { FloatingDockClient } from "./FloatingDockClient";
import { profile } from "@/lib/data";

// Static navigation items
const navItems = [
  { title: "Home", href: "#hero", icon: "IconHome", isExternal: false },
  { title: "About", href: "#about", icon: "IconUser", isExternal: false },
  { title: "Skills", href: "#skills", icon: "IconBrain", isExternal: false },
  {
    title: "Education",
    href: "#education",
    icon: "IconSchool",
    isExternal: false,
  },
  {
    title: "Certifications",
    href: "#certifications",
    icon: "IconCertificate",
    isExternal: false,
  },
  {
    title: "Testimonials",
    href: "#testimonials",
    icon: "IconQuote",
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
];

export async function FloatingDock() {
  return <FloatingDockClient navItems={navItems} />;
}
