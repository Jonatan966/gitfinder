import { useContext } from 'react'
import { SuggestionContext } from './context'

export const useSuggestion = () => useContext(SuggestionContext)
