import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import App from './App'
import { RepoSearchProvider } from './hooks/use-repo-search/provider'
import { queryClient } from './configs/query-client'

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
