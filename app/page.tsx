import Hero from "./components/hero";
import TechStack from "./components/tech-stack";
import RecentProjects from "./components/recent-projects";
import RecentPosts from "./components/recent-posts";
import Experience from "./components/experience";
import Education from "./components/education";
import Stripe from "./components/ui/stripe";

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
      <Stripe />
    </div>
  );
}
