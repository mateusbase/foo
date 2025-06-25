import BaseSelect from "../Select";
import { SortingFilterDropdownProps } from "./type";

const SortingFilterDropdown = ({
  options,
  defaultSelectedKey,
  onChange,
  className = "",
}: SortingFilterDropdownProps): JSX.Element => {
  return (
    <BaseSelect
      className={`w-[200px] border-transparent text-primary ${className}`}
      value={defaultSelectedKey as string}
      options={options}
      onChange={onChange}
    />
  );
};

export default SortingFilterDropdown;
