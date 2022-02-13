import { InfoIcon, StarIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  HStack,
  Link,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { ParsedRepo } from '../../interfaces/parsed-repo'

export interface RepositoryCardProps {
  repo: ParsedRepo
}

export function RepositoryCard({
  repo: {
    name,
    ownerAvatarUrl,
    description,
    stars,
    issues,
    mainLanguage,
    repoUrl,
  },
}: RepositoryCardProps) {
  return (
    <Link href={repoUrl} target="_blank">
      <Box
        border="2px"
        borderColor="gray.200"
        p="2"
        d="inline-block"
        w="100%"
        mb="2"
      >
        <HStack>
          <Avatar size="sm" src={ownerAvatarUrl} name={name} />
          <Text fontWeight="bold">{name}</Text>
        </HStack>

        <Wrap spacing="2" my="1">
          <WrapItem alignItems="center" gap="1">
            <StarIcon color="gray.600" />
            <Text fontWeight="medium">{stars}</Text>
          </WrapItem>

          <WrapItem alignItems="center" gap="1">
            <InfoIcon color="gray.600" />
            <Text fontWeight="medium">{issues}</Text>
          </WrapItem>

          <WrapItem alignItems="center" gap="1">
            <ViewIcon color="gray.600" />
            <Text fontWeight="medium">{mainLanguage}</Text>
          </WrapItem>
        </Wrap>

        <Text>{description}</Text>
      </Box>
    </Link>
  )
}
