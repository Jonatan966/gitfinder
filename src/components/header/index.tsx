import { HStack, Stack, Text } from '@chakra-ui/react'
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
    <Stack
      as="header"
      direction={['column', null, 'row']}
      py="4"
      spacing={['2', null, '6']}
      position="sticky"
      top="0"
      bg="white"
      zIndex="2"
    >
      <Text
        textAlign={['center', null, 'left']}
        fontWeight="bold"
        fontSize="3xl"
      >
        Gitfinder
      </Text>

      <HStack as="nav" w="100%">
        <SearchInput
          w="100%"
          handleSearch={() => onSearch()}
          ref={searchInputRef}
        />
        <SearchButton
          handleSearch={() => onSearch()}
          handleClear={() => onClear()}
        />
      </HStack>
    </Stack>
  )
}
