import { google } from "@ai-sdk/google";
import { streamText, convertToCoreMessages } from "ai";
import { profile, skills, education } from "@/lib/data";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Check for required environment variables
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          "Google Gemini not configured. Please set GOOGLE_GENERATIVE_AI_API_KEY in your .env.local file.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
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
  .slice(0, 10)
  .map(
    (skill) => `- ${skill.name}: ${skill.proficiency} (${skill.percentage}%)`
  )
  .join("\n")}

Education:
${education
  .map(
    (edu) => `
- ${edu.degree} in ${edu.fieldOfStudy} from ${edu.institution}
  ${edu.gpa ? `GPA: ${edu.gpa}` : ""}
  ${edu.description}
`
  )
  .join("\n")}

You should answer questions about ${
    profile.firstName
  }'s skills, education, certifications, and availability. 
Be conversational, professional, and helpful. If asked about something not in the portfolio, politely say you don't have that information but suggest checking the website or contacting directly.`;

  // Use Gemini 1.5 Flash (fast and efficient) or gemini-1.5-pro for better quality
  const modelName = process.env.GOOGLE_MODEL_NAME || "gemini-1.5-flash";

  const result = await streamText({
    model: google(modelName) as any,
    system: context,
    messages: coreMessages,
  });

  return (result as any).toUIMessageStreamResponse();
}
