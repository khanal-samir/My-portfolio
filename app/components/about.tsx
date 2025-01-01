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
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg text-center"
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
            work experience
          </Link>
          .
          <br />
          <br />
          I&apos;m a computer science student with a strong passion for web
          development, dedicated to building innovative projects focused on
          JavaScript architecture. I am committed to enhancing my skills to
          create high-quality, scalable web applications.
          <br />
          <br />
          Currently, I am pursuing internship opportunities to gain additional
          practical experience and collaborate with other like-minded engineers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="justify-center items-center p-4 lg:flex hidden"
        >
          <Image
            src={profilePic}
            alt="Alex Ross"
            className="rounded-xl shadow-xl shadow-slate-900 lg:h-72 h-56 w-auto brightness-90"
          />
        </motion.div>
      </div>
    </section>
  );
}
