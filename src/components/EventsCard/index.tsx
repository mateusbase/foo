import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { FiCheckSquare } from "react-icons/fi";
import { IoIosCalendar } from "react-icons/io";
import { Button } from "@nextui-org/react";
import { UserIcon } from "../icons";

export default function EventCard({
  event,
}: {
  event: {
    title: string;
    date: string;
    location: string;
    address: string;
    time: string;
    description: string;
    imageUrl: string;
  };
}): JSX.Element {
  const eventSlug = event.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/eventos/${eventSlug}`}>
      <div className="flex size-full min-h-[798px] max-w-[514px] flex-col justify-between rounded-md p-6">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-[260px] w-full rounded-md object-cover"
        />

        <div className="mt-6 flex flex-1 flex-col justify-between space-y-6">
          <h3 className="text-left text-2xl font-normal leading-[32px] text-primary md:text-3xl md:leading-[36px]">
            {event.title}
          </h3>

          <div className="space-y-4">
            <div className="flex items-center text-lg font-normal text-darkGray md:text-xl">
              <UserIcon color="text-primary" className="mr-2 text-primary" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center text-[18px] font-normal text-darkGray md:text-xl">
              <MapPin className="mr-2 text-primary" />
              <span>{event.location}</span>
            </div>

            <div className="ml-7 text-[18px] font-normal text-darkGray md:text-xl">
              <span>{event.address}</span>
            </div>

            <div className="flex items-center text-[18px] font-normal text-darkGray md:text-xl">
              <Clock className="mr-2 text-primary" />
              <span>{event.time}</span>
            </div>
          </div>

          <p className="text-left text-base font-medium leading-[24px] text-lightGray md:text-xl md:leading-[28px]">
            {event.description}
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
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
        </div>
      </div>
    </Link>
  );
}
