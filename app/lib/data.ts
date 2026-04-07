import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import typescript from "@/public/typescript.png";
import react from "@/public/react.png";
import next from "@/public/next.png";
import tailwind from "@/public/tailwind.png";
import express from "@/public/express.png";
import mongodb from "@/public/mongo.png";
import javascript from "@/public/javascript.png";
import postgres from "@/public/svg/postgres.svg";
import prisma from "@/public/prisma.png";
import zustand from "@/public/zustand.png";
import redux from "@/public/13142323.png";
import figma from "@/public/svg/figma.svg";
import tanstack from "@/public/svg/tanstack.svg";
import docker from "@/public/docker.svg";
import nestjs from "@/public/nestjs.svg";
import github from "@/public/github.png";
import socketio from "@/public/svg/socketio.svg";
import redis from "@/public/svg/redis.svg";
import hono from "@/public/svg/hono.svg";
import drizzle from "@/public/svg/drizzle.svg";
import aws from "@/public/svg/aws.svg";
import digitalocean from "@/public/svg/digitalocean.svg";
import cloudflare from "@/public/svg/cloudflare.svg";

export const links = [
  {
    hash: "#home",
    label: "Home",
  },
  {
    hash: "#skills",
    label: "Skills",
  },
  {
    hash: "#experience",
    label: "Experience",
  },
  {
    hash: "#projects",
    label: "Projects",
  },
  {
    hash: "#contact",
    label: "Contact",
  },
] as const;

export const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/samir-khanal-713b68281/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/khanal-samir",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com/SamirKh56782671",
  },
] as const;

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "TypeScript", image: typescript },
      { name: "JavaScript", image: javascript },
      { name: "React", image: react },
      { name: "Next.js", image: next },
      { name: "Tailwind", image: tailwind },
      { name: "Figma", image: figma },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "NestJS", image: nestjs },
      { name: "Express", image: express },
      { name: "Hono", image: hono },
      { name: "PostgreSQL", image: postgres },
      { name: "MongoDB", image: mongodb },
      { name: "Redis", image: redis },
      { name: "Socket.io", image: socketio },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", image: docker },
      { name: "GitHub Actions", image: github },
      { name: "AWS", image: aws },
      { name: "DigitalOcean", image: digitalocean },
      { name: "Cloudflare", image: cloudflare },
    ],
  },
] as const;

export const projects = [
  {
    name: "SMS — Student Management Software",
    description:
      "Production-grade event-driven monorepo platform for managing students, assignments, announcements, and real-time communication at scale.",
    features: [
      "Refresh/access token recycling",
      "Role-based access control",
      "Cron jobs for announcements",
      "Real-time chat with Socket.io",
      "Redis queues for email processing",
      "S3 for document & image storage",
      "Kanban board for assignments",
      "Admin dashboard",
      "Deployed on AWS ECS with CI/CD",
    ],
    tech: [
      { src: nestjs, alt: "NestJS" },
      { src: next, alt: "Next.js" },
      { src: zustand, alt: "Zustand" },
      { src: socketio, alt: "Socket.io" },
      { src: prisma, alt: "Prisma" },
      { src: tanstack, alt: "TanStack Query" },
      { src: redis, alt: "Redis" },
      { src: aws, alt: "S3 bucket" },
      { src: docker, alt: "Docker" },
      { src: github, alt: "GitHub Actions" },
    ],
    link: "https://sms-web.samir.software/",
    code: "https://github.com/khanal-samir/sms",
  },
  // {
  //   name: "Verio — CRM",
  //   description:
  //     "CRM platform with organization-level authentication, permissions, people & deals management, and AI-powered sequences (in progress).",
  //   features: [
  //     "Auth with organization support",
  //     "Granular permission system",
  //     "People, contacts & deals",
  //     "Email sequence automation",
  //     "RAG vector DB chat (in progress)",
  //   ],
  //   tech: [
  //     { src: hono, alt: "Hono" },
  //     { src: next, alt: "Next.js" },
  //     { src: drizzle, alt: "Drizzle" },
  //   ],
  //   link: null,
  //   code: "https://github.com/khanal-samir/verio",
  // },
  {
    name: "SnipSnap",
    description:
      "Code snippet sharing platform with syntax highlighting and infinite scrolling.",
    features: [
      "Secure authentication",
      "Syntax highlighting",
      "Dark/light mode",
      "Search & filters",
      "Infinite scrolling",
    ],
    tech: [
      { src: typescript, alt: "TypeScript" },
      { src: next, alt: "Next.js" },
      { src: react, alt: "React" },
      { src: tailwind, alt: "Tailwind" },
      { src: prisma, alt: "Prisma" },
      { src: tanstack, alt: "TanStack Query" },
    ],
    link: "https://snip-snap-two.vercel.app/",
    code: "https://github.com/khanal-samir/snip-snap",
  },
  {
    name: "Social Media App",
    description:
      "Twitter-like platform for creating posts, sharing photos, and social engagement.",
    features: [
      "JWT authentication",
      "Photo uploads",
      "Likes & comments",
      "MongoDB Aggregation Pipeline",
      "Responsive design",
    ],
    tech: [
      { src: javascript, alt: "JavaScript" },
      { src: react, alt: "React" },
      { src: tailwind, alt: "Tailwind" },
      { src: redux, alt: "Redux" },
      { src: express, alt: "Express" },
      { src: mongodb, alt: "MongoDB" },
    ],
    link: "https://social-media-ochre-delta.vercel.app/login",
    code: "https://github.com/khanal-samir/Social-Media",
  },
];

export const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Sync GTM",
    duration: "June 2025 - February 2026",
    location: "Remote",
    type: "Full-time",
    website: "https://syncgtm.com/",
  },
  {
    role: "Frontend Developer Intern",
    company: "The Occupi",
    duration: "March 2025 - April 2025",
    location: "Remote",
    type: "Part-time",
    website: "https://theoccupi.com/",
  },
];

export const footerLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/samir-khanal-713b68281/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/khanal-samir",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com/SamirKh56782671",
  },
] as const;
