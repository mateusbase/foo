import { unitsData } from "./components/utils";
import ListNearbyUnitCardsMobile from "./components/ListNearbyUnitCardsMobile";
import NearbyUnitTextMobile from "./components/NearbyUnitTextMobile";

export default function NearbyUnitsMobile(): JSX.Element {
  return (
    <div className="justifiy-center block w-full py-2 lg:hidden">
      <NearbyUnitTextMobile />

      <ListNearbyUnitCardsMobile units={unitsData} />
    </div>
  );
}
