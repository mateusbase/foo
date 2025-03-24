import PageLayout from "@/components/PageLayout";
import { HealthSpaceBanner } from "./components/HealthSpaceBanner";
import ContactBanner from "./components/ContactBanner";
import {
  CardsSwiper,
  LocationsSwiper,
  VideosSwiper,
} from "./components/OCWomanSwipers";
import ServicesLocations from "./components/ServicesLocations";
import womanBenefitsMock from "./data/woman-benefits.mock";
import BenefitsCards from "./components/benefitsCards";

export default function OcWomanScreen(): JSX.Element {
  return (
    <PageLayout
      title="OC Mulher"
      subtitle="O OC Mulher é um programa dedicado a saúde da mulher para o cuidado integral. O objetivo é o controle dos cânceres femininos com estratégias de prevenção, diagnóstico precoce, tratamento e suporte multiprofissional continuado."
      showBreadcrumb
    >
      <HealthSpaceBanner />

      <div className="hidden md:block lg:hidden">
        <div className="-mb-20 md:grid md:grid-cols-2">
          {womanBenefitsMock.slice(0, 2).map((benefit) => (
            <div key={benefit.id}>
              <BenefitsCards
                id={benefit.id}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 md:flex md:justify-center">
          {womanBenefitsMock.slice(2, 3).map((benefit) => (
            <div key={benefit.id} className="md:w-1/2">
              <BenefitsCards
                id={benefit.id}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-row lg:justify-between">
        {womanBenefitsMock.map((benefit) => (
          <div key={benefit.id} className="lg:w-1/3">
            <BenefitsCards
              id={benefit.id}
              title={benefit.title}
              description={benefit.description}
            />
          </div>
        ))}
      </div>

      {CardsSwiper()}

      <ContactBanner />

      {VideosSwiper()}

      <div className="mb-10 flex w-full flex-col lg:h-[694px] lg:flex-row lg:gap-8">
        <ServicesLocations />

        {LocationsSwiper()}
      </div>
    </PageLayout>
  );
}
