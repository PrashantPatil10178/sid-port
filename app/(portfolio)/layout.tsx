import type { Metadata } from "next";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/DarkModeToggle";
import { FloatingDock } from "@/components/FloatingDock";
import SidebarToggle from "@/components/SidebarToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Siddhi Uttekar | Full-Stack Developer & GenAI Engineer",
  description:
    "Final-year IT undergraduate at AISSMS IOIT, Pune, specializing in full-stack development and Generative AI. Builder of RAG pipelines and AI-powered applications with React, Next.js, FastAPI, and LangChain. IEEE-published researcher.",
  keywords: [
    "Siddhi Uttekar",
    "Full-Stack Developer",
    "GenAI Engineer",
    "RAG",
    "LangChain",
    "React",
    "Next.js",
    "Pune",
  ],
  openGraph: {
    title: "Siddhi Uttekar | Full-Stack Developer & GenAI Engineer",
    description:
      "Full-stack developer specializing in Generative AI — RAG pipelines, AI assistants, and production web apps.",
    type: "website",
  },
};

export default async function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider defaultOpen={false}>
        <SidebarInset className="">{children}</SidebarInset>

        <AppSidebar side="right" />

        <FloatingDock />
        <SidebarToggle />

        {/* Mode Toggle - Desktop: bottom right next to AI chat, Mobile: top right next to burger menu */}
        <div className="fixed md:bottom-6 md:right-24 top-4 right-18 md:top-auto md:left-auto z-20">
          <div className="w-10 h-10 md:w-12 md:h-12">
            <ModeToggle />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
