import { Character } from '@models/Character';
import { FilmDTO } from '@models/dtos/FilmDTO';
import { FilmCast } from '@models/FilmCast';
import { dtoToEntity } from '@models/mappers/characterMapper';
import { getCharacterDTOByUrl } from '@services/character.service';
import { getFilmDTOById } from '@services/film.service';
import { PER_PAGE } from '../constants/pagination';
import { paginate } from '../utils/paginateArray';

export const getCastOfFilm = async (
  filmId: number,
  page: number,
): Promise<FilmCast> => {
  const filmDto = await getFilmDTOById(filmId);
  const paginatedCharactersUrls = paginateCharacters(filmDto, page);
  const characters = await getCharactersSByUrls(paginatedCharactersUrls);
  return {
    filmId,
    filmTitle: filmDto.title,
    count: filmDto.characters.length,
    results: characters,
  };
};

const paginateCharacters = (filmDto: FilmDTO, page: number) => {
  return paginate({
    array: filmDto.characters,
    pageSize: PER_PAGE,
    pageNumber: page,
  });
};

const getCharactersSByUrls = async (
  charactersUrls: string[],
): Promise<Character[]> => {
  const characters = [];
  for (const characterUrl of charactersUrls) {
    const characterDto = await getCharacterDTOByUrl(characterUrl);
    characters.push(dtoToEntity(characterDto));
  }
  return characters;
};
