import { Character } from '@models/Character';

export interface PaginatedCharacters {
  count: number;
  results: Character[];
}
