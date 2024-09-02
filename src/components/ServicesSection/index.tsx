import ServiceCard from "../ServiceCard";

export default function ServicesSection(): JSX.Element {
  const services = [
    { id: 1, title: "Tratamentos", icon: "/favicon.ico" },
    { id: 2, title: "Diagnósticos", icon: "/favicon.ico" },
    { id: 3, title: "Serviços", icon: "/favicon.ico" },
    { id: 4, title: "Tudo sobre o câncer", icon: "/favicon.ico" },
  ];

  return (
    <section className="container flex flex-row items-center justify-center py-8">
      <div className="container flex max-w-md flex-col justify-center">
        <div className="text-left">
          <h2 className="text-5xl font-light text-primary">
            Descubra como ajudamos você.
          </h2>
          <p className="mt-4 text-xl font-medium text-gray-600">
            A Oncoclínicas oferece os principais tratamentos para o câncer, com
            diagnósticos precisos e um cuidado mais humano aos pacientes.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
