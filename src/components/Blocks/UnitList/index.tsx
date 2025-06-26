import BaseSwiper from "@/components/BaseSwiper";
import BaseSelect from "@/components/Select";
import UnitsCard from "@/components/Page/templates/findAUnit/components/UnitsCards";
import { UnitsCardProps } from "@/components/Page/templates/findAUnit/components/UnitsCards/types";
import InfoSection from "./InfoSection";
import { UnitListProps } from "./types";

const UnitList = ({
  title,
  description,
  units,
  showSideMenu = true,
  actionButton,
  moreInfoButtonText,
}: UnitListProps): JSX.Element => {
  const states = Array.from(
    new Set(units.map((unit) => unit.address.state)),
  ).map((state) => ({
    label: state,
    value: state,
  }));

  return (
    <div className="mb-10 flex w-full flex-col lg:flex-row lg:gap-8">
      {showSideMenu ? (
        <>
          <InfoSection title={title} content={description || ""}>
            <BaseSelect
              defaultValue="SP"
              className="mt-10 h-[54px] w-full rounded-[35px] border border-darkGray bg-white px-5 py-[10px] text-darkGray md:w-2/5 lg:w-[70%]"
              options={states}
            />
          </InfoSection>

          <BaseSwiper<UnitsCardProps>
            data={units}
            renderItem={(unit) => (
              <UnitsCard
                id={unit.id}
                name={unit.name}
                address={unit.address}
                entities={{
                  physicianSpecialties: unit.entities.physicianSpecialties,
                }}
                workingHours={unit.workingHours}
                segmentation={unit.segmentation}
                path={unit.path}
                actionButtonText={actionButton}
                infoButtonText={moreInfoButtonText}
              />
            )}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="px-4 lg:w-3/5"
          />
        </>
      ) : (
        <div className="flex w-full flex-col gap-10">
          {title && (
            <h2 className="text-center text-3xl font-bold text-primary md:text-title-lg xl:text-[50px]">
              {title}
            </h2>
          )}

          <div className="flex lg:hidden">
            <BaseSwiper
              data={units}
              hasArrows={units.length > 1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              renderItem={(unit) => (
                <UnitsCard
                  id={unit.id}
                  name={unit.name}
                  address={unit.address}
                  entities={{
                    physicianSpecialties: unit.entities.physicianSpecialties,
                  }}
                  workingHours={unit.workingHours ?? []}
                  segmentation={unit.segmentation}
                  path={unit.path}
                  actionButtonText={actionButton}
                  infoButtonText={moreInfoButtonText}
                />
              )}
            />
          </div>

          <div className="hidden w-full flex-wrap gap-8 px-4 lg:flex">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]"
              >
                <UnitsCard
                  id={unit.id}
                  name={unit.name}
                  address={unit.address}
                  workingHours={unit.workingHours}
                  entities={{
                    physicianSpecialties: unit.entities.physicianSpecialties,
                  }}
                  segmentation={unit.segmentation}
                  path={unit.path}
                  actionButtonText={actionButton}
                  infoButtonText={moreInfoButtonText}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitList;
