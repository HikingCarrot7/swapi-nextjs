import FilmCard from '@components/films/FilmCard/FilmCard';
import { getCharacterFilms } from '@services/film.service';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const FilmsPage = ({
  characterName,
  films,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div>{characterName}</div>
      {films.map((film, index) => (
        <FilmCard key={index} film={film} />
      ))}
    </>
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const characterId = Number(query['characterId']);
  if (!characterId) {
    return {
      notFound: true,
    };
  }

  const characterFilms = await getCharacterFilms(characterId);
  return {
    props: {
      characterName: characterFilms.characterName,
      films: characterFilms.films,
    },
  };
};

export default FilmsPage;
