import { ReactNode } from 'react'

export interface Suggestion {
  title: string
  id: string
}

export interface SuggestionContextProps {
  suggestions: Suggestion[]
  addSuggestion(suggestion: Omit<Suggestion, 'id'>): void
  removeSuggestion(suggestionId: string): void
}

export interface SuggestionProviderProps {
  children: ReactNode
}
