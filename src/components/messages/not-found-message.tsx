import { CloseIcon } from '@chakra-ui/icons'
import { Center, VStack, Text } from '@chakra-ui/react'

export function NotFoundMessage() {
  return (
    <Center my="auto">
      <VStack spacing="8">
        <CloseIcon w={28} h={28} color="gray.400" />
        <Text color="gray.400" fontWeight="medium">
          Não foi possível encontrar este repositório
        </Text>
      </VStack>
    </Center>
  )
}
