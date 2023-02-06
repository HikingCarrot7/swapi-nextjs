import { FilmDTO } from '@models/dtos/FilmDTO';
import { Film } from '@models/Film';
import { extractNumberFromString } from '../../utils/text';

export const dtoToEntity = (dto: FilmDTO): Film => {
  return {
    id: extractNumberFromString(dto.url),
    title: dto.title,
    episodeId: dto.episode_id,
    openingCrawl: dto.opening_crawl,
    director: dto.director,
    producer: dto.producer,
    releaseDate: dto.release_date,
  };
};
