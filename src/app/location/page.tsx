import { Metadata } from "next";
import { SearchLocation } from "../_components/SearchLocation";
import LocationCard from "../_components/LocationCard";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Location",
};

export default function Page() {
  return (
    <Container fluid="md">
      <section className="grid tabletMax:grid-cols-[16rem_1fr] h-full gap-12">
        <SearchLocation />
        <div className="flex flex-wrap gap-8 justify-center py-1">
          <LocationCard
            name="Testicle Monster Dimension"
            dimension="unknown"
            type="Space station"
            residentsCount={3}
          />
          <LocationCard
            name="Testicle Monster Dimension"
            dimension="unknown"
            type="Space station"
            residentsCount={3}
          />
          <LocationCard
            name="Testicle Monster Dimension"
            dimension="unknown"
            type="Space station"
            residentsCount={3}
          />
        </div>
      </section>
    </Container>
  );
}
