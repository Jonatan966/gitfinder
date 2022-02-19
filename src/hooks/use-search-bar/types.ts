export interface SearchBarContextProps {
  onSearch(searchTerm?: string, hasNewTerm?: boolean): void
  onClear(): void
}
