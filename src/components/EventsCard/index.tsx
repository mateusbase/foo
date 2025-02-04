import Link from "next/link";
import { Button } from "@heroui/react";
import { CalendarIcon, CheckIcon, ClockIcon, PinIcon } from "../Icons";
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
    <Link href={`/medicos/eventos/${eventSlug}`}>
      <div className="flex min-h-[798px] w-full max-w-[514px] flex-col rounded-md">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="max-h-[260px] w-full rounded-lg border-1 border-lightGray object-cover"
        />

        <div className="mt-6 flex flex-1 flex-col justify-between space-y-6">
          <h3 className="text-left text-2xl font-normal leading-[32px] text-primary md:leading-[36px] lg:text-3xl">
            {event.title}
          </h3>

          <div className="space-y-4">
            <div className="flex items-center text-lg font-normal text-darkGray md:text-xl">
              <CalendarIcon color="text-primary-foreground" className="mr-2" />

              <span>{event.date}</span>
            </div>

            <div className="flex items-center text-[18px] font-normal text-darkGray md:text-xl">
              <PinIcon color="text-primary-foreground" className="mr-2" />
              <span>{event.location}</span>
            </div>

            <div className="ml-7 text-left text-base font-normal text-lightGray">
              <span>{event.address}</span>
            </div>

            <div className="flex items-center text-[18px] font-normal text-darkGray md:text-xl">
              <ClockIcon color="text-primary-foreground" className="mr-2" />
              <span>{event.time}</span>
            </div>
          </div>

          <p className="text-left text-base font-medium leading-[24px] text-lightGray md:text-xl md:leading-[28px]">
            {event.description}
          </p>

          <div className="flex flex-col gap-4 lg:flex-row">
            <BaseButton
              className="text-white"
              color="primary"
              variant="solid"
              radius="sm"
              startContent={<CheckIcon />}
            >
              Quero me inscrever
            </BaseButton>
            <BaseButton
              color="primary"
              variant="bordered"
              radius="sm"
              startContent={<CalendarIcon />}
            >
              Adicionar a agenda
            </BaseButton>
          </div>
        </div>
      </div>
    </Link>
  );
}
