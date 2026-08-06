import { skills } from "@/lib/data";

const skillGroups = [
  {
    title: "Core Engineering",
    subtitle: "Languages and fundamentals",
    accent: "from-cyan-500/20 to-blue-500/10",
    skills: [
      { name: "Java", icon: "☕", evidence: "Built backend logic and problem-solving workflows" },
      { name: "Python", icon: "🐍", evidence: "Used for analytics, automation, and ML experiments" },
      { name: "SQL", icon: "🗄", evidence: "Wrote CTEs, joins, and window functions" },
      { name: "JavaScript", icon: "⚡", evidence: "Used across frontend and full-stack products" },
      { name: "HTML", icon: "🧱", evidence: "Structured accessible UI components" },
      { name: "CSS", icon: "🎨", evidence: "Styled polished interfaces and responsive layouts" },
    ],
  },
  {
    title: "AI / GenAI",
    subtitle: "Applied generative AI systems",
    accent: "from-violet-500/20 to-fuchsia-500/10",
    skills: [
      { name: "RAG", icon: "🧠", evidence: "Powering repository-aware AI assistance" },
      { name: "LangChain", icon: "⛓", evidence: "Used to orchestrate LLM workflows" },
      { name: "FAISS", icon: "🔎", evidence: "Enabled efficient semantic retrieval" },
      { name: "Prompt Engineering", icon: "💬", evidence: "Improved response quality and reliability" },
      { name: "OCR", icon: "📷", evidence: "Used in image-based food safety analysis" },
    ],
  },
  {
    title: "Full Stack",
    subtitle: "End-to-end product development",
    accent: "from-emerald-500/20 to-green-500/10",
    skills: [
      { name: "React", icon: "⚛", evidence: "Built interactive user interfaces" },
      { name: "Next.js", icon: "▲", evidence: "Delivered modern full-stack web apps" },
      { name: "Node.js", icon: "🟢", evidence: "Developed backend services and APIs" },
      { name: "FastAPI", icon: "⚙", evidence: "Created performant API endpoints" },
      { name: "Tailwind CSS", icon: "🌊", evidence: "Designed responsive UI systems" },
      { name: "JWT", icon: "🔐", evidence: "Secured user authentication flows" },
    ],
  },
  {
    title: "Data & Cloud",
    subtitle: "Analytics, storage, and deployment",
    accent: "from-amber-500/20 to-orange-500/10",
    skills: [
      { name: "PostgreSQL", icon: "🐘", evidence: "Processed 6.4M+ retail records" },
      { name: "Pandas", icon: "📊", evidence: "Handled data cleaning and transformation" },
      { name: "Power BI", icon: "📈", evidence: "Built dashboards for business insights" },
      { name: "AWS", icon: "☁", evidence: "Worked with cloud-hosted services" },
      { name: "Docker", icon: "🐳", evidence: "Containerized applications and workflows" },
      { name: "Git/GitHub", icon: "🧰", evidence: "Managed version control and collaboration" },
    ],
  },
];

export async function SkillsSection() {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Technical Toolkit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I&apos;ve used across AI, full-stack, data, and cloud to turn ideas into working products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${group.accent} opacity-80`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_40%)]" />
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="text-sm text-muted-foreground">{group.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill relative overflow-hidden rounded-full border border-border/70 bg-background/70 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:border-primary/40 hover:bg-background"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base transition-transform duration-200 group-hover/skill:rotate-6">
                          {skill.icon}
                        </span>
                        <span>{skill.name}</span>
                      </div>

                      <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-200 group-hover/skill:opacity-100" />
                      <div className="pointer-events-none absolute left-0 top-full mt-2 w-56 rounded-xl border border-border/70 bg-background/95 p-3 text-xs text-muted-foreground shadow-lg opacity-0 transition-all duration-200 group-hover/skill:translate-y-0 group-hover/skill:opacity-100">
                        <p className="font-semibold text-foreground">{skill.name}</p>
                        <p className="mt-1">{skill.evidence}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
