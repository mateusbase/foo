import ColoredCard from "@/components/ColoredCard";
import FullbleedBanner from "@/components/FullbleedBanner";
import PageLayout from "@/components/PageLayout";
import BaseSwiper from "@/components/BaseSwiper";
import SimpleCard from "@/components/SimpleCard";
import telemedicineMock from "./telemedicineMock";
import teleconsultPreparations from "./teleconsulttPrepatation";

export default function TelemedicineScreen(): JSX.Element {
  return (
    <PageLayout
      title="Telemedicina"
      subtitle="A telemedicina é uma modalidade da medicina que realiza consultas, diagnósticos e monitoramentos de pacientes de forma remota garantindo conforto e proteção aos pacientes.
"
    >
      <FullbleedBanner
        isVideo
        src="https://www.youtube.com/watch?v=0FzG0AWPsSA"
        title="Uma empresa da Oncoclínicas&Co"
        description="Foi para garantir que as drogas orais cheguem até os pacientes e para que recebam todas as orientações para a segurança no uso do quimioterápico, que a Oncoclínicas criou a DeLife. A proposta é realizar a gestão de medicamentos oncológicos orais com eficiência por meio de um exclusivo Programa de Suporte ao Paciente (PSP), assegurando que os pacientes recebam o medicamento em casa, sendo orientados de forma correta sobre sua utilização."
      />
      <div className="flex flex-col lg:flex-row lg:gap-7">
        {telemedicineMock.map((item) => (
          <ColoredCard
            key={item.id}
            title={item.title}
            description={item.description}
            buttons={[item.button]}
            background={item.isPurple}
            className="mb-6"
          />
        ))}
      </div>

      <div className="mt-14">
        <h1 className="text-4xl text-primary">
          Prepare-se para a sua teleconsulta
        </h1>
        <p className="my-9 text-xl text-darkGray">
          Conheça os preparativos necessários para que a sua consulta de
          telemedicina ocorra da melhor forma possível.
        </p>
        <div className="md:hidden">
          <BaseSwiper
            data={teleconsultPreparations}
            renderItem={(teleconsult) => (
              <SimpleCard
                key={teleconsult.id}
                title={teleconsult.title}
                description={teleconsult.description}
                textPrimary
              />
            )}
          />
        </div>
        <div className="mb-14 hidden md:grid md:grid-cols-2 md:gap-8 lg:mb-32 lg:flex lg:flex-row lg:gap-3">
          {teleconsultPreparations.map((teleconsult) => (
            <SimpleCard
              key={teleconsult.id}
              title={teleconsult.title}
              description={teleconsult.description}
              textPrimary
            />
          ))}
          {}
        </div>
      </div>
    </PageLayout>
  );
}
