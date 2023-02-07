import PaginatedCharacterCards from '@components/characters/PaginatedCharacterCards/PaginatedCharacterCards';
import { getPaginatedCharacters } from '@services/character.service';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

const Characters = ({
  characters,
  totalCharacters,
  currentPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const onPageItemClicked = (page: string) => {
    router.push(`/characters/${page}`);
  };

  return (
    <PaginatedCharacterCards
      {...{ characters, totalCharacters, currentPage, onPageItemClicked }}
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
