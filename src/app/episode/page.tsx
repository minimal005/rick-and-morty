import { Metadata } from "next";
import { SearchEpisode } from "../_components/SearchEpisode";
import EpisodeCard from "../_components/EpisodeCard";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Episode",
};

export default function Page() {
  return (
    <Container fluid="md">
      <section className="grid tabletMax:grid-cols-[16rem_1fr] h-full gap-12">
        <SearchEpisode />
        <div className="flex flex-wrap gap-8 justify-center py-1">
          <EpisodeCard
            name="Pilot"
            episode="S01E01"
            airDate="December 2, 2013"
            charactersCount={3}
          />
          <EpisodeCard
            name="Pilot"
            episode="S01E01"
            airDate="December 2, 2013"
            charactersCount={3}
          />
          <EpisodeCard
            name="Pilot"
            episode="S01E01"
            airDate="December 2, 2013"
            charactersCount={3}
          />
        </div>
      </section>
    </Container>
  );
}
