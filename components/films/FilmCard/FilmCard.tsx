import { Film } from '@models/Film';

interface FilmCardProps {
  film: Film;
}

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <>
      <h2 className="text-3xl">{film.title}</h2>
      <div>{film.openingCrawl}</div>
      <div>{film.producer}</div>
      <hr />
    </>
  );
};

export default FilmCard;
