import {
  TreatmentsIcon,
  MicroscopeIcon,
  ServiceIcon,
  AllOfCancerIcon,
} from "../Icons";
import ListServiceCards from "./components/ListServiceCards";
import ServiceText from "./components/ServiceText";

export default function ServicesSection(): JSX.Element {
  const services = [
    {
      id: 1,
      title: "Tratamentos",
      icon: <TreatmentsIcon color="text-primary-foreground" size={2} />,
      path: "/servicos/#tratamentos",
    },
    {
      id: 2,
      title: "Diagnósticos",
      icon: <MicroscopeIcon color="text-primary-foreground" size={2} />,
      path: "/servicos/#diagnósticos",
    },
    {
      id: 3,
      title: "Serviços",
      icon: <ServiceIcon color="text-primary-foreground" size={2} />,
      path: "/servicos",
    },
    {
      id: 4,
      title: "Tudo sobre o câncer",
      icon: <AllOfCancerIcon color="text-primary-foreground" size={2} />,
      path: "/tudo-sobre-o-cancer",
    },
  ];

  return (
    <div className="hidden w-full justify-center py-12 lg:flex lg:flex-row">
      <ServiceText />

      <ListServiceCards services={services} />
    </div>
  );
}
