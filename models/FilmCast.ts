import { Character } from '@models/Character';

export interface FilmCast {
  filmId: number;
  filmTitle: string;
  count: number;
  results: Character[];
}
