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
import zod from "@/public/svg/zod.svg";
import shadcn from "@/public/svg/shadcn-ui.svg";
import linux from "@/public/svg/linux.svg";
import clerk from "@/public/svg/clerk-light.svg";
import zustand from "@/public/zustand.png";
import redux from "@/public/13142323.png";
import tweet from "@/public/twweeettttttt.png";
import mystryMsg from "@/public/myyyyyyyssss.png";
import msg from "@/public/smmmmmmmm.png";
import ecom from "@/public/ecccoooommmmmm.png";
import bookmark from "@/public/Bookmark.png";
import figma from "@/public/svg/figma.svg";
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
    name: "Shadcn",
    image: shadcn,
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
    name: "Node.js",
    image: node,
  },
  {
    name: "Express.js",
    image: express,
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
    name: "Clerk",
    image: clerk,
  },
  {
    name: "Zod",
    image: zod,
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
  {
    name: "The Bookmark",
    image: bookmark,
    description:
      "BookmarkHub is a modern full-stack bookmark management application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js framework. The app features secure user authentication through NextAuth.js, allowing users to safely manage and organize their bookmarks with custom categories and tags. Leveraging Zustand for efficient state management, the application provides a seamless, responsive user experience while maintaining clean data flow between the client and server. The combination of Next.js for optimized performance and MongoDB for flexible data storage ensures reliable bookmark persistence and quick access. This project demonstrates proficiency in modern web development practices, combining powerful technologies to create a practical solution for web bookmark organization.",

    tech: [
      {
        src: typescript,
        alt: "javascript",
      },
      {
        src: next,
        alt: "next",
      },
      {
        src: react,
        alt: "React",
      },
      {
        src: zustand,
        alt: "Zustand",
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
        src: express,
        alt: "Express",
      },
      {
        src: mongodb,
        alt: "mongodb",
      },
      {
        src: zod,
        alt: "zod",
      },
    ],
    link: "https://bookmark-nine-sigma.vercel.app/",
    code: "https://github.com/khanal-samir/Bookmark",
  },
  {
    name: "Mystery Message",
    image: mystryMsg,
    description:
      "I developed an innovative anonymous messaging application where users can connect and send messages without revealing their identity. The platform integrates Next.js with TypeScript for a robust frontend, MongoDB for secure data storage, and NextAuth for seamless user authentication. Leveraging Zod for precise input validation and ShadCN UI for an elegant design, the app delivers an engaging and intuitive user experience. It also includes real-time updates, ensuring a dynamic and responsive messaging system",
    tech: [
      {
        src: typescript,
        alt: "javascript",
      },
      {
        src: next,
        alt: "next",
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
        src: express,
        alt: "Express",
      },
      {
        src: mongodb,
        alt: "mongodb",
      },
      {
        src: zod,
        alt: "zod",
      },
    ],
    link: "https://mystery-message-gamma.vercel.app/",
    code: "https://github.com/khanal-samir/Mystery-Message",
  },
  {
    name: "Samchat",
    image: msg,
    description:
      "I developed a chat application featuring real-time messaging through Appwrite, ensuring instant updates and seamless conversations. Users can easily upload and share photos within the chat, enhancing their interaction. The application incorporates secure login and registration using Appwrite's authentication services, safeguarding user data. Additionally, it boasts a responsive design, providing an optimal user experience across various devices.",
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
        src: redux,
        alt: "redux",
      },
      {
        src: appwrite,
        alt: "appwrite",
      },
    ],
    link: "https://samchat-react.vercel.app/",
    code: "https://github.com/khanal-samir/ChatApp",
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
    dates: "2024-Running",
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
