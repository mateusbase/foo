import PageLayout from "@/components/PageLayout";
import { HealthSpaceBanner } from "./components/HealthSpaceBanner";
import ContactBanner from "./components/ContactBanner";
import {
  CardsSwiper,
  LocationsSwiper,
  VideosSwiper,
} from "./components/OCWomanSwipers";
import ServicesLocations from "./components/ServicesLocations";

export default function OcWomanScreen(): JSX.Element {
  return (
    <PageLayout
      title="OC Mulher"
      subtitle="O OC Mulher é um programa dedicado a saúde da mulher para o cuidado integral. O objetivo é o controle dos cânceres femininos com estratégias de prevenção, diagnóstico precoce, tratamento e suporte multiprofissional continuado."
      showBreadcrumb
    >
      <HealthSpaceBanner />

      {CardsSwiper()}

      <ContactBanner />

      {VideosSwiper()}

      <ServicesLocations />

      {LocationsSwiper()}
    </PageLayout>
  );
}
