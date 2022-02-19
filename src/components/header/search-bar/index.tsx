import { HStack } from '@chakra-ui/react'
import { useState, useRef, useEffect, useMemo } from 'react'
import { useRepoSearch } from '../../../hooks/use-repo-search'
import { SearchBarContext } from '../../../hooks/use-search-bar/context'
import { useSuggestion } from '../../../hooks/use-suggestion'
import { SearchButton } from './search-button'
import { SearchInput } from './search-input'
import { SearchSuggestions } from './search-suggestions'

export function SearchBar() {
  const { search, clear } = useRepoSearch()
  const { addSuggestion } = useSuggestion()
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchInputRef = useRef({} as HTMLInputElement)
  const navbarRef = useRef({} as HTMLDivElement)

  function onSearch(searchTerm?: string, hasNewTerm = true) {
    setShowSuggestions(false)

    if (searchTerm) {
      searchInputRef.current.value = searchTerm
    }

    if (hasNewTerm) {
      addSuggestion({
        title: searchInputRef.current.value,
      })
    }

    search(searchInputRef.current.value)
  }

  function onClear() {
    searchInputRef.current.value = ''
    clear()
  }

  const searchBarContextValue = useMemo(
    () => ({
      onSearch,
      onClear,
    }),
    [onSearch, onClear]
  )

  useEffect(() => {
    function onFocus() {
      setShowSuggestions(true)
    }

    function onLostFocus(ev: MouseEvent) {
      const clickedInNavigationBar = navbarRef.current.contains(
        ev.target as Node
      )

      if (clickedInNavigationBar) return

      setShowSuggestions(false)
    }

    searchInputRef.current.addEventListener('focus', onFocus)
    document.addEventListener('click', onLostFocus)

    return function onUnmount() {
      if (!searchInputRef.current) return

      searchInputRef.current.removeEventListener('focus', onFocus)
      document.removeEventListener('click', onLostFocus)
    }
  }, [])

  return (
    <SearchBarContext.Provider value={searchBarContextValue}>
      <HStack as="nav" w="100%" position="relative" ref={navbarRef}>
        <SearchInput w="100%" ref={searchInputRef} />
        <SearchButton />

        {showSuggestions && <SearchSuggestions />}
      </HStack>
    </SearchBarContext.Provider>
  )
}
