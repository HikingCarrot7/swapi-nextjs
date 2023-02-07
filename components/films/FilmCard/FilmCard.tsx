import { Film } from '@models/Film';
import Image from 'next/image';
import Link from 'next/link';

interface FilmCardProps {
  film: Film;
}

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <>
      <Image
        src={`/images/${film.title}.jpg`}
        alt={film.title}
        width={150}
        height={300}
      />
      <h2 className="text-3xl">{film.title}</h2>
      <div>{film.openingCrawl}</div>
      <div>{film.producer}</div>
      <Link href={`/cast/filmId=${film.id}`}>Film cast</Link>
      <hr />
    </>
  );
};

export default FilmCard;
