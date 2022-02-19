import { Flex } from '@chakra-ui/react'
import { Header } from './components/header'
import { RepositoryList } from './components/repository-list'
import { SearchMessage } from './components/messages/search-message'
import { useRepoSearch } from './contexts/repo-search'
import { NotFoundMessage } from './components/messages/not-found-message'

function App() {
  const { isInSearchMode, isSearching, searchResult } = useRepoSearch()

  function renderContent() {
    if (!isInSearchMode) {
      return <SearchMessage />
    }

    if (isSearching || searchResult.totalRepos > 0) {
      return <RepositoryList />
    }

    return <NotFoundMessage />
  }

  return (
    <Flex
      direction="column"
      maxW={1024}
      mx="auto"
      px="4"
      w="100%"
      minH="100vh"
      h="100%"
    >
      <Header />

      {renderContent()}
    </Flex>
  )
}

export default App
