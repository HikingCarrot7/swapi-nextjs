import { Card } from '@components/shared/Card';
import { StyledLink } from '@components/shared/StyledLink';
import { Film } from '@models/Film';
import Image from 'next/image';

interface FilmCardProps {
  film: Film;
}

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <Card>
      <Image
        src={`/images/${film.title}.jpg`}
        alt={film.title}
        width={150}
        height={300}
        className="mx-auto"
      />
      <Card.Title title={film.title} />
      <Card.Content>
        <p className="text-gray-700 text-base">{film.openingCrawl}</p>
        <Card.Property label="Producer" value={film.producer} />
        <Card.Property label="Director" value={film.director} />
        <Card.Property label="Release date" value={film.releaseDate} />
        <StyledLink href={`/cast?filmId=${film.id}`} label="Film cast" />
      </Card.Content>
    </Card>
  );
};

export default FilmCard;
