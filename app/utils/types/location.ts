import { All } from "./all";

export type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export interface LocationAllType extends All {
  results: LocationType[];
}
