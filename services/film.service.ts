import { CharacterFilms } from '@models/CharacterFilms';
import { FilmDTO } from '@models/dtos/FilmDTO';
import { Film } from '@models/Film';
import { dtoToEntity } from '@models/mappers/filmMapper';
import { getCharacterDTO } from '@services/character.service';
import api from '../config/axios';

export const getCharacterFilms = async (
  characterId: number,
): Promise<CharacterFilms> => {
  const characterDto = await getCharacterDTO(characterId);
  const films = await getFilms(characterDto.films);
  return {
    characterName: characterDto.name,
    films,
  };
};

const getFilms = async (filmsUrls: string[]): Promise<Film[]> => {
  const films = [];
  for (const filmUrl of filmsUrls) {
    const filmDto = await getFilmDTO(filmUrl);
    films.push(dtoToEntity(filmDto));
  }
  return films;
};

export const getFilmDTO = async (url: string) => {
  const result = await api.get<FilmDTO>(url);
  return result.data;
};
