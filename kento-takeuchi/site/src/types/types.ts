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
  id?: string
  title?: string
  description?: any
  date?: Date
  thumbnail?: any
  subImages?: any
  category?: string
  likes?: number
}

/**
 * @type
 *
 * pageContext come from "templates folder" and "pagination" function
 */
export interface TemplatePageContextProps {
  currentPage: number
  language: string
  limit: number
  pathPrefix: string
  skip: number
  totalPages: number
}

/**
 * @type
 *
 * pageContext come from "templates folder" and "createSinglePage" function
 */
export interface SinglePageContextProps {
  collection: string
  language: string
  slug: string
}

/**
 * @type
 *
 * pageContext come from "page folder"
 */
export interface PageContextProps {
  langKey: string
  memo: string
  slug: string
}

/**
 * @type
 *
 * Likes
 */
export interface LikesProps {
  id: string
  likes?: number
}
