import { useContext } from 'react'
import { RepoSearchContext } from './context'

export const useRepoSearch = () => useContext(RepoSearchContext)
