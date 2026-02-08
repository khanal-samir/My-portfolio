import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa6";
import html from "@/public/html.png";
import css from "@/public/css.png";
import typescript from "@/public/typescript.png";
import react from "@/public/react.png";
import next from "@/public/next.png";
import tailwind from "@/public/tailwind.png";
import node from "@/public/node.png";
import express from "@/public/express.png";
import mongodb from "@/public/mongo.png";
import javascript from "@/public/javascript.png";
import git from "@/public/git.png";
import postman from "@/public/postman.png";
import prisma from "@/public/prisma.png";
import appwrite from "@/public/svg/appwrite.svg";
import shadcn from "@/public/svg/shadcn-ui.svg";
import linux from "@/public/svg/linux.svg";
import zustand from "@/public/zustand.png";
import redux from "@/public/13142323.png";
import tweet from "@/public/twweeettttttt.png";
import ecom from "@/public/ecccoooommmmmm.png";
import figma from "@/public/svg/figma.svg";
import snipsnap from "@/public/snipsnap.png";
import tanstack from "@/public/svg/tanstack.svg";
import docker from "@/public/docker.svg";
import nestjs from "@/public/nestjs.svg";
import github from "@/public/github.png";
export const links = [
  {
    hash: "#home",
    label: "Home",
  },
  {
    hash: "#about",
    label: "About",
  },
  {
    hash: "#skills",
    label: "Skills",
  },
  {
    hash: "#projects",
    label: "Projects",
  },
  {
    hash: "#experience",
    label: "Experience",
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
    name: "Twitter",
    icon: FaTwitter,
    href: "https://x.com/SamirKh56782671",
  },
] as const;

export const skills = [
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Tailwind",
    image: tailwind,
  },
  {
    name: "Next.js",
    image: next,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "Zustand",
    image: zustand,
  },
  {
    name: "TanStack Query",
    image: tanstack,
  },
  {
    name: "Node.js",
    image: node,
  },
  {
    name: "Express.js",
    image: express,
  },

  {
    name: "Prisma",
    image: prisma,
  },
  {
    name: "Docker",
    image: docker,
  },
  {
    name: "NestJS",
    image: nestjs,
  },
  {
    name: "GitHub Actions",
    image: github,
  },
  {
    name: "MongoDB",
    image: mongodb,
  },

  {
    name: "Postman",
    image: postman,
  },

  {
    name: "Appwrite",
    image: appwrite,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "Figma",
    image: figma,
  },
  {
    name: "Linux",
    image: linux,
  },
] as const;

export const projects = [
  {
    name: "SnipSnap",
    description:
      "Code snippet sharing platform with syntax highlighting and real-time collaboration.",
    features: [
      "Secure authentication",
      "Syntax highlighting",
      "Dark/light mode",
      "Search & filters",
      "Real-time collaboration",
    ],
    tech: [
      { src: typescript, alt: "TypeScript" },
      { src: next, alt: "Next.js" },
      { src: react, alt: "React" },
      { src: tailwind, alt: "Tailwind" },
      { src: prisma, alt: "Prisma" },
      { src: tanstack, alt: "TanStack" },
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
      "Real-time updates",
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
    link: "https://social-media-ochre-delta.vercel.app/",
    code: "https://github.com/khanal-samir/Social-Media",
  },
  {
    name: "E-Commerce Store",
    description:
      "Full-featured clothing store with cart management and secure checkout.",
    features: [
      "Product catalog",
      "Shopping cart",
      "Checkout flow",
      "Theme switching",
      "Auth with Appwrite",
    ],
    tech: [
      { src: javascript, alt: "JavaScript" },
      { src: react, alt: "React" },
      { src: tailwind, alt: "Tailwind" },
      { src: redux, alt: "Redux" },
      { src: appwrite, alt: "Appwrite" },
    ],
    link: "https://eccomerce-react-shadcn.vercel.app/",
    code: "https://github.com/khanal-samir/Eccomerce-React-Shadcn",
  },
];

export const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Sync GTM",
    duration: "June 2025 - Present",
    location: "Remote",
    type: "Full-time",
    description:
      "Developed and maintained web applications using Next.js, TypeScript, and Node.js. Collaborated with cross-functional teams to deliver features, troubleshoot issues, and optimize application performance.",
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
    name: "Twitter",
    icon: FaTwitter,
    href: "https://x.com/SamirKh56782671",
  },
] as const;
