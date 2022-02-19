import { Button } from '@chakra-ui/react'
import { useRepoSearch } from '../../contexts/repo-search'

interface SearchButtonProps {
  handleSearch(): void
  handleClear(): void
}

export function SearchButton({ handleClear, handleSearch }: SearchButtonProps) {
  const { isSearching, isInSearchMode } = useRepoSearch()

  if (isInSearchMode && !isSearching) {
    return (
      <Button
        w="36"
        colorScheme="red"
        borderRadius="0"
        onClick={() => handleClear()}
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
      onClick={() => handleSearch()}
      isLoading={isSearching}
    >
      Buscar
    </Button>
  )
}
