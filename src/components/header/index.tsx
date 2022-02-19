import { Stack, Text } from '@chakra-ui/react'
import { SearchBar } from './search-bar'

export function Header() {
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

      <SearchBar />
    </Stack>
  )
}
