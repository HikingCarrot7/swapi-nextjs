import { Card } from '@components/shared/Card';
import { StyledLink } from '@components/shared/StyledLink';
import { Character } from '@models/Character';
import Image from 'next/image';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Card>
      <Image
        src="/images/placeholder.png"
        alt={character.name}
        width={900}
        height={300}
      />
      <Card.Title title={character.name} />
      <Card.Content>
        <Card.Property label="Height" value={`${character.height / 100} m`} />
        <Card.Property label="Mass" value={`${character.mass} kg`} />
        <Card.ColorProperty label="Hair color" colors={character.hairColor} />
        <Card.ColorProperty label="Skin color" colors={character.skinColor} />
        <Card.ColorProperty label="Eye color" colors={character.eyeColor} />
        <Card.Property label="Birth year" value={character.birthYear} />
        <Card.Property label="Gender" value={character.gender} />
        <StyledLink href={`/films?characterId=${character.id}`} label="Films" />
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
