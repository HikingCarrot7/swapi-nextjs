import { Character } from './Character';

export interface PaginatedCharactersResult {
  count: number;
  results: Character[];
}
