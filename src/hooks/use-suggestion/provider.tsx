/* eslint-disable react/jsx-no-constructed-context-values */
import { LOCAL_STORAGE_KEYS } from '../../configs/local-storage-keys'
import { queryClient } from '../../configs/query-client'
import { useLocalStorage } from '../use-local-storage'
import { SuggestionContext } from './context'
import { Suggestion, SuggestionProviderProps } from './types'

export function SuggestionProvider({ children }: SuggestionProviderProps) {
  const [suggestions, setSuggestions] = useLocalStorage<Suggestion[]>(
    LOCAL_STORAGE_KEYS.Suggestions,
    []
  )

  async function handleRemoveSuggestion(id: string) {
    const updatedSuggestion = suggestions.filter((suggestion) => {
      if (suggestion.id === id) {
        queryClient.removeQueries(['repos', suggestion.title])
      }

      return suggestion.id !== id
    })

    await new Promise((resolve) => {
      setTimeout(resolve, 100) // wait 1/10 of second
    })

    setSuggestions(updatedSuggestion)
  }

  function handleAddSuggestion(suggestion: Omit<Suggestion, 'id'>) {
    const newSuggestionId = new Date().getTime().toString()

    const newSuggestion: Suggestion = {
      id: newSuggestionId,
      title: suggestion.title,
    }
    setSuggestions((oldSuggestions) => [...oldSuggestions, newSuggestion])
  }

  return (
    <SuggestionContext.Provider
      value={{
        removeSuggestion: handleRemoveSuggestion,
        addSuggestion: handleAddSuggestion,
        suggestions,
      }}
    >
      {children}
    </SuggestionContext.Provider>
  )
}
