import { SearchIcon } from '@chakra-ui/icons'
import {
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
} from '@chakra-ui/react'

export function Header() {
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
        />
      </InputGroup>
      <Button w="36" colorScheme="yellow" borderRadius="0">
        Buscar
      </Button>
    </HStack>
  )
}
