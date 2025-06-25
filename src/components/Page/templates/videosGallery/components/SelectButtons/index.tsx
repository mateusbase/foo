import React from "react";

interface SelectButtonsProps {
  text: string;
  isSelected: boolean;
  handleClick: (value: string | number) => void;
  width: number;
}

const SelectButtons: React.FC<SelectButtonsProps> = ({
  text,
  isSelected,
  handleClick,
  width = 204,
}) => {
  return (
    <button
      onClick={() => handleClick(text)}
      type="button"
      className={`flex h-[54px] shrink-0 items-center justify-center rounded-md border border-primary px-4 py-2 transition-colors duration-200 ${
        isSelected ? "bg-primary text-white" : "bg-white text-primary"
      }`}
      style={{ width: `${width}px` }}
    >
      {text}
    </button>
  );
};

export default SelectButtons;
