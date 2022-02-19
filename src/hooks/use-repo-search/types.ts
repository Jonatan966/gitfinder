import { ReactNode } from 'react'
import { ParsedRepo } from '../../interfaces/parsed-repo'

export interface RepoSearchProviderProps {
  children: ReactNode
}

export interface SearchResult {
  repos: ParsedRepo[]
  totalRepos: number
}

export interface RepoSearchContextProps {
  search(repoName: string): void
  goToNextPage(): Promise<void>
  clear(): void
  searchResult: SearchResult
  hasNextPage: boolean
  isInSearchMode: boolean
  isSearching: boolean
  isFetchingNextPage: boolean
}
