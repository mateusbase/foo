import BaseButton from "@/components/Button";

const OcCareLineBanner = (): JSX.Element => {
  return (
    <div className="full-bleed flex flex-col lg:mt-8 lg:h-[499px] lg:flex-row">
      <img
        src="/assets/images/veinviewer/banner-veinviewer-2-sm.png"
        alt="OC Linha de Cuidado"
        className="hidden w-1/2 rounded-bl-[80px] lg:block"
        fetchPriority="high"
      />
      <img
        src="/assets/images/veinviewer/banner-veinviewer-2-sm.png"
        alt="OC Linha de Cuidado"
        className="w-full lg:hidden"
        fetchPriority="high"
      />
      <div className="flex flex-col items-center bg-custom-gradient-dark p-9 text-center text-white">
        <div className="w-2/4 lg:w-3/4">
          <h1 className="justify-center font-lato-bold text-4xl">
            OC Linha de Cuidado
          </h1>
          <p className="mt-7 text-base font-light md:mt-7 lg:mt-7 lg:text-left lg:text-2xl">
            Criado para oferecer muito mais que uma comodidade aos pacientes, o
            OC Linha de Cuidado é um serviço contínuo que acompanha o paciente
            durante todo o tratamento, com um papel fundamental ao agilizar
            todos os exames pré-operatórios, marcação de consultas e cirurgias.
          </p>
          <BaseButton className="mt-7 h-[54px] w-[330px] self-center rounded-md border border-white bg-transparent text-center font-lato-light text-base text-white lg:w-full">
            Saiba mais
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default OcCareLineBanner;
