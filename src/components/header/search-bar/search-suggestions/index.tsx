import { List, Text } from '@chakra-ui/react'
import { Suggestion } from './suggestion'

export function SearchSuggestions() {
  return (
    <List
      position="absolute"
      left="0"
      right="0"
      top="100%"
      height="auto"
      boxShadow="base"
      p="2"
      spacing="2"
      margin="0 !important"
      background="white"
    >
      <Text fontWeight="semibold" color="gray.400">
        Pesquisas recentes
      </Text>
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </List>
  )
}
