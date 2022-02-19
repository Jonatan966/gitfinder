import { Button } from '@chakra-ui/react'
import { useRepoSearch } from '../../../hooks/use-repo-search'
import { useSearchBar } from '../../../hooks/use-search-bar'

export function SearchButton() {
  const { isSearching, isInSearchMode } = useRepoSearch()
  const { onSearch, onClear } = useSearchBar()

  if (isInSearchMode && !isSearching) {
    return (
      <Button
        w="36"
        colorScheme="red"
        borderRadius="0"
        onClick={() => onClear()}
      >
        Limpar
      </Button>
    )
  }

  return (
    <Button
      w="36"
      colorScheme="yellow"
      borderRadius="0"
      onClick={() => onSearch()}
      isLoading={isSearching}
    >
      Buscar
    </Button>
  )
}
