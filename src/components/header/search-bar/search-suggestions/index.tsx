import { List, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useSuggestion } from '../../../../hooks/use-suggestion'
import { SuggestionCard } from './suggestion-card'

export function SearchSuggestions() {
  const { suggestions } = useSuggestion()

  const filteredSuggestions = useMemo(
    () => [...suggestions].reverse().splice(0, 5),
    [suggestions]
  )

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
      {filteredSuggestions.map((suggestion) => (
        <SuggestionCard suggestion={suggestion} key={suggestion.id} />
      ))}
    </List>
  )
}
