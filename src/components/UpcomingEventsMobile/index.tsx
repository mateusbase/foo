import { events } from "./eventMocks";
import ListUpcomingEventCardsMobile from "./components/ListUpcomingEventCardsMobile";
import UpcomingEventTextMobile from "./components/UpcomingEventTextMobile";

export default function UpcomingEventsSectionMobile(): JSX.Element {
  return (
    <div className="my-6 flex flex-col items-start justify-center gap-8 lg:hidden xl:flex-row">
      <UpcomingEventTextMobile />

      <ListUpcomingEventCardsMobile events={events} />
    </div>
  );
}
