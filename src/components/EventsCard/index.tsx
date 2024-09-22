import { Calendar, MapPin, Clock, PlusCircle, Bookmark } from "lucide-react";
import Link from "next/link";
import BaseButton from "../Button";

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
      <div className="flex h-full w-full max-w-[514px] flex-col justify-between rounded-md p-6">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-[260px] w-full rounded-md object-cover"
        />

        <div className="mt-6 flex flex-1 flex-col justify-between space-y-6">
          <h3 className="text-left text-[24px] font-extrabold leading-[32px] text-primary md:text-[30px] md:leading-[36px]">
            {event.title}
          </h3>

          <div className="space-y-4">
            <div className="flex items-center text-[18px] font-extrabold text-darkGray md:text-[20px]">
              <Calendar className="mr-2" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center text-[18px] font-extrabold text-darkGray md:text-[20px]">
              <MapPin className="mr-2" />
              <span>{event.location}</span>
            </div>

            <div className="ml-7 text-[18px] font-extrabold text-darkGray md:text-[20px]">
              <span>{event.address}</span>
            </div>

            <div className="flex items-center text-[18px] font-extrabold text-darkGray md:text-[20px]">
              <Clock className="mr-2" />
              <span>{event.time}</span>
            </div>
          </div>

          <p className="text-left text-[16px] font-medium leading-[24px] text-lightGray md:text-[20px] md:leading-[28px]">
            {event.description}
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
            <BaseButton
              color="primary"
              size="lg"
              startContent={<PlusCircle size={24} className="mr-2" />}
              className="w-full text-white md:w-auto"
              width="100%"
            >
              Quero me inscrever
            </BaseButton>

            <BaseButton
              color="primary"
              variant="bordered"
              size="lg"
              startContent={<Bookmark size={24} className="mr-2" />}
              className="w-full border-primary text-primary md:w-auto"
              width="100%"
            >
              Adicionar à agenda
            </BaseButton>
          </div>
        </div>
      </div>
    </Link>
  );
}
