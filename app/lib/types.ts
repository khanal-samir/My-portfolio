export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  type: string;
  tech: string[];
  image?: string;
}

export interface Section {
  title: string;
  content: string;
  image?: string;
}
