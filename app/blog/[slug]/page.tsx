import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogs, getBlogBySlug } from "../../lib/mdx";
import type { Metadata } from "next";
import type { ComponentPropsWithoutRef } from "react";

interface BlogDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Samir Khanal`,
    description: post.description,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-10 flex items-center gap-2 font-heading text-xl font-bold text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 font-heading text-lg font-bold text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="mt-4 text-[15px] leading-8 text-[hsl(var(--muted-foreground))]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mt-4 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-7 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--accent))]"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mt-4 flex list-decimal flex-col gap-2 pl-5 text-[15px] leading-7 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--accent))]"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-[hsl(var(--foreground))]" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="font-medium text-[hsl(var(--accent))] underline underline-offset-4 hover:no-underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded bg-[hsl(var(--muted))] px-1.5 py-0.5 font-mono text-[13px] text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mt-4 overflow-x-auto rounded-xl border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/60 p-4 font-mono text-[13px] leading-6 text-[hsl(var(--foreground))] [&>code]:bg-transparent [&>code]:p-0"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-4 border-l-2 border-solid border-[hsl(var(--accent))] pl-4 italic text-[hsl(var(--muted-foreground))]"
      {...props}
    />
  ),
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen max-w-2xl py-14">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:text-[hsl(var(--accent))]"
      >
        ← Back to blog
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-solid border-[hsl(var(--border))] px-2.5 py-0.5 text-xs text-[hsl(var(--muted-foreground))]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-6 border-t border-solid border-[hsl(var(--border))] pt-2">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
