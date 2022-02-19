export interface ParsedRepo {
  id: string
  name: string
  ownerAvatarUrl: string
  description?: string
  stars: number
  issues: number
  mainLanguage: string
  repoUrl: string
}
