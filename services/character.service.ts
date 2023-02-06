import { PaginatedCharactersResult } from '@models/PaginatedCharactersResult';
import api from '../config/axios';

export const getPaginatedCharacters = async (
  page: number,
): Promise<PaginatedCharactersResult> => {
  const result = await api.get<PaginatedCharactersResult>(
    `/people?page=${page}&format=json`,
  );
  return result.data;
};
