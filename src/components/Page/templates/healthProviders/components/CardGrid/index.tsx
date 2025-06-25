import { UnitActionsProps } from "../../types";
import UnitsCard from "../../../findAUnit/components/UnitsCards";
import { UnitsCardProps } from "../../../findAUnit/components/UnitsCards/types";

interface CardGridProps {
  visibleCards: number;
  unitActions: UnitActionsProps;
  units: UnitsCardProps[];
}

const CardGrid = ({
  visibleCards,
  unitActions,
  units,
}: CardGridProps): JSX.Element => {
  return (
    <div className="grid w-full grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {units.slice(0, visibleCards).map((unit) => (
        <UnitsCard
          key={unit.id}
          {...unit}
          actionButtonText={unitActions.actionButtonText}
          infoButtonText={unitActions.infoButtonText}
        />
      ))}
    </div>
  );
};

export default CardGrid;
