import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  PinIcon,
} from "../../../../../Icons";
import { EventsCardProps } from "./types";
import { formatDate } from "../../utils";

export default function EventsCard(event: EventsCardProps): JSX.Element {
  const {
    dateRange,
    name,
    hour,
    images,
    description,
    location,
    path,
    subscribeButtonText,
    calendarButtonText,
  } = event;

  return (
    <Link href={path} className="relative">
      <div className="flex h-[798px] w-full flex-col md:h-[810px]">
        <Image
          src={images?.background.url}
          alt={images?.background.alt}
          width={images?.background.width}
          height={images?.background.height}
          className="h-[220px] w-full rounded-xl object-cover"
        />

        <div className="mt-6 flex flex-1 flex-col justify-between space-y-6">
          <h3 className="text-left text-2xl font-normal leading-[32px] text-primary md:leading-[36px] xl:text-3xl">
            {name}
          </h3>

          <div className="space-y-4">
            <div className="lg:text- flex items-center text-lg font-normal text-darkGray md:text-xl lg:text-sm xl:text-xl">
              <CalendarIcon color="text-primary-foreground" className="mr-2" />

              <span className="ml-1">{`${formatDate(dateRange?.from)} a ${formatDate(dateRange?.to)}`}</span>
            </div>

            <div className="flex items-center text-lg font-normal text-darkGray md:text-xl lg:text-sm xl:text-xl">
              <PinIcon
                color="text-primary-foreground"
                className="mr-2 shrink-0"
                size={1}
              />

              <span className="ml-1">{location}</span>
            </div>

            <div className="flex items-start text-lg font-normal text-darkGray md:text-xl lg:text-sm xl:text-xl">
              <ClockIcon
                color="text-primary-foreground"
                className="mr-2"
                size={1.3}
              />

              <span className="ml-3">{hour}</span>
            </div>
          </div>

          <p className="line-clamp-4 text-left text-base font-medium text-lightGray md:text-xl lg:text-sm xl:text-xl">
            {description}
          </p>

          <div className="flex flex-col gap-4 lg:flex-row">
            <Button className="lg:text-xs xl:text-base">
              <CheckIcon className="shrink-0" />

              {subscribeButtonText ?? "Quero me inscrever"}
            </Button>

            <Button variant="outlined" className="lg:text-xs xl:text-base">
              <CalendarIcon className="shrink-0" />

              {calendarButtonText ?? "Adicionar a agenda"}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
