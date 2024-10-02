import { events } from "./eventMocks";
import ListUpcomingEventCardsMobile from "./components/ListUpcomingEventCardsMobile";
import UpcomingEventTextMobile from "./components/UpcomingEventTextMobile";

export default function UpcomingEventsSectionMobile(): JSX.Element {
  return (
    <div className="mb-6 flex flex-col items-start justify-center gap-8 md:hidden lg:flex-row">
      <UpcomingEventTextMobile />

      <ListUpcomingEventCardsMobile events={events} />
    </div>
  );
}
