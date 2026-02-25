export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  postCount?: number;
}

export interface PostPrompt {
  id: string;
  promptText: string;
  orderIndex: number;
}

export interface PostImage {
  id: string;
  imageUrl: string;
  altText?: string | null;
  orderIndex: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content?: string | null;
  excerpt?: string | null;
  featuredImage?: string | null;
  author: string;
  sourceUrl?: string | null;
  isScraped: boolean;
  publishedAt: string;
  categories: Category[];
  prompts?: PostPrompt[];
  images?: PostImage[];
  promptCount?: number;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PostsResponse {
  posts: Post[];
  pagination: PaginationInfo;
}
