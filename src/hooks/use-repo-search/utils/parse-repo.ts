import { ParsedRepo } from '../../../interfaces/parsed-repo'

export function parseRepo(repo: any): ParsedRepo {
  return {
    id: repo.node_id,
    name: repo.name,
    description: repo.description,
    issues: repo.open_issues,
    mainLanguage: repo.language,
    ownerAvatarUrl: repo.owner.avatar_url,
    repoUrl: repo.html_url,
    stars: repo.stargazers_count,
  }
}
