import Hero from "./components/hero";
import TechStack from "./components/tech-stack";
import RecentProjects from "./components/recent-projects";
import RecentPosts from "./components/recent-posts";
import Experience from "./components/experience";
import Education from "./components/education";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Experience />
      <RecentProjects />
      <RecentPosts />
      <Education />
    </>
  );
}
