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
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
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
    name: "Snip-Snap",
    image: snipsnap,
    description:
      "A modern code snippet sharing platform built with Next.js, TypeScript, and Prisma. Features include secure authentication, code snippet management with syntax highlighting, modern UI/UX with dark/light mode, search and organization capabilities, and collaboration features. The platform uses Next.js 15, React 18, TypeScript, Tailwind CSS, Radix UI Components, Monaco Editor, TanStack Query, Prisma ORM, NextAuth.js, and PostgreSQL.",
    tech: [
      {
        src: typescript,
        alt: "typescript",
      },
      {
        src: react,
        alt: "react",
      },
      {
        src: next,
        alt: "next",
      },
      {
        src: tailwind,
        alt: "tailwind",
      },
      {
        src: prisma,
        alt: "prisma",
      },
      {
        src: tanstack,
        alt: "tanstack",
      },
    ],
    link: "https://snip-snap-two.vercel.app/",
    code: "https://github.com/khanal-samir/snip-snap",
  },
  {
    name: "Social Media Application",
    image: tweet,
    description:
      "A social media application made using MERN stack with responsive UI and many features likeI developed a social media application inspired by Twitter, enabling users to create and share posts, upload and display photos, and engage with others through likes and comments, fostering dynamic interaction. The platform features secure login and registration using JWT authentication, ensuring robust user data protection. Designed with a responsive layout, it delivers an intuitive and engaging user experience across all devices, making it easy for users to connect and share their moments.",
    tech: [
      {
        src: javascript,
        alt: "javascript",
      },

      {
        src: react,
        alt: "Reacr",
      },
      {
        src: tailwind,
        alt: "tailwind",
      },
      {
        src: shadcn,
        alt: "shadcn",
      },
      {
        src: redux,
        alt: "redux",
      },
      {
        src: express,
        alt: "Express",
      },
      {
        src: mongodb,
        alt: "mongodb",
      },
    ],
    link: "https://social-media-ochre-delta.vercel.app/",
    code: "https://github.com/khanal-samir/Social-Media",
  },

  {
    name: "Clothing Eccomerce",
    image: ecom,
    description:
      "In this project, I created a fully functional e-commerce site with a range of standout features. Users can seamlessly list and manage products, enjoy an intuitive shopping experience with a simple Add to Cart function, and switch effortlessly between light and dark modes for added comfort. The site incorporates secure authentication for easy login via Appwrite, and real-time updates ensure that everything stays synchronized. This project provided a fantastic opportunity to utilize modern web technologies, resulting in a responsive and user-friendly e-commerce platform that I'm incredibly pleased with.",
    tech: [
      {
        src: javascript,
        alt: "javascript",
      },
      {
        src: react,
        alt: "React",
      },
      {
        src: tailwind,
        alt: "tailwind",
      },
      {
        src: shadcn,
        alt: "shadcn",
      },
      {
        src: redux,
        alt: "redux",
      },
      {
        src: appwrite,
        alt: "appwrite",
      },
    ],
    link: "https://eccomerce-react-shadcn.vercel.app/",
    code: "https://github.com/khanal-samir/Eccomerce-React-Shadcn",
  },
];

export const experiences = [
  {
    title: "Sagarmatha Secondary School",
    subtitle: "High School",
    dates: "2020-2022",
    description:
      "Completed my highschool or SLC from Sagarmatha Secondary School located at Nayabazar,Pokhara,Nepal.",
  },
  {
    title:
      "Bachelor of Science in Computer Science and Information Technology ",
    subtitle: "Tribhuvan University",
    dates: "2023-Running",
    description:
      "Currently pursuing my Bachelors degree in Prithivi Narayan Campus located at Bagar,Pokhara,Nepal.",
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
