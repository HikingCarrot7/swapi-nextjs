import { Character } from '@models/Character';

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
      <hr />
    </div>
  );
};

export default CharacterCard;
