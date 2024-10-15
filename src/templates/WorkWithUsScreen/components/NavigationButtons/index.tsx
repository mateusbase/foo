import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavigationButtonsProps } from "./types";

export const NavigationButtons = ({
  prevRef,
  nextRef,
}: NavigationButtonsProps): JSX.Element => {
  return (
    <div className="mb-10 mt-4 flex w-full justify-center space-x-4">
      <button
        ref={prevRef}
        type="button"
        className="group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
        aria-label="Previous"
      >
        <IoIosArrowBack
          className="text-primary-foreground dark:text-gray-800"
          size={35}
        />
      </button>
      <button
        ref={nextRef}
        type="button"
        className="group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
        aria-label="Next"
      >
        <IoIosArrowForward
          className="text-primary-foreground dark:text-gray-800"
          size={35}
        />
      </button>
    </div>
  );
};
