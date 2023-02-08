import FilmCard from '@components/films/FilmCard/FilmCard';
import { CardGrid } from '@components/shared/CardGrid';
import { Container } from '@components/shared/Container';
import { Title } from '@components/shared/Title';
import { getCharacterFilms } from '@services/film.service';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const FilmsPage = ({
  characterName,
  films,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <Title>
        Films <span className="font-bold">{characterName}</span> has appeared in
      </Title>
      <CardGrid>
        {films.map((film, index) => (
          <FilmCard key={index} film={film} />
        ))}
      </CardGrid>
    </Container>
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
