import { CharacterFilms } from '@models/CharacterFilms';
import { FilmDTO } from '@models/dtos/FilmDTO';
import { Film } from '@models/Film';
import { dtoToEntity } from '@models/mappers/filmMapper';
import { getCharacterDTOById } from '@services/character.service';
import api from '../config/axios';

export const getCharacterFilms = async (
  characterId: number,
): Promise<CharacterFilms> => {
  const characterDto = await getCharacterDTOById(characterId);
  const films = await getFilms(characterDto.films);
  return {
    characterName: characterDto.name,
    films,
  };
};

const getFilms = async (filmsUrls: string[]): Promise<Film[]> => {
  const films = [];
  for (const filmUrl of filmsUrls) {
    const filmDto = await getFilmDTOByUrl(filmUrl);
    films.push(dtoToEntity(filmDto));
  }
  return films;
};

export const getFilmDTOById = async (filmId: number) => {
  const result = await api.get<FilmDTO>(`/films/${filmId}`);
  return result.data;
};

export const getFilmDTOByUrl = async (url: string) => {
  const result = await api.get<FilmDTO>(url);
  return result.data;
};
