import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");
const projectsDirectory = path.join(process.cwd(), "content/projects");

// Frontmatter may reference images that haven't been added to public/ yet;
// drop those so pages don't render broken <img> tags.
function existingImage(image?: string): string | undefined {
  if (!image) return undefined;
  const filePath = path.join(process.cwd(), "public", image);
  return fs.existsSync(filePath) ? image : undefined;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  image?: string;
  content: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  type: string;
  tech: string[];
  image?: string;
  github?: string;
  order: number;
  content: string;
  sections: {
    title: string;
    content: string;
    image?: string;
  }[];
}

export function getAllBlogs(): BlogPost[] {
  if (!fs.existsSync(blogsDirectory)) return [];
  const files = fs.readdirSync(blogsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getBlogBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    readTime: data.readTime ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    image: existingImage(data.image),
    content,
  };
}

export function getAllProjects(): ProjectData[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  const files = fs.readdirSync(projectsDirectory);
  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getProjectBySlug(slug);
    })
    .filter(Boolean) as ProjectData[];
  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): ProjectData | null {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const sections = (data.sections ?? []) as ProjectData["sections"];

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    type: data.type ?? "Personal",
    tech: data.tech ?? [],
    image: existingImage(data.image),
    github: data.github,
    order: data.order ?? 99,
    content,
    sections: sections.map((section) => ({
      ...section,
      image: existingImage(section.image),
    })),
  };
}
