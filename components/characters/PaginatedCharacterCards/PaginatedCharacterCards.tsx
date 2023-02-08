import CharacterCard from '@components/characters/CharacterCard/CharacterCard';
import Pagination from '@components/characters/Pagination/Pagination';
import { CardGrid } from '@components/shared/CardGrid';
import { Character } from '@models/Character';

interface PaginatedCharacterCardsProps {
  characters: Character[];
  totalCharacters: number;
  currentPage: number;
  onPageItemClicked: (page: number) => void;
}

const PaginatedCharacterCards = ({
  characters,
  totalCharacters,
  currentPage,
  onPageItemClicked,
}: PaginatedCharacterCardsProps) => {
  return (
    <>
      <Pagination {...{ totalCharacters, currentPage, onPageItemClicked }} />
      <CardGrid>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </CardGrid>
      <Pagination {...{ totalCharacters, currentPage, onPageItemClicked }} />
    </>
  );
};

export default PaginatedCharacterCards;
