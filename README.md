# 🚀 Next-Gen AI Portfolio

> A modern, AI-powered portfolio website with an intelligent chatbot that represents you 24/7. Built with Next.js 16, Google Gemini AI, and cutting-edge web technologies.

**Made by:** Siddhi Uttekar

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4)](https://ai.google.dev/)

## ✨ Features

### 🤖 AI-Powered Chat

- **Smart Assistant**: Intelligent chatbot powered by Google Gemini AI that knows everything about you
- **Real-time Streaming**: Smooth, natural conversation flow with streaming responses
- **Context-Aware**: Your AI twin understands your experience, skills, projects, and achievements
- **Beautiful UI**: Animated chat interface with smooth transitions and typing indicators
- **Markdown Support**: Rich text formatting in responses for better readability

### 🎨 Modern Design

- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Layout**: Perfect on all devices - mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Floating Dock Navigation**: macOS-style navigation for smooth section scrolling
- **Gradient Effects**: Beautiful background animations and modern UI elements

### 📋 Portfolio Sections

- **Hero Section**: Stunning introduction with animated text and profile image
- **About**: Comprehensive bio and professional introduction
- **Experience**: Work history with achievements and technologies
- **Education**: Academic background and qualifications
- **Projects**: Showcase your best work with live demos and GitHub links
- **Certifications**: Professional certifications and credentials
- **Achievements**: Awards, recognitions, and milestones
- **Contact Form**: Functional contact form with validation

### ⚡ Technical Highlights

- **Next.js 16** with App Router and React 19
- **Turbopack** for blazing-fast development builds
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS v4** for modern, utility-first styling
- **Google Gemini API** for AI-powered conversations
- **Framer Motion** for smooth animations
- **Recharts** for beautiful data visualizations
- **Server Components** for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Google AI API key ([Get one here](https://aistudio.google.com/apikey))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/PrashantPatil10178/sid-port.git
cd sid-port
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Google Gemini API Key for AI chat functionality
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here

# Optional: Choose a different model (default: gemini-flash-latest)
# Options: gemini-1.5-flash, gemini-1.5-pro, gemini-2.0-flash-exp
GOOGLE_MODEL_NAME=gemini-flash-latest
```

4. **Customize your data**

Edit `lib/data.tsx` to add your own:

- Personal information
- Work experience
- Education history
- Projects
- Skills
- Achievements
- Certifications

5. **Add your profile image**

Place your image as `public/hero-image.jpg` (or update the path in `lib/data.tsx`)

6. **Run the development server**

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (portfolio)/       # Portfolio routes
│   ├── actions/           # Server actions
│   └── api/               # API routes
├── components/            # React components
│   ├── chat/             # AI chat components
│   ├── sections/         # Portfolio sections
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions
│   ├── data.tsx          # Portfolio data (EDIT THIS!)
│   ├── config.ts         # App configuration
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── prompts/              # AI prompts configuration
```

## 🎨 Customization

### Update Personal Information

Edit `lib/data.tsx` to customize all portfolio content:

- Profile information
- Skills and expertise
- Work experience
- Education
- Projects
- Achievements
- Contact details

### Change AI Personality

Modify the prompts in `prompts/` directory to adjust how your AI twin responds.

### Customize Styling

- Edit `app/globals.css` for global styles
- Modify Tailwind config in `tailwind.config.ts`
- Update component styles in respective files

### Add/Remove Sections

Edit `components/PortfolioContent.tsx` to add or remove sections as needed.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PrashantPatil10178/sid-port)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render
- Cloudflare Pages

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Google Gemini AI](https://ai.google.dev/) - AI chatbot
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Recharts](https://recharts.org/) - Data visualization
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- [Tabler Icons](https://tabler-icons.io/) - Icon library

## 📝 License

This project is licensed under the MIT License - feel free to use it for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Siddhi Uttekar**

## ⭐ Show Your Support

If you find this project helpful, please give it a star on GitHub!

---

Built with ❤️ by Siddhi Uttekar---
