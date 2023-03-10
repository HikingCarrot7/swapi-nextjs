import { PaginatedCharacterCards } from '@components/characters/PaginatedCharacterCards';
import { Container } from '@components/shared/Container';
import { getPaginatedCharacters } from '@services/character.service';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

const PaginatedPage = ({
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

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1;
  if (page === 1) {
    return {
      redirect: {
        destination: '/characters',
        permanent: false,
      },
    };
  }

  const paginatedCharacters = await getPaginatedCharacters(page);
  if (!paginatedCharacters.results.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      characters: paginatedCharacters.results,
      totalCharacters: paginatedCharacters.count,
      currentPage: page,
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  };
};

export const getStaticPaths = () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be pre-rendered at runtime.
    paths: Array.from({ length: 5 }).map((_, i) => `/characters/${i + 2}`),
    fallback: 'blocking',
  };
};

export default PaginatedPage;
