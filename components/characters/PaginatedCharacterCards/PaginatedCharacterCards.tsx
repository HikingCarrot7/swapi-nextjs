import CharacterCard from '@components/characters/CharacterCard/CharacterCard';
import { Character } from '@models/Character';

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
  return (
    <div>
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default PaginatedCharacterCards;
