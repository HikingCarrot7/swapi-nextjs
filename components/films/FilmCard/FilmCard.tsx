import { Film } from '@models/Film';
import Link from 'next/link';

interface FilmCardProps {
  film: Film;
}

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <>
      <h2 className="text-3xl">{film.title}</h2>
      <div>{film.openingCrawl}</div>
      <div>{film.producer}</div>
      <Link href={`/cast/filmId=${film.id}`}>Film cast</Link>
      <hr />
    </>
  );
};

export default FilmCard;
