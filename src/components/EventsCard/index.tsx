import Link from "next/link";
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
      <div className="flex size-full min-h-[798px] w-full flex-col rounded-md">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="max-h-[260px] w-full rounded-lg border border-lightGray object-cover"
        />

        <div className="mt-6 flex flex-1 flex-col justify-between space-y-6">
          <h3 className="line-clamp-2 text-left text-2xl font-normal leading-[32px] text-primary md:leading-[36px] lg:text-3xl">
            {event.title}
          </h3>

          <div className="flex w-[90%] flex-col gap-8">
            <div className="flex items-center text-lg font-normal text-darkGray md:text-xl">
              <CalendarIcon className="mr-2 text-primary" />
              <span className="ml-1">{event.date}</span>
            </div>

            <div className="flex items-start gap-2 text-[18px] font-normal text-darkGray md:text-xl">
              <PinIcon className="text-primary" />
              <div className="flex flex-col text-left">
                <span>{event.location}</span>
                <span className="text-lightGray">{event.address}</span>
              </div>
            </div>

            <div className="flex items-center text-[18px] font-normal text-darkGray md:text-xl">
              <ClockIcon className="mr-2 text-primary" />
              <span className="ml-3">{event.time}</span>
            </div>
          </div>

          <p className="line-clamp-3 w-[90%] text-left text-base font-medium leading-[24px] text-lightGray md:text-xl md:leading-[28px]">
            {event.description}
          </p>

          <div className="mt-auto flex flex-col gap-4 lg:flex-row lg:gap-2 xl:gap-4">
            <BaseButton
              className="text-white lg:text-sm xl:w-[229px] xl:text-base"
              color="primary"
              variant="solid"
              radius="sm"
              startContent={<CheckIcon className="shrink-0" />}
            >
              Quero me inscrever
            </BaseButton>

            <BaseButton
              color="primary"
              variant="bordered"
              radius="sm"
              startContent={<CalendarIcon className="shrink-0" />}
              className="lg:text-sm xl:w-[215px] xl:text-base"
            >
              Adicionar a agenda
            </BaseButton>
          </div>
        </div>
      </div>
    </Link>
  );
}
