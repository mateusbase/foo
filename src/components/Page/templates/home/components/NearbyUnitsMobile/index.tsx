import ListNearbyUnitCardsMobile from "./components/ListNearbyUnitCardsMobile";
import NearbyUnitTextMobile from "./components/NearbyUnitTextMobile";

interface NearbyUnitsMobileProps {
  entries: Array<{
    id: string;
    path: string;
    name: string;
    address: {
      street: string;
      number: string;
      complement?: string;
      cep: string;
      city: string;
      state: string;
      latitude: string;
      longitude: string;
      mapLink: string;
    };
    workingHours?: Array<{
      day: string;
      hour: string;
    }>;
    segmentation: {
      ocUnit: boolean;
      ocpmUnit: boolean;
      isPartner: boolean;
      type: string;
    };
    physicianSpecialties?: string[];
  }>;
}

export default function NearbyUnitsMobile({
  entries,
}: NearbyUnitsMobileProps): JSX.Element {
  return (
    <div className="block w-full justify-center py-2 lg:hidden">
      <NearbyUnitTextMobile />

      <ListNearbyUnitCardsMobile
        units={entries.map((unit, index) => ({
          id: index,
          unitName: unit.name,
          address: `${unit.address.street}, ${unit.address.number}`,
          complement: unit.address.complement || "",
          city: `${unit.address.city} - ${unit.address.state}`,
          hours: unit.workingHours?.[0]?.hour || "",
          specialties: unit.physicianSpecialties || [],
          path: unit.path,
          segmentation: unit.segmentation,
        }))}
      />
    </div>
  );
}
