import { IoIosCalendar } from "react-icons/io";
import Link from "next/link";
import { EventCardMobileProps } from "./type";
import { formatDate } from "../../../events/utils";

export default function EventCardMobile({
  eventName,
  dateEvent,
  path,
}: EventCardMobileProps): JSX.Element {
  return (
    <Link href={path} className="relative w-full">
      <div className="flex min-h-32 w-full flex-col justify-between gap-2 rounded-xl border border-primary p-6">
        <p className="text-base text-primary">{eventName}</p>

        <div className="flex items-center gap-1">
          <IoIosCalendar className="-ml-2 text-primary-foreground" size={25} />
          <h1 className="text-sm">{`${formatDate(dateEvent.from)} a ${formatDate(dateEvent.to)}`}</h1>
        </div>
      </div>
    </Link>
  );
}
