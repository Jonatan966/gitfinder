import { QueryFunctionContext } from 'react-query'
import { ParsedRepo } from '../../../interfaces/parsed-repo'
import { api } from '../../../services/api'
import { parseRepo } from './parse-repo'

export async function fetchRepos({
  pageParam = 1,
  meta,
}: QueryFunctionContext) {
  const { data: result } = await api.get('/search/repositories', {
    params: {
      page: pageParam,
      q: meta?.searchText,
    },
  })

  const parsedResult = result.items.map(parseRepo)

  return {
    repos: parsedResult as ParsedRepo[],
    totalRepos: Number(result.total_count),
  }
}
