import { Film } from '@models/Film';

export interface CharacterFilms {
  characterName: string;
  films: Film[];
}
