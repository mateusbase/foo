import {
  TreatmentsIcon,
  MicroscopeIcon,
  ServiceIcon,
  AllOfCancerIcon,
} from "@/components/Icons";
import ListServiceCardsMobile from "./components/ListServiceCardsMobile";
import ServiceTextMobile from "./components/ServiceTextMobile";
import PrecisionMedicineIcon from "../Icons/PrecisionMedicineIcon";

export default function ServicesSectionMobile(): JSX.Element {
  const services = [
    {
      id: 1,
      title: "Tratamentos",
      icon: <TreatmentsIcon color="text-primary-foreground" size={1} />,
      path: "/servicos/#tratamentos",
    },
    {
      id: 2,
      title: "Diagnósticos",
      icon: <MicroscopeIcon color="text-primary-foreground" size={1} />,
      path: "/servicos/#diagnósticos",
    },
    {
      id: 3,
      title: "Serviços",
      icon: <ServiceIcon color="text-primary-foreground" size={1} />,
      path: "/servicos",
    },
    {
      id: 4,
      title: "Tudo sobre o câncer",
      icon: <AllOfCancerIcon color="text-primary-foreground" size={1} />,
      path: "/tudo-sobre-o-cancer",
    },
    {
      id: 5,
      title: "Medicina de precisão",
      icon: <PrecisionMedicineIcon color="text-primary-foreground" size={1} />,
      path: "/medicina-de-precisao",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-4 lg:hidden">
      <ServiceTextMobile />

      <ListServiceCardsMobile services={services} />
    </section>
  );
}
