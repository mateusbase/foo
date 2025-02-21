import UnitsCard from "@/components/NearbyUnits/components/UnitsCard";

export interface UnitsCardsProps {
  id: number;
  unitName: string;
  address: string;
  complement: string;
  city: string;
  hours: string;
  specialties: string[];
  isPartner?: boolean;
}

interface UnitsCardsComponentProps {
  units: UnitsCardsProps[];
}

const UnitsCards = ({ units }: UnitsCardsComponentProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-20 md:grid md:grid-cols-2 lg:grid-cols-3">
      {units.map((unit) => (
        <UnitsCard
          key={unit.id}
          id={unit.id}
          unitName={unit.unitName}
          address={unit.address}
          complement={unit.complement}
          city={unit.city}
          hours={unit.hours}
          specialties={unit.specialties}
          isPartner={unit.isPartner}
        />
      ))}
    </div>
  );
};

export default UnitsCards;
