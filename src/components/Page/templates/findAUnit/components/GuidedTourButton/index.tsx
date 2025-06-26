import { Button } from "@/components/Button";
import TourGuideIcon from "@/components/Icons/TourGuideIcon";

export const GuidedTourButton = ({
  handleClick,
  shouldShow,
}: {
  shouldShow: boolean;
  handleClick: () => void;
}): JSX.Element | null => {
  if (!shouldShow) return null;

  return (
    <Button
      className="mb-6 mt-6 h-[65px] w-full items-center justify-center bg-primary-foreground pb-3 pt-3"
      onClick={handleClick}
    >
      <TourGuideIcon className="shrink-0" />

      <span className="text-wrap text-white">
        Faça um tour virtual e conheça nossa unidade
      </span>
    </Button>
  );
};
