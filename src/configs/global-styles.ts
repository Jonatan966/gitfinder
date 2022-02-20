import { extendTheme } from '@chakra-ui/react'

export const globalStyles = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: 0,
      },
    },
    Input: {
      baseStyle: {
        borderRadius: 0,
      },
    },
  },
})
