/* eslint-disable react/jsx-props-no-spreading */
import { SearchIcon } from '@chakra-ui/icons'
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
} from '@chakra-ui/react'
import { KeyboardEvent, ForwardRefRenderFunction, forwardRef } from 'react'
import { useRepoSearch } from '../../contexts/repo-search'

interface SearchInputProps extends InputProps {
  handleSearch(value: string): void
}

const SearchInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  SearchInputProps
> = function SearchInputBase({ handleSearch, ...props }, searchInputRef) {
  const { isInSearchMode } = useRepoSearch()

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch(event.currentTarget.value)
    }
  }

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        borderRadius="0"
        placeholder="Pesquise por um nome de um repositório"
        {...props}
        ref={searchInputRef}
        disabled={isInSearchMode}
        onKeyPress={(e) => handleKeyPress(e)}
      />
    </InputGroup>
  )
}

export const SearchInput = forwardRef(SearchInputBase)
