import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllBlogs } from "../lib/mdx";
import SectionHeading from "../components/ui/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Samir Khanal",
  description:
    "Notes on full-stack engineering, LLM apps, and things I learn while building.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <div className="min-h-screen py-14">
      <SectionHeading eyebrow="Writing" title="Blog" />
      <p className="mt-4 max-w-xl text-sm leading-7 text-[hsl(var(--muted-foreground))]">
        Notes on full-stack engineering, LLM apps, and things I learn while
        building.
      </p>

      <div className="mt-8 flex flex-col">
        {posts.length === 0 && (
          <p className="py-8 text-[hsl(var(--muted-foreground))]">
            No posts yet. Check back soon!
          </p>
        )}

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group -mx-4 rounded-2xl border-t border-solid border-[hsl(var(--border))] px-4 py-7 transition-colors duration-200 first:border-t-0 hover:bg-[hsl(var(--muted))]/50"
          >
            <p className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
              {formatDate(post.date)} · {post.readTime}
            </p>
            <div className="mt-2 flex items-start justify-between gap-3">
              <h3 className="font-heading text-xl font-bold text-[hsl(var(--foreground))] transition-colors duration-200 group-hover:text-[hsl(var(--accent))]">
                {post.title}
              </h3>
              <ArrowUpRight className="mt-1 size-5 shrink-0 text-[hsl(var(--muted-foreground))] opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent))] group-hover:opacity-100" />
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              {post.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-solid border-[hsl(var(--border))] px-2.5 py-0.5 text-xs text-[hsl(var(--muted-foreground))]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
