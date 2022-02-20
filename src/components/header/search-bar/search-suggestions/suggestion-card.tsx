import { DeleteIcon } from '@chakra-ui/icons'
import { ListItem, Button } from '@chakra-ui/react'
import { useSearchBar } from '../../../../hooks/use-search-bar'
import { useSuggestion } from '../../../../hooks/use-suggestion'
import { Suggestion } from '../../../../hooks/use-suggestion/types'

export interface SuggestionCardProps {
  suggestion: Suggestion
}

export function SuggestionCard({ suggestion }: SuggestionCardProps) {
  const { removeSuggestion } = useSuggestion()
  const { onSearch } = useSearchBar()

  return (
    <ListItem
      display="flex"
      gap="1.5"
      background="gray.100"
      border="1px"
      borderColor="gray.300"
      _hover={{
        backgroundColor: 'gray.200',
      }}
      transition="background 0.2s"
    >
      <Button
        p="2"
        w="100%"
        textAlign="left"
        display="block"
        color="black"
        variant="unstyled"
        onClick={() => onSearch(suggestion.title, false)}
      >
        {suggestion.title}
      </Button>

      <Button
        variant="unstyled"
        aria-label="Excluir pesquisa"
        onClick={() => removeSuggestion(suggestion.id)}
      >
        <DeleteIcon color="red.500" boxSize="6" />
      </Button>
    </ListItem>
  )
}
