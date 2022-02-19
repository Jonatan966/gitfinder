import { DeleteIcon } from '@chakra-ui/icons'
import { ListItem, Button } from '@chakra-ui/react'

export function Suggestion() {
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
        borderRadius="0"
      >
        eita
      </Button>

      <Button variant="unstyled" aria-label="Excluir pesquisa" borderRadius="0">
        <DeleteIcon color="red.500" boxSize="6" />
      </Button>
    </ListItem>
  )
}
