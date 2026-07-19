# Graph Report - My-portfolio  (2026-07-19)

## Corpus Check
- 36 files · ~64,662 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 179 nodes · 224 edges · 18 communities (13 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3587c92a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 17|Community 17]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `SectionHeading()` - 8 edges
3. `getAllBlogs()` - 7 edges
4. `getAllProjects()` - 7 edges
5. `tailwind` - 6 edges
6. `aliases` - 6 edges
7. `getBlogBySlug()` - 5 edges
8. `getProjectBySlug()` - 5 edges
9. `cn()` - 5 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getAllProjects()`  [INFERRED]
  app/projects/[slug]/page.tsx → app/lib/mdx.ts
- `AnimatedThemeToggler()` --calls--> `cn()`  [EXTRACTED]
  components/ui/animated-theme-toggler.tsx → lib/utils.ts
- `generateStaticParams()` --calls--> `getAllBlogs()`  [INFERRED]
  app/blog/[slug]/page.tsx → app/lib/mdx.ts
- `generateMetadata()` --calls--> `getBlogBySlug()`  [INFERRED]
  app/blog/[slug]/page.tsx → app/lib/mdx.ts
- `generateMetadata()` --calls--> `getProjectBySlug()`  [INFERRED]
  app/projects/[slug]/page.tsx → app/lib/mdx.ts

## Import Cycles
- None detected.

## Communities (18 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (13): Hero(), RecentProjects(), TechStack(), education, experiences, footerSocials, navLinks, socials (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (18): devDependencies, eslint, eslint-config-next, postcss, prettier, tailwindcss, @types/node, @types/react (+10 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (22): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+14 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (16): dependencies, @base-ui/react, class-variance-authority, clsx, gray-matter, lucide-react, next, next-mdx-remote (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.21
Nodes (7): inter, jetbrainsMono, metadata, satoshi, ThemeProvider(), FloatingThemeToggle(), Navbar()

### Community 6 - "Community 6"
Cohesion: 0.11
Nodes (21): generateMetadata(), generateStaticParams(), generateMetadata(), generateStaticParams(), BlogPage(), metadata, RecentPosts(), BlogPost (+13 more)

### Community 7 - "Community 7"
Cohesion: 0.31
Nodes (5): cn(), AnimatedThemeToggler(), AnimatedThemeTogglerProps, InteractiveHoverButton(), InteractiveHoverButtonProps

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): BlogPost, ProjectData, Section

### Community 17 - "Community 17"
Cohesion: 0.22
Nodes (8): Claude vs. OpenAI at a glance, How it works on Claude (Anthropic), How it works on OpenAI, Is it worth it?, The economics on Claude, The one rule everything follows from, The silent cache killers, Verify it's actually working

## Knowledge Gaps
- **96 isolated node(s):** `extends`, `BlogDetailPageProps`, `mdxComponents`, `metadata`, `satoshi` (+91 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 4` to `Community 1`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `SectionHeading()` connect `Community 0` to `Community 6`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `extends`, `BlogDetailPageProps`, `mdxComponents` to the rest of the system?**
  _96 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14153846153846153 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._