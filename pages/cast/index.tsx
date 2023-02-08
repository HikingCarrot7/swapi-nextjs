import PaginatedCharacterCards from '@components/characters/PaginatedCharacterCards/PaginatedCharacterCards';
import { getCastOfFilm } from '@services/cast.service';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

const CastPage = ({
  filmId,
  filmTitle,
  characters,
  totalCharacters,
  currentPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const onPageItemClicked = (page: number) => {
    router.push(`/cast?filmId=${filmId}&page=${page}`);
  };

  return (
    <>
      <div>{filmTitle}</div>
      <PaginatedCharacterCards
        {...{ characters, totalCharacters, currentPage, onPageItemClicked }}
      />
    </>
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const filmId = Number(query['filmId']);
  const page = Number(query['page']) || 1;
  if (!filmId) {
    return {
      notFound: true,
    };
  }

  const filmCast = await getCastOfFilm(filmId, page);
  return {
    props: {
      filmId: filmCast.filmId,
      filmTitle: filmCast.filmTitle,
      characters: filmCast.results,
      totalCharacters: filmCast.count,
      currentPage: page,
    },
  };
};

export default CastPage;
