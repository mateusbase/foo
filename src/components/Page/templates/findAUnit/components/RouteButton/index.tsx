import { Button } from "@/components/Button";
import { RouteIcon } from "lucide-react";

export const RouteButton = ({
  handleClick,
}: {
  handleClick: () => void;
}): JSX.Element => {
  return (
    <Button
      className="mt-6 flex h-[44px] w-full items-center justify-center border border-primary bg-white text-primary"
      onClick={handleClick}
    >
      <RouteIcon className="shrink-0" />

      <span className="text-wrap">Traçar rota</span>
    </Button>
  );
};
