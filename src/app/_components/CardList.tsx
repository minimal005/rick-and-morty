import { Stack } from "react-bootstrap";
import { CharacterType as Character } from "../../types/character";
import { Card } from "./Card";

interface Props {
  characters: Character[];
}
export const CardsList: React.FC<Props> = (props) => {
  const { characters = [] } = props;

  return (
    <>
      <Stack direction="horizontal" gap={3} className="flex-wrap">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </Stack>
    </>
  );
};
