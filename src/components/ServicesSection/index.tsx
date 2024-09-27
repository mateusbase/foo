import ListServiceCards from "./components/ListServiceCards";
import ServiceText from "./components/ServiceText";

export default function ServicesSection(): JSX.Element {
  const services = [
    { id: 1, title: "Tratamentos", icon: "/favicon.ico" },
    { id: 2, title: "Diagnósticos", icon: "/favicon.ico" },
    { id: 3, title: "Serviços", icon: "/favicon.ico" },
    { id: 4, title: "Tudo sobre o câncer", icon: "/favicon.ico" },
  ];

  return (
    <section className="items-left hidden w-full justify-center py-8 lg:flex lg:flex-row">
      <ServiceText />

      <ListServiceCards services={services} />
    </section>
  );
}
