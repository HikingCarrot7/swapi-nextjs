import { CharacterDTO } from '@models/dtos/CharacterDTO';
import { PaginatedCharactersDTO } from '@models/dtos/PaginatedCharactersDTO';
import { paginatedDtoToEntity } from '@models/mappers/characterMapper';
import { PaginatedCharacters } from '@models/PaginatedCharacters';
import api from '../config/axios';

export const getPaginatedCharacters = async (
  page: number,
): Promise<PaginatedCharacters> => {
  const result = await getPaginatedCharactersDTO(page);
  return paginatedDtoToEntity(result);
};

export const getPaginatedCharactersDTO = async (page: number) => {
  const result = await api.get<PaginatedCharactersDTO>(`/people?page=${page}`);
  return result.data;
};

export const getCharacterDTOById = async (
  characterId: number,
): Promise<CharacterDTO> => {
  const result = await api.get<CharacterDTO>(`/people/${characterId}`);
  return result.data;
};

export const getCharacterDTOByUrl = async (characterUrl: string) => {
  const result = await api.get<CharacterDTO>(characterUrl);
  return result.data;
};
