import BaseContainer from "@/components/Container";
import OptionsActionsCard from "@/components/Page/templates/home/components/OptionsActionsCard";
import { PhysicianHomeRootProps } from "./types";
import BannerWithSearchAndOptions from "../home/components/BannerWithSearchAndOptions/BannerWithSearchAndOptions";
import FaqSectionHome from "../home/components/FaqSectionHome";
import BannerSliderHome from "../home/components/BannerSliderHome";
import InformationSlider from "../home/components/InformationSlider";
import { InformationItem } from "../home/components/InformationSlider/types";
import ServicesSectionHome from "../home/components/ServiceSectionHome";
import UpcomingEventsSection from "./components/UpcomingEvents";

export function PhysicianHomeRoot({
  data,
}: PhysicianHomeRootProps): JSX.Element {
  const { actions, banner, discover, events, faq, media } = data;

  return (
    <main>
      <div className="flex w-full flex-col">
        <BannerWithSearchAndOptions data={data} />
      </div>

      <BaseContainer className="flex w-full flex-col py-0 lg:py-14">
        <OptionsActionsCard data={actions} rounded="rounded-lg" />

        <ServicesSectionHome
          title={discover.title}
          description={discover.description}
          links={discover.links}
        />

        <div className="hidden lg:block">
          <InformationSlider
            items={
              banner.filter(
                (item) => item.logo !== undefined,
              ) as InformationItem[]
            }
            backgroundType="dark"
            isSwiper
          />
        </div>

        <UpcomingEventsSection
          events={events.events}
          name={events.title}
          description={events.description}
        />

        <BannerSliderHome data={media} />
      </BaseContainer>

      <FaqSectionHome {...faq} />
    </main>
  );
}
