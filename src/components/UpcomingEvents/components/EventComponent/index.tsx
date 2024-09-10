import { FaClock } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { FiCheckSquare } from "react-icons/fi";
import { EventComponentProps } from "./types";
import EventCard from "../EventCard";

export default function EventComponent({
  eventTitle,
  address,
  location,
  city,
  dateEvent,
  eventHour,
  hours,
  description,
}: EventComponentProps): JSX.Element {
  return (
    <section className="h-[700px] w-[514px]">
      <div className="flex h-full flex-col items-start">
        <EventCard image="https://placehold.co/480x150/000000/FFF" />
        <p className="mt-8 text-left text-3xl font-bold text-primary">
          {eventTitle}
        </p>

        <div className="mt-5 flex flex-row gap-4">
          <IoIosCalendar color="#00B6AD" size={29} />
          <p className="text-xl font-bold text-gray-600">{dateEvent}</p>
        </div>

        <div className="mt-5 flex flex-row gap-4">
          <FaLocationDot color="#00B6AD" size={29} />
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-600">{location}</p>
            <p className="text-xl">{address}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-row gap-4">
          <FaClock color="#00B6AD" size={29} />
          <p className="text-xl font-bold text-gray-600">{eventHour}</p>
        </div>

        <div className="mt-5">
          <p>{description}</p>
        </div>
      </div>
      <div className="mb-12 mt-10 flex gap-4">
        <Button
          className="font-bold text-white"
          color="primary"
          variant="solid"
          radius="sm"
          startContent={<FiCheckSquare size={23} />}
        >
          Quero me inscrever
        </Button>
        <Button
          className="font-bold"
          color="primary"
          variant="bordered"
          radius="sm"
          startContent={<IoIosCalendar size={23} />}
        >
          Adicionar a agenda
        </Button>
      </div>
    </section>
  );
}
