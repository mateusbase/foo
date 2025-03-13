import Image from "next/image";

export default function CareLineAdditionalServices(): JSX.Element {
  return (
    <div className="my-20 w-full">
      <h1 className="px-6 text-4xl text-primary md:px-0 md:text-title-lg">
        E demais serviços que completam o cuidado com a jornada do paciente
      </h1>

      <div className="mt-20 flex flex-col gap-10 lg:flex-row">
        <div className="lg:w-1/2">
          <Image
            src="/assets/images/banner-oc-care-line-2.png"
            alt="Imagem OC Linha de Cuidado"
            className="relative left-1/2 h-auto max-h-[373px] max-w-screen-sm -translate-x-1/2 md:static md:left-0 md:w-full md:max-w-full md:translate-x-0 md:rounded-2xl"
            width={1920}
            height={1080}
          />
          <p className="mt-2 px-6 text-xl text-darkGray md:px-0 lg:mt-10">
            Também disponibilizamos a realização do pré-operatório de forma ágil
            e eficiente, garantindo um atendimento integral e personalizado.
          </p>
        </div>

        <div className="lg:w-1/2">
          <Image
            src="/assets/images/banner-oc-care-line-1.png"
            alt="Imagem OC Linha de Cuidado"
            className="relative left-1/2 h-auto max-h-[373px] max-w-screen-sm -translate-x-1/2 md:static md:left-0 md:w-full md:max-w-full md:translate-x-0 md:rounded-2xl"
            width={1920}
            height={1080}
          />
          <p className="mt-10 px-6 text-xl text-darkGray md:px-0">
            A OC Linha de Cuidado conta com uma equipe de concierges dedicados a
            facilitar a integração entre pacientes, médicos e outros
            profissionais envolvidos no tratamento oncológico.
          </p>
        </div>
      </div>
    </div>
  );
}
