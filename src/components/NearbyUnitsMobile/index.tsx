import { unitsData } from "./components/utils";
import ListNearbyUnitCardsMobile from "./components/ListNearbyUnitCardsMobile";
import NearbyUnitTextMobile from "./components/NearbyUnitTextMobile";

export default function NearbyUnitsMobile(): JSX.Element {
  return (
    <div className="w-full py-2">
      <NearbyUnitTextMobile />

      <ListNearbyUnitCardsMobile units={unitsData} />
    </div>
  );
}
