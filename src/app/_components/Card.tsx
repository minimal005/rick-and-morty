"use client";
import { CharacterType as Character, Status } from "../../types/character";
import Image from "next/image";
import Card from "react-bootstrap/Card";
interface Props {
  character: Character;
}

const getStatusColor = (statusColor: Status) => {
  if (statusColor === Status.Alive) {
    return "🟢";
  }
  if (statusColor === Status.Dead) {
    return "🔴";
  }
  return "⚪ ";
};

export const CustomCard: React.FC<Props> = (props) => {
  const { character } = props;
  // console.log(character.episode.at(-1));
  return (
    <>
      <Card
        as="div"
        className="d-flex flex-col sm:max-w-[550px] bg-dark text-light rounded-xl w-[300px] border-1 border-primary-400/20"
      >
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className="rounded-start border-t-1 border-l-1 border-b-1 border-primary-400/20"
        />
        <Card.Body className="bg-gray-800  rounded-r-xl shadow-md border-t-1 border-r-1 border-b-1  border-primary-400/20">
          <Card.Link
            className="fw-bold fs-4 text-primary-100 hover:text-secondary-500 transition-colors 
             truncate overflow-hidden text-ellipsis whitespace-nowrap block w-[270px]"
            href={`/characters/${character.id}`}
          >
            {character.name}
          </Card.Link>
          <Card.Text className="fw-bold text-primary-100 d-flex align-items-center gap-1">
            <span className="me-0 text-[10px]">
              {getStatusColor(character.status)}
            </span>
            {character.status} - {character.species}
          </Card.Text>
          <Card.Subtitle className="text-secondary">
            Last known location:
          </Card.Subtitle>
          <Card.Link
            className="text-primary-100 hover:text-secondary-500 transition-colors"
            href={character.location.url}
          >
            {character.location.name}
          </Card.Link>
          <Card.Subtitle className="text-secondary mt-2">
            First seen in:
          </Card.Subtitle>
          <Card.Link
            href={character.episode[0]}
            className="text-primary-100 hover:text-secondary-500 transition-colors"
          >
            {character.episode.length}
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};
