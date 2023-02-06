import { Character } from '@models/Character';
import Link from 'next/link';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div>
      <div>{character.name}</div>
      <div>{character.height}</div>
      <div>{character.mass}</div>
      <div>{character.gender}</div>
      <Link href={`/films?characterId=${character.id}`}>Films</Link>
      <hr />
    </div>
  );
};

export default CharacterCard;
