import { Stack } from "react-bootstrap";
import { CharacterType as Character } from "../../types/character";
import { CustomCard } from "./Card";

interface Props {
  characters: Character[];
  children?: React.ReactNode;
}
export const CardsList: React.FC<Props> = (props) => {
  const { characters = [], children } = props;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="flex-wrap justify-center"
      >
        {characters.map((character) => (
          <CustomCard key={character.id} character={character} />
        ))}
      </Stack>
      {children}
    </>
  );
};
