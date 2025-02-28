import { SideNavigation } from "@/app/_components/SearchCharacters";
import { CardsList } from "../_components/CardList";
import { Data } from "@/types/data";
import { getData } from "@/services/api";

const Page = async () => {
  const data = await getData(Data.Characters);
  const isLoading = !data;

  return (
    <>
      <SideNavigation />
      <div className="flex flex-wrap gap-8 justify-center py-1">
        {isLoading ? <div>Loading</div> : <CardsList characters={data} />}
      </div>
    </>
  );
};

export default Page;
