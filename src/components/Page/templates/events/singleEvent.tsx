import PageLayout from "@/components/PageLayout";
import BaseContainer from "@/components/Container";
import { CalendarIcon, PinIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import { SingleEventRootProps } from "./types";
import IncomingEventsSection from "./components/IncomingEventsSection";
import InvitedMedicsSection from "./components/InvitedMedicsSection";
import SignupForm from "./components/SignupForm";
import TopicsCoveredSection from "./components/TopicsCoveredSection";
import { formatDate } from "./utils";

export function SingleEventRoot({
  id,
  data,
  breadcrumbs,
}: SingleEventRootProps): JSX.Element {
  const {
    name,
    description,
    dateRange,
    hour,
    location,
    topics,
    physicians,
    images,
    events,
  } = data;

  return (
    <>
      <PageLayout
        title={data.name}
        subtitle={data?.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="relative mt-14 md:mt-0 md:block">
          <Image
            src={images?.background.url}
            alt={images?.background.alt}
            width={images?.background.width}
            height={images?.background.height}
            priority
            className="h-[466px] w-full rounded-md object-cover"
          />
        </div>

        <div className="-mt-20 flex flex-col items-center justify-center md:mt-10 md:w-full md:flex-row md:items-start md:justify-between">
          <div className="relative flex flex-col items-center md:bottom-48 md:left-5 md:w-1/3 md:items-start">
            <Image
              src={images?.foreground.url}
              width={images?.foreground.width}
              height={images?.foreground.height}
              alt={images?.foreground.alt}
              priority
              className="size-32 rounded-2xl border-lightGray md:size-48 lg:size-80"
            />

            <h1 className="mt-10 block text-2xl font-medium leading-none text-primary md:hidden lg:text-[62px] lg:font-light">
              {name}
            </h1>

            <div className="left-5 mt-8 text-left">
              <div className="flex items-center text-lg text-darkGray">
                <CalendarIcon className="mr-2 text-primary md:ml-0" />

                <p>{`${formatDate(dateRange.from)} a ${formatDate(dateRange.to)}`}</p>
              </div>

              <div className="mt-4 flex items-center text-wrap text-sm text-darkGray">
                <PinIcon
                  size={24}
                  className="mr-2 shrink-0 text-primary md:ml-0"
                />

                <p>{location}</p>
              </div>

              <div className="mt-4 flex items-center text-lg text-darkGray">
                <ClockIcon size={24} className="mr-4 text-primary md:ml-0" />

                <p>{hour}</p>
              </div>
            </div>

            <div className="mt-10 hidden w-full justify-start md:flex">
              <SignupForm id={id} />
            </div>
          </div>

          <div className="mt-8 text-center md:ml-11 md:mt-0 md:w-1/2 md:text-left lg:ml-24 lg:flex-1">
            <h1 className="hidden text-4xl font-medium leading-none text-primary md:block lg:text-6xl lg:font-light">
              {name}
            </h1>

            <h1 className="block text-left text-2xl font-medium leading-none text-primary md:hidden">
              Sobre o evento
            </h1>

            <p className="my-6 text-left text-sm text-darkGray md:text-xl md:leading-[28px]">
              {description}
            </p>

            <div className="mt-10 hidden flex-col lg:flex">
              <InvitedMedicsSection physicians={physicians} />
            </div>

            <div className="hidden flex-col lg:flex">
              <TopicsCoveredSection coveredTopics={topics} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:-mt-32 md:flex-row md:gap-8 lg:hidden">
          <section className="flex-1">
            <InvitedMedicsSection physicians={physicians} />
          </section>

          <section className="flex-1">
            <TopicsCoveredSection coveredTopics={topics} />
          </section>
        </div>

        {events.length > 0 && (
          <div className="hidden md:block">
            <IncomingEventsSection events={events} />
          </div>
        )}
      </PageLayout>

      <div className="mt-10 block w-full justify-center md:hidden">
        <SignupForm id={id} />

        <BaseContainer>
          {events.length > 0 && <IncomingEventsSection events={events} />}
        </BaseContainer>
      </div>
    </>
  );
}
