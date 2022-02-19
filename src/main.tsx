import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import App from './App'
import { RepoSearchProvider } from './contexts/repo-search'

export const queryClient = new QueryClient()

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RepoSearchProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RepoSearchProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
)
