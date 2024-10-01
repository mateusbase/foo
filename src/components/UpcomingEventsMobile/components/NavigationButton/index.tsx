import React, { forwardRef } from "react";

type NavigationButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  function NavigationButton({ onClick, icon, label }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
        aria-label={label}
        onClick={onClick}
      >
        {icon}
      </button>
    );
  },
);

NavigationButton.displayName = "NavigationButton";

export default NavigationButton;
