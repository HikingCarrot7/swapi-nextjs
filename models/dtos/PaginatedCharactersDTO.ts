import { CharacterDTO } from '@models/dtos/CharacterDTO';

export interface PaginatedCharactersDTO {
  count: number;
  results: CharacterDTO[];
}
