import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllBlogs } from "../lib/mdx";
import SectionHeading from "../components/ui/section-heading";
import Stripe from "../components/ui/stripe";
import Tag from "../components/ui/tag";
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
    <div className="-mx-4">
      <SectionHeading eyebrow="writing" title="Blog" count={posts.length} />
      <p className="line-b px-4 pb-5 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
        Notes on full-stack engineering, LLM apps, and things I learn while
        building.
      </p>

      <div className="py-2">
        {posts.length === 0 && (
          <p className="px-4 py-8 text-sm text-[hsl(var(--muted-foreground))]">
            No posts yet. Check back soon!
          </p>
        )}

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block px-4 py-4 transition-colors duration-150 hover:bg-[hsl(var(--muted))]/40"
          >
            <p className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
              {formatDate(post.date)} · {post.readTime}
            </p>
            <div className="mt-1 flex items-start justify-between gap-3">
              <h2 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))] transition-colors duration-150 group-hover:text-[hsl(var(--accent))]">
                {post.title}
              </h2>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-[hsl(var(--muted-foreground))] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent))]" />
            </div>
            <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              {post.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <Stripe />
    </div>
  );
}
