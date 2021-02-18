/**
 * page from pagination
 */
export interface PageContextType {
  pageContext: {
    currentPage: number
    language: string
    limit: number
    pathPrefix: string
    skip: number
    totalPages: number
  }
}
