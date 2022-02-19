import { SearchIcon } from '@chakra-ui/icons'
import {
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useRepoSearch } from '../contexts/repo-search'

export function Header() {
  const searchInputRef = useRef<HTMLInputElement>(
    document.createElement('input')
  )
  const { search, isInSearchMode, clear, isSearching } = useRepoSearch()

  function handleSearch() {
    search(searchInputRef.current.value)
  }

  function handleClear() {
    searchInputRef.current.value = ''
    clear()
  }

  return (
    <HStack
      as="header"
      py="4"
      spacing="6"
      position="sticky"
      top="0"
      bg="white"
      zIndex="2"
    >
      <Text fontWeight="bold" fontSize="3xl">
        Gitfinder
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          w="100%"
          borderRadius="0"
          placeholder="Pesquise por um nome de um repositório"
          ref={searchInputRef}
          disabled={isInSearchMode}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSearch()
            }
          }}
        />
      </InputGroup>
      {isInSearchMode && !isSearching ? (
        <Button
          w="36"
          colorScheme="red"
          borderRadius="0"
          onClick={() => handleClear()}
        >
          Limpar
        </Button>
      ) : (
        <Button
          w="36"
          colorScheme="yellow"
          borderRadius="0"
          onClick={() => handleSearch()}
          isLoading={isSearching}
        >
          Buscar
        </Button>
      )}
    </HStack>
  )
}
