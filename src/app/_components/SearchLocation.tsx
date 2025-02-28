import { FormSide } from "./Form";
import { Select } from "./Select";

export const SearchLocation = () => {
  return (
    <FormSide>
      <Select id="type">
        <option value="SpaceStation" className="bg-gray-700 text-primary-100">
          Space station
        </option>
        <option value="Dimension" className="bg-gray-700 text-primary-100">
          Dimension
        </option>
      </Select>
    </FormSide>
  );
};
