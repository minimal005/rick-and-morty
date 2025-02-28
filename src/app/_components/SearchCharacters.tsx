import { FormSide } from "./Form";
import { Select } from "./Select";

export const SideNavigation = () => {
  return (
    <FormSide>
      <Select id="species">
        <option value="Human" className="bg-gray-700 text-primary-100 ">
          Human
        </option>
        <option value="Alien" className="bg-gray-700 text-primary-100 ">
          Alien
        </option>
        <option value="Robot" className="bg-gray-700 text-primary-100">
          Robot
        </option>
      </Select>

      <Select id="gender">
        <option value="Male" className="bg-gray-700 text-primary-100">
          Male
        </option>
        <option value="Female" className="bg-gray-700 text-primary-100">
          Female
        </option>
        <option value="Genderless" className="bg-gray-700 text-primary-100">
          Genderless
        </option>
        <option value="Unknown" className="bg-gray-700 text-primary-100">
          Unknown
        </option>
      </Select>
    </FormSide>
  );
};
