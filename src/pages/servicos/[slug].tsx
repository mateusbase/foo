import { useRouter } from "next/router";
import Page from "@/components/Page";
import dynamic from "next/dynamic";
import { healthServices1 } from "@/templates/ServicesScreen/data/servicesData";

const ServiceScreen = dynamic(() => import("@/templates/ServiceScreen"));
const OcCareLineScreen = dynamic(() => import("@/templates/OcCareLineScreen"));

const Service = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;

  const slugWithoutAccent = (slug as string)
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const service = healthServices1.find(
    (item) => item.slug === slugWithoutAccent,
  );

  const renderServiceScreen = (): JSX.Element => {
    switch (service?.slug) {
      case "oc-linha-de-cuidado":
        return <OcCareLineScreen />;
      default:
        return <ServiceScreen />;
    }
  };

  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Serviço"
      description="Serviço"
    >
      {renderServiceScreen()}
    </Page>
  );
};

export default Service;
