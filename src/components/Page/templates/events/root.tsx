import PageLayout from "@/components/PageLayout";
import DynamicBanner from "@/components/Blocks/DynamicBanner";
import { Button } from "@/components/Button";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import BaseSelect from "@/components/Select";
import EventsCard from "@/components/Page/templates/events/components/EventsCard";
import { EventsRootProps } from "./types";

export function EventsRoot({
  data,
  breadcrumbs,
}: EventsRootProps): JSX.Element {
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  const { eventTopics, eventTypes } = data;

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <DynamicBanner
          image={data.mainEvent.image}
          layout="horizontal"
          imagePosition="right"
          theme="gradient"
          textAlign="left"
          roundedPosition="br"
          subtitle={
            data.mainEvent.description ||
            "Um bate papo com especialistas do mundo todo sobre o crescimento do câncer em grandes cidades."
          }
          title={data.mainEvent.title}
          description={data.mainEvent.description}
          event
          shouldShowButton
        />

        <div className="my-10 flex flex-col gap-4 border-gray-300 pb-4 md:flex-row md:items-center md:justify-between md:border-b md:px-0 lg:mt-20">
          <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <BaseSelect
                placeholder="Tipo de evento"
                className="border-primary text-primary sm:w-[260px] lg:w-full"
                options={eventTypes?.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
              />

              <BaseSelect
                placeholder="Tema"
                className="border-primary text-primary sm:w-[260px] lg:w-full"
                options={eventTopics?.map((item) => ({
                  key: item.id,
                  value: item.id,
                  label: item.name,
                }))}
              />
            </div>

            <div className="mt-5 flex w-full justify-center sm:mt-0 md:justify-end lg:justify-start">
              <Button className="w-full text-white md:w-40">Buscar</Button>
            </div>
          </div>

          <div className="hidden cursor-pointer items-center justify-end gap-2 sm:justify-start lg:flex">
            <SortingFilterDropdown
              options={sortingFilterOptions}
              defaultSelectedKey={sortingFilterOptions[0].value}
              onChange={handleChange}
            />
          </div>
        </div>

        {data.events && (
          <>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
              {data.events.map((event) => (
                <EventsCard key={event.id} {...event} />
              ))}
            </div>

            <div className="my-10 flex justify-center lg:justify-start">
              <Button
                variant="outlined"
                className="h-[50px] w-full items-center justify-center rounded-sm border border-primary pl-3 text-lg leading-[22px] text-primary md:flex lg:w-[228px]"
              >
                [+] Ver mais
              </Button>
            </div>
          </>
        )}
      </PageLayout>
    </main>
  );
}
