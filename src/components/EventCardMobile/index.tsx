import { IoIosCalendar } from "react-icons/io";
import { EventCardMobileProps } from "./type";

export default function EventCardMobile({
  eventName,
  dateEvent,
}: EventCardMobileProps): JSX.Element {
  return (
    <div className="flex min-h-32 w-full flex-col justify-between gap-2 rounded-xl border-1 border-primary p-6">
      <div className="flex flex-col">
        <p className="text-base text-primary">{eventName}</p>
      </div>

      <div className="flex items-center gap-1">
        <IoIosCalendar className="-ml-2 text-primary-foreground" size={25} />
        <h1 className="text-sm">{dateEvent}</h1>
      </div>
    </div>
  );
}
