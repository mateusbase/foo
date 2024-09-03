import { FaClock } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import EventCard from "../EventCard";

export default function EventComponent({
  eventTitle,
  address,
  city,
  dateEvent,
  eventHour,
  hours,
}: EventComponentProps): JSX.Element {
  return (
    <div className="flex h-full w-[514px] flex-col items-start justify-center p-4">
      <EventCard image="https://placehold.co/1920x600/000000/FFF" />
      <p className="mt-8 text-left text-3xl font-bold text-primary">
        {eventTitle}
      </p>

      <IoIosCalendar color="#00B6AD" className="-ml-2" size={40} />
      <FaLocationDot color="#00B6AD" className="-ml-2" size={40} />
      <FaClock color="#00B6AD" className="-ml-2" size={40} />
    </div>
  );
}
