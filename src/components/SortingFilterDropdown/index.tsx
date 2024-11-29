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
      label=""
      labelColor="primary"
      className={`w-[170px] text-primary ${className}`}
      noBorder
      color="primary"
      defaultSelectedKey={defaultSelectedKey}
      options={options}
      onChange={onChange}
    />
  );
};

export default SortingFilterDropdown;
