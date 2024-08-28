import ServiceCard from "../ServiceCard";

export default function ServicesSection(): JSX.Element {
  const services = [
    { title: "Tratamentos", icon: "/favicon.ico" },
    { title: "Diagnósticos", icon: "/favicon.ico" },
    { title: "Serviços", icon: "/favicon.ico" },
    { title: "Tudo sobre o câncer", icon: "/favicon.ico" },
  ];

  return (
    <section className="py-8 flex flex-row container justify-center items-center">

      <div className="container flex flex-col justify-center max-w-md">
        <div className="text-left">
          <h2 className="text-primary text-5xl font-light">
            Descubra como ajudamos você.
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            A Oncoclínicas oferece os principais tratamentos para o câncer, com diagnósticos precisos e um cuidado mais humano aos pacientes.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
