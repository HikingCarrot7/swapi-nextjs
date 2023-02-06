import { Character } from '@models/Character';
import { CharacterDTO } from '@models/dtos/CharacterDTO';
import { PaginatedCharactersDTO } from '@models/dtos/PaginatedCharactersDTO';
import { PaginatedCharacters } from '@models/PaginatedCharacters';
import { extractNumberFromString } from '../../utils/text';

export const dtoToEntity = (dto: CharacterDTO): Character => {
  return {
    id: extractNumberFromString(dto.url),
    name: dto.name,
    height: dto.height,
    mass: dto.mass,
    hairColor: dto.hair_color,
    skinColor: dto.skin_color,
    eyeColor: dto.eye_color,
    birthYear: dto.birth_year,
    gender: dto.gender,
  };
};

export const paginatedDtoToEntity = (
  dto: PaginatedCharactersDTO,
): PaginatedCharacters => {
  return {
    count: dto.count,
    results: dto.results.map(dtoToEntity),
  };
};
