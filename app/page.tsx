import Hero from "./components/hero";
import TechStack from "./components/tech-stack";
import RecentProjects from "./components/recent-projects";
import RecentPosts from "./components/recent-posts";
import Experience from "./components/experience";
import Education from "./components/education";

const Stripe = () => <div aria-hidden className="stripe line-b" />;

export default function Home() {
  return (
    // Bleed past main's padding so rows and lines meet the column borders
    <div className="-mx-4">
      <Hero />
      <Stripe />
      <TechStack />
      <Stripe />
      <Experience />
      <Stripe />
      <RecentProjects />
      <Stripe />
      <RecentPosts />
      <Stripe />
      <Education />
      <div aria-hidden className="stripe" />
    </div>
  );
}
