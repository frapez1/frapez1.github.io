
// Import all project files
import { sqGanProject } from '../content/projects/sq-gan';
import { spicProject } from '../content/projects/spic';

// Import all blog post files
import { sqGanSemanticCompressionPost } from '../content/blog/sq-gan-semantic-compression';
import { diffusionModelsFuturePost } from '../content/blog/diffusion-models-future';

// Project type definition
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  categories: string[];
  externalLinks: Record<string, string>;
  image: string;
  results: string[];
  challenges: string[];
  markdownContent: string;
}

// Blog post type definition
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
  markdownContent: string;
}

// Export all projects
export const allProjects: Project[] = [
  sqGanProject,
  spicProject,
];

// Export all blog posts
export const allBlogPosts: BlogPost[] = [
  sqGanSemanticCompressionPost,
  diffusionModelsFuturePost,
];

// Utility functions
export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return allBlogPosts.find(post => post.slug === slug);
};

// Sort blog posts by date (newest first)
export const getSortedBlogPosts = (): BlogPost[] => {
  return [...allBlogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get featured project (first one)
export const getFeaturedProject = (): Project | undefined => {
  return allProjects[0];
};

// Get featured blog post (newest one)
export const getFeaturedBlogPost = (): BlogPost | undefined => {
  const sorted = getSortedBlogPosts();
  return sorted[0];
};