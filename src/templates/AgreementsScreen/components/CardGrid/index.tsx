import { unitsDataMock } from "../../unitsDataMock";
import UnitsCard from "../UnitCard";

interface CardGridProps {
  visibleCards: number;
}

const CardGrid = ({ visibleCards }: CardGridProps): JSX.Element => {
  return (
    <div className="grid w-full grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {unitsDataMock.slice(0, visibleCards).map((unit) => (
        <UnitsCard key={unit.id} {...unit} />
      ))}
    </div>
  );
};

export default CardGrid;
