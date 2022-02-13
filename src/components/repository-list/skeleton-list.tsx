import { Box, Skeleton } from '@chakra-ui/react'

export function SkeletonList() {
  return (
    <Box>
      <Skeleton height={['8', '14']} width={['full', 'md']} mb="4" />

      <Box sx={{ columnCount: [1, 2, 3] }}>
        <Skeleton height="384px" w="100%" mb="2" d="inline-block" />
        <Skeleton height="128px" w="100%" mb="2" d="inline-block" />
        <Skeleton height="256px" w="100%" mb="2" d="inline-block" />
        <Skeleton height="256px" w="100%" mb="2" d="inline-block" />
        <Skeleton height="128px" w="100%" mb="2" d="inline-block" />
        <Skeleton height="384px" w="100%" mb="2" d="inline-block" />
      </Box>
    </Box>
  )
}
