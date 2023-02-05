import PaginatedCharacterCards from '@components/characters/PaginatedCharacterCards/PaginatedCharacterCards';
import { getPaginatedCharacters } from '@services/character.service';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const Characters = ({
  characters,
  totalCharacters,
  currentPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PaginatedCharacterCards
      {...{ characters, totalCharacters, currentPage }}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const paginatedCharacters = await getPaginatedCharacters(1);

  return {
    props: {
      characters: paginatedCharacters.results,
      totalCharacters: paginatedCharacters.count,
      currentPage: 1,
    },
  };
};

export default Characters;
