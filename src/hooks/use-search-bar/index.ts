import { useContext } from 'react'
import { SearchBarContext } from './context'

export const useSearchBar = () => useContext(SearchBarContext)
