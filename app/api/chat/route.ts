import { createAzure } from "@ai-sdk/azure";
import { google } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";
import {
  achievements,
  certifications,
  education,
  experiences,
  profile,
  projects,
  skills,
} from "@/lib/data";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

function resolveModel() {
  const azureApiKey = process.env.AZURE_OPENAI_API_KEY;
  const azureEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const azureDeployment = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;

  if (azureApiKey && azureEndpoint && azureDeployment) {
    const resourceName = new URL(azureEndpoint).hostname.split(".")[0];
    const azure = createAzure({ apiKey: azureApiKey, resourceName });
    return azure.chat(azureDeployment);
  }

  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    const modelName = process.env.GOOGLE_MODEL_NAME || "gemini-1.5-flash";
    return google(modelName);
  }

  return null;
}

export async function POST(req: Request) {
  const model = resolveModel();

  if (!model) {
    return new Response(
      JSON.stringify({
        error:
          "No AI provider configured. Set AZURE_OPENAI_API_KEY + AZURE_OPENAI_ENDPOINT + AZURE_OPENAI_DEPLOYMENT_NAME, or GOOGLE_GENERATIVE_AI_API_KEY, in your .env file.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const { messages } = await req.json();

  // Convert UI messages to core messages format
  const coreMessages = convertToCoreMessages(messages);
  const contactLines = [
    profile.email ? `- Email: ${profile.email}` : null,
    profile.phone ? `- Phone: ${profile.phone}` : null,
    profile.location ? `- Location: ${profile.location}` : null,
    profile.availability ? `- Availability: ${profile.availability}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const socialLinks = Object.entries(profile.socialLinks)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `- ${key}: ${value}`)
    .join("\n");

  // Create context about the portfolio
  const context = `You are an AI assistant representing ${profile.firstName} ${
    profile.lastName
  }, a ${profile.headline}.

Bio: ${profile.shortBio}

Full Bio: ${profile.fullBio}

Contact:
${contactLines}

Social Links:
${socialLinks || "Not provided"}

Stats:
${profile.stats.map((stat) => `- ${stat.label}: ${stat.value}`).join("\n")}

Key Skills:
${skills
  .map(
    (skill) =>
      `- ${skill.name} (${skill.category}): ${skill.proficiency} (${skill.percentage}%)`,
  )
  .join("\n")}

Work Experience:
${experiences
  .map(
    (exp) => `
- ${exp.position} at ${exp.company} (${exp.startDate} to ${
      exp.current ? "Present" : exp.endDate
    })
  ${exp.description}
  Highlights: ${exp.achievements.join("; ")}
  Technologies: ${exp.technologies.join(", ")}
`,
  )
  .join("\n")}

Projects:
${projects
  .map(
    (proj) => `
- ${proj.title}: ${proj.tagline}
  Technologies: ${proj.technologies.join(", ")}
`,
  )
  .join("\n")}

Achievements:
${achievements
  .map((ach) => `- ${ach.title} (${ach.issuer}): ${ach.description}`)
  .join("\n")}

Certifications:
${certifications
  .map((cert) => `- ${cert.name} (${cert.issuer}): ${cert.description}`)
  .join("\n")}

Education:
${education
  .map(
    (edu) => `
- ${edu.degree} in ${edu.fieldOfStudy} from ${edu.institution}
  ${edu.gpa ? `GPA: ${edu.gpa}` : ""}
  ${edu.description}
  ${edu.achievements.join("; ")}
`,
  )
  .join("\n")}

A downloadable resume is available at /Siddhi_Uttekar_1.pdf on this site.

You are ${
    profile.firstName
  }'s "AI twin" embedded in her portfolio — speak in first person as if you were her, drawing only on the facts above (skills, experience, projects, education, achievements, certifications, availability). Be conversational, confident, and helpful, matching the tone of someone early in their career but genuinely skilled in full-stack development and Generative AI.
If asked about something not covered above, be honest that you don't have that detail and suggest checking the resume download or using the contact form instead of guessing or inventing specifics.

Format every response as Markdown so it renders cleanly in the chat UI:
- Use short paragraphs (1-3 sentences) instead of long blocks.
- Use "**bold**" for key terms, technologies, and headline claims.
- Use "-" bullet lists when listing skills, projects, or responsibilities — don't run them together in prose.
- Use "##" or "###" headings only for longer, multi-section answers (e.g. a full breakdown of experience); skip headings for short answers.
- Never output raw line breaks as a substitute for actual list/heading syntax.`;

  const result = await streamText({
    model: model as any,
    system: context,
    messages: coreMessages,
  });

  return (result as any).toUIMessageStreamResponse();
}
