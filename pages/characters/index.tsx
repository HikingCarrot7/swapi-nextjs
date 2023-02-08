import PaginatedCharacterCards from '@components/characters/PaginatedCharacterCards/PaginatedCharacterCards';
import { Container } from '@components/shared/Container';
import { getPaginatedCharacters } from '@services/character.service';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

const Characters = ({
  characters,
  totalCharacters,
  currentPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const onPageItemClicked = (page: number) => {
    router.push(`/characters/${page}`);
  };

  return (
    <Container>
      <PaginatedCharacterCards
        {...{ characters, totalCharacters, currentPage, onPageItemClicked }}
      />
    </Container>
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
