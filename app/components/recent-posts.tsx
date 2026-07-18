import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllBlogs } from "../lib/mdx";
import SectionHeading from "./ui/section-heading";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function RecentPosts() {
  const posts = getAllBlogs().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-solid border-[hsl(var(--border))] py-14">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="Writing" title="Recent Posts" />
        <Link
          href="/blog"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:text-[hsl(var(--accent))] sm:inline-flex"
        >
          View all
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="mt-6 flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group -mx-4 flex flex-col gap-1 rounded-2xl border-t border-solid border-[hsl(var(--border))] px-4 py-5 transition-colors duration-200 first:border-t-0 hover:bg-[hsl(var(--muted))]/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <h3 className="font-heading text-base font-bold text-[hsl(var(--foreground))] transition-colors duration-200 group-hover:text-[hsl(var(--accent))]">
              {post.title}
            </h3>
            <p className="shrink-0 font-mono text-xs text-[hsl(var(--muted-foreground))]">
              {formatDate(post.date)} · {post.readTime}
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/blog"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:text-[hsl(var(--accent))] sm:hidden"
      >
        View all posts
        <ArrowUpRight className="size-4" />
      </Link>
    </section>
  );
}
