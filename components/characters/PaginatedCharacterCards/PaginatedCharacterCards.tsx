import CharacterCard from '@components/characters/CharacterCard/CharacterCard';
import { usePagination } from '@hooks/usePagination';
import { Character } from '@models/Character';
import { useRouter } from 'next/router';

interface PaginatedCharacterCardsProps {
  characters: Character[];
  totalCharacters: number;
  currentPage: number;
}

const PaginatedCharacterCards = ({
  characters,
  totalCharacters,
  currentPage,
}: PaginatedCharacterCardsProps) => {
  const router = useRouter();
  const { pagination } = usePagination({
    totalItems: totalCharacters,
    currentPage,
  });

  const onPageItemClicked = (page: string) => {
    if (page !== '...') {
      router.push(`/characters/${page}`);
    }
  };

  return (
    <div>
      <div>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
      {pagination.map((item, index) => (
        <a key={index} onClick={() => onPageItemClicked(item)}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default PaginatedCharacterCards;
