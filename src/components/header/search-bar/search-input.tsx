/* eslint-disable react/jsx-props-no-spreading */
import { SearchIcon } from '@chakra-ui/icons'
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
} from '@chakra-ui/react'
import { KeyboardEvent, ForwardRefRenderFunction, forwardRef } from 'react'
import { useRepoSearch } from '../../../hooks/use-repo-search'
import { useSearchBar } from '../../../hooks/use-search-bar'

const SearchInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  function SearchInputBase(props, searchInputRef) {
    const { isInSearchMode } = useRepoSearch()
    const { onSearch } = useSearchBar()

    function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
      if (event.key === 'Enter') {
        onSearch()
      }
    }

    return (
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
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
