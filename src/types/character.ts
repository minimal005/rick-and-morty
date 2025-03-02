import { All } from "./all";

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}
export type CharacterType = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface CharacterAllType extends All {
  results: CharacterType[];
}
