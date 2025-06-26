import BaseContainer from "@/components/Container";
import OptionsActionsCard from "@/components/Page/templates/home/components/OptionsActionsCard";
import { HomeRootProps } from "./types";
import BannerWithSearchAndOptions from "./components/BannerWithSearchAndOptions/BannerWithSearchAndOptions";
import BannerSliderHome from "./components/BannerSliderHome";
import FaqSectionHome from "./components/FaqSectionHome";
import SearchInputMobile from "./components/SearchInputMobile";
import InformationSlider from "./components/InformationSlider";
import { InformationItem } from "./components/InformationSlider/types";
import ServicesSectionHome from "./components/ServiceSectionHome";
import NearbyUnits from "./components/NearbyUnits";
import NearbyUnitsMobile from "./components/NearbyUnitsMobile";

export function HomeRoot({ data }: HomeRootProps): JSX.Element {
  return (
    <main>
      <div className="flex w-full flex-col">
        <BannerWithSearchAndOptions data={data} />
      </div>

      <BaseContainer className="flex w-full flex-col py-0 lg:py-14">
        <SearchInputMobile />

        <OptionsActionsCard data={data.actions} rounded="rounded-lg" />

        <ServicesSectionHome
          title={data.discover.title}
          description={data.discover.description}
          links={data.discover.links}
        />

        <div className="hidden lg:block">
          <InformationSlider
            items={
              data.banner.filter(
                (item) => item.logo !== undefined,
              ) as InformationItem[]
            }
            isSwiper
          />

          <NearbyUnits
            title={data.units.title}
            buttonText={data.units.buttonText}
            actionButton={data.units.actionButton}
            moreInfoButtonText={data.units.moreInfoButtonText}
            appointmentPath={data.units.appointmentPath}
            entries={data.units.entries}
          />
        </div>

        <NearbyUnitsMobile entries={data.units.entries} />

        <BannerSliderHome data={data.media} />
      </BaseContainer>

      <FaqSectionHome {...data.faq} />
    </main>
  );
}
