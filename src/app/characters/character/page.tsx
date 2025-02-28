import { CharacterCard } from "@/app/_components/CharacterCard";
import { getCharacterById } from "@/services/api";
import { CharacterType } from "@/types/character";

export async function generateMetadate({
  params,
}: {
  params: { characterId: string };
}) {
  const data: CharacterType = await getCharacterById(params.characterId);
  return { title: data.name };
}

const Page = async ({ params }: { params: { characterId: string } }) => {
  const data: CharacterType = await getCharacterById(params.characterId);
  // const isLoading = !data;

  return (
    <article className="flex items-center justify-center flex-col">
      <h2>Detail info about {data.name}</h2>
      <CharacterCard
        name={data.name}
        image={data.image}
        status={data.status}
        species={data.species}
        location={{ name: data.location.name, url: data.location.url }}
        type={data.type}
        gender={data.gender}
        episode={data.episode}
      />
    </article>
  );
};

export default Page;
