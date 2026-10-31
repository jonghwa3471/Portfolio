import raw from "@/content/portfolio.json";

export interface ProjectImage {
  src: string;
  caption: string;
  source?: string;
}
export interface Reflection {
  title: string;
  text: string;
  category?: string;
  code?: string;
  codeLanguage?: string;
  codeTakeaway?: string;
  image?: string;
  imageCaption?: string;
  link?: string;
  linkLabel?: string;
}
export interface LearningProject {
  id: string;
  name: string;
  title: string;
  purpose: string;
  group: string;
  kind: string;
  year: string;
  created: string;
  updated: string;
  commits: number;
  branch: string;
  repo: string;
  stack: string[];
  learned: string[];
  sources: string[];
  blogs: { title: string; url: string; kind: string; image?: string }[];
  images?: ProjectImage[];
  reflections?: Reflection[];
  motivation?: string;
  nextDirection?: string;
  galleryLayout?: string;
  demo?: string;
  demoStatus?: string;
  runtimeNote?: string;
  detail?: string;
  course?: { title: string; url: string };
  codeHighlights?: {
    title: string;
    description: string;
    language?: string;
    code: string;
    takeaway: string;
  }[];
}
export const projects = raw.journey as LearningProject[];
export const learningProjects = projects.filter(
  (project) => !["eokka", "study-scss-layout-masterclass", "css-challenge", "html-challenge"].includes(project.id),
);
export const groups = raw.groups;
export const projectPath = (id: string) =>
  id === "eokka" ? "/projects/eokka/" : `/journey/${encodeURIComponent(id)}/`;
export const assetPath = (path: string) =>
  /^(https?:|data:)/.test(path)
    ? path
    : `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${path.replace(/^(\.\.\/|\.\/|\/)+/, "")}`;
