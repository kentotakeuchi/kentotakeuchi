/**
 * 
 */
export interface ProjectFormattedProps {
  title?: string
  publishedAt?: Date
  tags?: string[]
  client?: string
  tools?: string[]
  url?: string
  videoUrl?: string
  description?: any
  images?: any
}

/**
 * 
 */
export interface BlogProps {
  id?: string;
  title?: string;
  description?: any;
  date?: Date;
  thumbnail?: any;
  subImages?: any;
  category?: string;
  likes?: number;
}

/**
 * 
 */
export interface TemplatePageContextProps {
  currentPage: number;
  language: string;
  limit: number;
  pathPrefix: string;
  skip: number;
  totalPages: number;
}