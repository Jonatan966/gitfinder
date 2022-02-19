import { HStack, Text } from '@chakra-ui/react'
import { useRef } from 'react'
import { useRepoSearch } from '../../contexts/repo-search'
import { SearchButton } from './search-button'
import { SearchInput } from './search-input'

export function Header() {
  const { search, clear } = useRepoSearch()
  const searchInputRef = useRef<HTMLInputElement>(null)

  function onSearch() {
    search(searchInputRef.current?.value || '')
  }

  function onClear() {
    if (!searchInputRef.current) return

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
      <SearchInput handleSearch={() => onSearch()} ref={searchInputRef} />
      <SearchButton
        handleSearch={() => onSearch()}
        handleClear={() => onClear()}
      />
    </HStack>
  )
}
