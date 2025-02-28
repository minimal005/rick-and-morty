import { FormSide } from "./Form";
import { Input } from "./Input";

export const SearchEpisode = () => {
  return (
    <FormSide>
      <Input value="code" type="number" min={1} max={51} />
    </FormSide>
  );
};
