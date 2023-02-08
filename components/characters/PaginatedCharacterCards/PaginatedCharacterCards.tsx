import CharacterCard from '@components/characters/CharacterCard/CharacterCard';
import Pagination from '@components/characters/Pagination/Pagination';
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
    <div>
      <div>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
      <Pagination {...{ totalCharacters, currentPage, onPageItemClicked }} />
    </div>
  );
};

export default PaginatedCharacterCards;
