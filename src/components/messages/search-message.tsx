import { Search2Icon } from '@chakra-ui/icons'
import { Center, VStack, Text } from '@chakra-ui/react'

export function SearchMessage() {
  return (
    <Center my="auto">
      <VStack spacing="8">
        <Search2Icon w={28} h={28} color="gray.400" />
        <Text color="gray.400" fontWeight="medium">
          Pesquise por um repositório
        </Text>
      </VStack>
    </Center>
  )
}
