import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDocker,
  FaReact,
  FaAws,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiHono,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGithubactions,
  SiDigitalocean,
  SiExpress,
  SiOpenai,
  SiAnthropic,
  SiCloudflare,
  SiVercel,
  SiSqlite,
  SiVitest,
  SiJest,
  SiSwagger,
  SiGnubash,
} from "react-icons/si";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
] as const;

export const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/khanal-samir",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/samir-khanal-dev",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    href: "https://x.com/samir__dev",
  },
] as const;

export const techStack = [
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  { name: "React", href: "https://react.dev/", icon: FaReact },
  { name: "Next.js", href: "https://nextjs.org/", icon: SiNextdotjs },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: SiTailwindcss,
  },
  { name: "Express", href: "https://expressjs.com/", icon: SiExpress },
  { name: "NestJS", href: "https://nestjs.com/", icon: SiNestjs },
  { name: "Hono", href: "https://hono.dev/", icon: SiHono },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: SiPostgresql,
  },
  { name: "MongoDB", href: "https://www.mongodb.com/", icon: SiMongodb },
  { name: "Redis", href: "https://redis.io/", icon: SiRedis },
  { name: "SQLite", href: "https://www.sqlite.org/", icon: SiSqlite },
  { name: "Vitest", href: "https://vitest.dev/", icon: SiVitest },
  { name: "Jest", href: "https://jestjs.io/", icon: SiJest },
  { name: "Swagger", href: "https://swagger.io/", icon: SiSwagger },
  { name: "Bash", href: "https://www.gnu.org/software/bash/", icon: SiGnubash },
  { name: "Docker", href: "https://www.docker.com/", icon: FaDocker },
  {
    name: "Github Actions",
    href: "https://github.com/features/actions",
    icon: SiGithubactions,
  },
  { name: "AWS", href: "https://aws.amazon.com/organizations/", icon: FaAws },
  {
    name: "DigitalOcean",
    href: "https://www.digitalocean.com/",
    icon: SiDigitalocean,
  },
  {
    name: "Cloudflare",
    href: "https://www.cloudflare.com/",
    icon: SiCloudflare,
  },
  { name: "Vercel", href: "https://vercel.com/", icon: SiVercel },
  { name: "OpenAI", href: "https://platform.openai.com/", icon: SiOpenai },
  { name: "Claude", href: "https://claude.com/", icon: SiAnthropic },
] as const;

export const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Dohoro Management Pvt. Ltd.",
    duration: "May 2026 – Present",
    type: "Full-time",
    website: "https://www.dohoro.com/",
    description:
      "Contributing to the frontend and backend development of an ERP software system, collaborating with cross-functional teams to deliver reliable, scalable business software.",
    bullets: [
      "Building an ERP software system, working across frontend and backend development.",
      "Developed features with React, Express, RTK Query, and Redux Toolkit for efficient state management and data fetching.",
      "Participated in sprint planning meetings and collaborated with cross-functional teams.",
    ],
    tech: [
      "React",
      "Express",
      "RTK Query",
      "Redux Toolkit",
      "TypeScript",
      "Jest",
      "Jira",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Sync GTM",
    duration: "June 2025 – March 2026",
    type: "Full-time",
    website: "https://syncgtm.com/",
    description:
      "Contributed to the development of scalable full-stack applications, collaborating with cross-functional teams to deliver high-quality software. Focused on building robust backend services and responsive frontend interfaces that handled real-time data and complex business logic.",
    bullets: [
      "Worked on frontend row virtualization and pagination to handle large numbers of rows.",
      "Optimized cell-level operations and data updates using batch processing to minimize transaction overhead.",
      "Integrated multiple business platforms via REST APIs and webhooks.",
      "Built agentic workflows using multiple AI providers to automate business processes.",
    ],
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "NestJS",
      "TypeScript",
      "Socket.io",
      "Redis",
      "OpenAI",
      "Anthropic",
    ],
  },
  {
    role: "Frontend Intern",
    company: "The Occupi",
    duration: "March 2025 – May 2025",
    type: "Part-time",
    website: "https://theoccupi.com/",
    description:
      "Worked on frontend features for a property technology platform, focusing on building polished, interactive user interfaces.",
    bullets: [
      "Designed and implemented interactive dashboard components and modal popups for advertisements, quizzes, and rewards.",
      "Built and refactored React components with clean, reusable patterns.",
      "Collaborated with designers to translate Figma mockups into pixel-perfect implementations.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
] as const;

export const education = {
  degree: "Bachelor of Science in Computer Science & Information Technology",
  school: "Tribhuvan University",
  duration: "Running since 2023",
  description:
    "Pursuing a comprehensive education in computer science, covering core concepts such as algorithms, data structures, software engineering, and database systems. Engaging in projects and coursework that emphasize practical application of programming skills and problem-solving abilities.",
} as const;

export const footerSocials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/khanal-samir",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/samir-khanal-713b68281/",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    href: "https://x.com/samir__dev",
  },
] as const;
