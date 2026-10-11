import Link from "next/link";
import { getAllBlogs } from "../lib/mdx";
import SectionHeading from "./ui/section-heading";
import ViewAll from "./ui/view-all";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function RecentPosts() {
  const all = getAllBlogs();
  const posts = all.slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section>
      <SectionHeading eyebrow="writing" title="Blog" count={all.length} />
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex flex-col gap-1 px-4 py-3 transition-colors duration-150 hover:bg-[hsl(var(--muted))]/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <h3 className="font-medium text-[hsl(var(--foreground))] underline-offset-4 group-hover:underline">
            {post.title}
          </h3>
          <p className="shrink-0 font-mono text-xs text-[hsl(var(--muted-foreground))]">
            {formatDate(post.date)} · {post.readTime}
          </p>
        </Link>
      ))}
      <ViewAll href="/blog" label="All posts" />
    </section>
  );
}
