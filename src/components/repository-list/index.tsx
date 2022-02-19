import { Text } from '@chakra-ui/react'
import { useRef, useEffect, useMemo } from 'react'
import { Masonry } from 'masonic'
import { useRepoSearch } from '../../contexts/repo-search'
import { RepositoryCard } from './repository-card'
import { SkeletonList } from './skeleton-list'
import { ParsedRepo } from '../../interfaces/parsed-repo'

const fakeRepository: ParsedRepo = {
  id: 'fake-repo',
  issues: 0,
  mainLanguage: 'fake',
  name: 'fake',
  ownerAvatarUrl: 'fake',
  repoUrl: 'https://fake.com',
  stars: 0,
  description: 'fake',
}

export function RepositoryList() {
  const { searchResult, isSearching, goToNextPage, hasNextPage } =
    useRepoSearch()

  const loaderRef = useRef(null)

  const fakeRepos = useMemo(() => {
    const repoCount = Math.ceil(Math.random() * 4) + 2

    return new Array(repoCount).fill(fakeRepository)
  }, [])

  useEffect(() => {
    if (isSearching) return undefined

    const options = {
      root: null,
      rootMargin: '164px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0]

      if (target.isIntersecting) {
        goToNextPage()
      }
    }, options)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (!loaderRef.current) return

      observer.unobserve(loaderRef.current)
    }
  }, [isSearching])

  if (isSearching) {
    return <SkeletonList />
  }

  return (
    <>
      <Text fontSize={['2xl', '4xl']} mb="4">
        {searchResult.totalRepos} resultados encontrados
      </Text>

      <Masonry
        items={
          hasNextPage
            ? [...searchResult.repos, ...fakeRepos]
            : searchResult.repos
        }
        render={({ data, width, index }) => (
          <RepositoryCard width={width} repo={data} key={index} />
        )}
        columnGutter={8}
        rowGutter={8}
      />

      {hasNextPage && <div ref={loaderRef}>.</div>}
    </>
  )
}
