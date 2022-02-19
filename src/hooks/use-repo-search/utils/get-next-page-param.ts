import { SearchResult } from '../types'

export function getNextPageParam(
  currentPage: SearchResult,
  allPages: SearchResult[]
): number | null {
  if (currentPage.totalRepos > 30 * allPages.length) {
    return allPages.length + 1
  }

  return null
}
