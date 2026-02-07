import Header from "./ui/header";
import profilePic from "@/public/profile-pic.jpg";
import Image from "next/image";
import Link from "next/link";
import IconCard from "./ui/icon-card";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section id="about" ref={ref} className="scroll-mt-24">
      <Header>About Me</Header>
      <div className="grid  grid-cols-1 gap-12 mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg"
        >
          Hello! My name is Samir and I love designing and building applications
          that solve real-world problems, which can be seen through my{" "}
          <Link
            href="/#projects"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            projects{" "}
          </Link>
          and{" "}
          <Link
            href="/#experience"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            {" "}
            work experience.
            <br />
            <br />
          </Link>
          I&apos;m a web developer specializing in{" "}
          <strong>
            JavaScript, TypeScript, and full-stack web development{" "}
          </strong>
          , with a strong passion for building scalable, real-world
          applications. I&apos;m currently deepening my expertise in modern
          frameworks like <strong>Next.js</strong>, while working hands-on with
          technologies such as{" "}
          <strong>React, Express.js, MongoDB, Prisma, and PostgreSQL</strong>.
          Over time, I&apos;ve developed a solid understanding of both frontend
          and backend systems, using tools like
          <strong> Zustand, Redux, Appwrite, and Tailwind CSS </strong>to
          deliver responsive, high-quality solutions. I&apos;m committed to
          writing clean, maintainable code and approaching every project with a
          problem-solving mindset. Outside of just coding, I care about building
          products that genuinely make a difference, staying up-to-date with new
          tech, and collaborating with teams that push me to grow.
          <br />
          <br />
          Currently, I am pursuing <strong>
            Junior Roles opportunities
          </strong>{" "}
          to gain additional practical experience and collaborate with other
          like-minded engineers.
        </motion.p>
      </div>
    </section>
  );
}
