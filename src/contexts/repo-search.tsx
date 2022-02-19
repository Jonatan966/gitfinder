import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'
import { ParsedRepo } from '../interfaces/parsed-repo'
import { api } from '../services/api'

interface RepoSearchProviderProps {
  children: ReactNode
}

interface SearchResult {
  repos: ParsedRepo[]
  totalRepos: number
}

interface RepoSearchContextProps {
  search(repoName: string): void
  goToNextPage(): Promise<void>
  clear(): void
  searchResult: SearchResult
  hasNextPage: boolean
  isInSearchMode: boolean
  isSearching: boolean
  isFetchingNextPage: boolean
}

function parseRepo(repo: any): ParsedRepo {
  return {
    id: repo.node_id,
    name: repo.name,
    description: repo.description,
    issues: repo.open_issues,
    mainLanguage: repo.language,
    ownerAvatarUrl: repo.owner.avatar_url,
    repoUrl: repo.html_url,
    stars: repo.stargazers_count,
  }
}

async function fetchRepos({ pageParam = 1, meta }: QueryFunctionContext) {
  const { data: result } = await api.get('/search/repositories', {
    params: {
      page: pageParam,
      q: meta?.searchText,
    },
  })

  const parsedResult = result.items.map(parseRepo)

  return {
    repos: parsedResult as ParsedRepo[],
    totalRepos: Number(result.total_count),
  }
}

function getNextPageParam(
  currentPage: SearchResult,
  allPages: SearchResult[]
): number | null {
  if (currentPage.totalRepos > 30 * allPages.length) {
    return allPages.length + 1
  }

  return null
}

const emptyPage = {
  repos: [],
  totalRepos: 0,
}

const RepoSearchContext = createContext({} as RepoSearchContextProps)

export function RepoSearchProvider({ children }: RepoSearchProviderProps) {
  const [searchText, setSearchText] = useState('')
  const { fetchNextPage, hasNextPage, data, isLoading, isFetchingNextPage } =
    useInfiniteQuery(['repos', searchText], fetchRepos, {
      enabled: !!searchText,
      meta: {
        searchText,
      },
      getNextPageParam,
      staleTime: 1000 * 60 * 3, // 3 minutes
    })

  const singlePage = useMemo(() => {
    if (!data) return emptyPage

    return data?.pages.reduce(
      (acc, current) => ({
        repos: [...acc.repos, ...current.repos],
        totalRepos: current.totalRepos as number,
      }),
      emptyPage
    )
  }, [data])

  function search(repoName: string) {
    setSearchText(repoName)
  }

  async function goToNextPage() {
    await fetchNextPage()
  }

  function clear() {
    setSearchText('')
  }

  const value = useMemo(
    () => ({
      search,
      goToNextPage,
      clear,
      hasNextPage: !!hasNextPage,
      searchResult: singlePage,
      isInSearchMode: !!searchText,
      isSearching: isLoading,
      isFetchingNextPage,
    }),
    [hasNextPage, singlePage, searchText, isFetchingNextPage]
  )

  return (
    <RepoSearchContext.Provider value={value}>
      {children}
    </RepoSearchContext.Provider>
  )
}

export const useRepoSearch = () => useContext(RepoSearchContext)
