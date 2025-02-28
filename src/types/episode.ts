import { All } from "./all";

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export interface EpisodeAllType extends All {
  results: EpisodeType[];
}
