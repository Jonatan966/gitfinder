import { useState, useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'
import { RepoSearchContext } from './context'
import { RepoSearchProviderProps } from './types'
import { fetchRepos } from './utils/fetch-repos'
import { getNextPageParam } from './utils/get-next-page-param'

const emptyPage = {
  repos: [],
  totalRepos: 0,
}

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
