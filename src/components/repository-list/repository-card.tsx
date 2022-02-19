import { InfoIcon, StarIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  HStack,
  Link,
  Skeleton,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { ParsedRepo } from '../../interfaces/parsed-repo'

export interface RepositoryCardProps {
  repo: ParsedRepo
  width: number
}

export function RepositoryCard({
  repo: {
    id,
    name,
    ownerAvatarUrl,
    description,
    stars,
    issues,
    mainLanguage,
    repoUrl,
  },
  width,
}: RepositoryCardProps) {
  if (id === 'fake-repo') {
    return <Skeleton height="140px" />
  }

  return (
    <Link href={repoUrl} target="_blank">
      <Box border="2px" borderColor="gray.200" p="2" d="inline-block" w={width}>
        <HStack>
          <Avatar size="sm" src={ownerAvatarUrl} name={name} />
          <Text
            fontWeight="bold"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {name}
          </Text>
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

          <WrapItem alignItems="center" gap="1" hidden={!mainLanguage}>
            <ViewIcon color="gray.600" />
            <Text fontWeight="medium">{mainLanguage}</Text>
          </WrapItem>
        </Wrap>

        <Text>{description}</Text>
      </Box>
    </Link>
  )
}
