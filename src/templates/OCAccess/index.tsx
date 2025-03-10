import BaseButton from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import BaseSwiper from "@/components/BaseSwiper";
import { services } from "./servicesData";
import ServiceCard from "./components/ServiceCard";

export default function OCAccess(): JSX.Element {
  const options = [
    { id: 1, title: "Entre no Site", step: "1", link: "/#" },
    {
      id: 2,
      title:
        "Encontre o que você precisa: consulta, exame, vacina ou tratamento.",
      step: "2",
      link: "/#",
    },
    { id: 3, title: "Agende a melhor data disponível.", step: "3", link: "/#" },
    {
      id: 4,
      title: "Escolha a forma de pagamento e o número de parcelas.",
      step: "4",
      link: "/#",
    },
  ];

  return (
    <PageLayout
      title="OC Acesso"
      subtitle="Conheça OC ACESSO. A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência.
"
    >
      <h1 className="my-4 text-2xl leading-8 text-primary md:my-11 md:text-title-lg md:leading-10">
        Agora, os pacientes que
        <b className="ml-1">
          não tem cobertura por um plano de saúde e que não podem esperar por
          atendimento
        </b>
        , podem contar com o acesso rápido e facilitado para consultas, exames,
        tratamentos oncológicos e serviços de atenção complementar.
      </h1>

      <div className="full-bleed flex flex-col-reverse md:h-[285px] md:flex-row lg:h-[418px]">
        <div className="flex flex-col bg-custom-gradient-dark p-6 md:w-1/2 md:px-8 md:pt-8 lg:w-full lg:rounded-bl-[100px] lg:p-12">
          <h2 className="text-2xl text-white xl:text-3xl">
            É para pacientes oncológicos, com custo acessível, é pra mim
          </h2>
          <p className="mt-5 text-sm text-white lg:mt-10 lg:text-xl xl:text-2xl">
            O cuidado completo do maior grupo de oncologia da América Latina,
            agora está acessível a todos.
          </p>
          <BaseButton
            variant="bordered"
            className="mt-5 w-60 shrink-0 border-1 border-white text-white lg:mt-10 lg:w-80"
          >
            Saiba Mais
          </BaseButton>
        </div>

        <img
          src="/assets/images/oc-access/oc-access-banner.png"
          className="object-cover md:w-1/2"
          alt="Banner OC Acesso"
        />
      </div>

      <div className="my-14">
        <h1 className="text-2xl text-primary md:text-title-lg">
          É diferente, é inovador, é pra mim
        </h1>
        <p className="mt-5 text-xl text-darkGray">
          Através dessa plataforma, eu tenho acesso aos mais diversos serviços,
          consultas, exames e tratamentos.
        </p>
        <div className="mt-8 hidden gap-7 md:grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard serviceName={service.name} icon={service.icon} />
          ))}
        </div>
        <BaseSwiper
          data={services}
          renderItem={(service) => (
            <ServiceCard serviceName={service.name} icon={service.icon} />
          )}
          className="mt-12 md:hidden"
        />
      </div>

      <div className="full-bleed flex flex-col md:h-[285px] md:flex-row lg:h-[418px]">
        <img
          src="/assets/images/oc-access/oc-access-banner-2.png"
          className="object-cover md:w-1/2 lg:rounded-bl-[100px]"
          alt="Banner OC Acesso"
        />

        <div className="flex flex-col justify-between gap-5 bg-gradient-to-b from-secondary via-secondary to-purpleLight p-6 md:w-1/2 lg:px-10 lg:py-12">
          <h2 className="mt-11 text-2xl text-white md:mt-2 lg:text-3xl 2xl:text-5xl">
            É superespecializado, é excelente, é pra mim
          </h2>
          <p className="3xl:text-2xl text-sm text-white lg:text-xl">
            Estrutura completa, equipe especializada, pronta para me acolher e
            oferecer a melhor experiência em saúde.
          </p>
          <div className="mb-11">
            <BaseButton
              variant="bordered"
              className="w-60 border-1 border-white text-white lg:w-80"
            >
              Saiba Mais
            </BaseButton>
          </div>
        </div>
      </div>

      <div className="full-bleed my-14 flex flex-col gap-6 lg:h-[590px] lg:flex-row">
        <div className="roundend-full bg-gradient-to-b from-purpleLight via-secondary to-purpleDark px-12 py-20 lg:w-3/4 lg:rounded-bl-[100px]">
          <h1 className="text-5xl font-light text-white">
            É pra mim, é pra você, é pra todos nós
          </h1>
          <p className="mt-10 text-2xl text-white">
            Democratizar o acesso, garantindo excelência no atendimento, faz
            parte da nossa missão.
          </p>
          <p className="mt-10 text-2xl text-white">
            E-mail: acesso@oncoclinicas.com <br />
            Telefone: 4004-8070
            <br /> WhatsApp: (31) 4004-8070
          </p>
        </div>

        <div className="px-10 lg:h-[590px] lg:w-3/5 lg:px-0">
          <h1 className="leading-10 text-primary lg:text-4xl 2xl:text-title-lg">
            Simples, rápido, acessível e sem complicação
          </h1>

          <div className="mt-4 flex flex-col gap-6 md:grid md:grid-cols-2">
            {options.map((option, index) => {
              const isEven = Math.floor(index / 2) % 2 === index % 2;
              const bgColor = isEven
                ? "bg-primary text-white"
                : "bg-primary-foreground text-greenDark";

              return (
                <div
                  key={option.id}
                  className={`flex h-32 flex-col rounded-2xl p-4 pl-6 pt-5 md:h-[233px] lg:p-7 ${bgColor}`}
                >
                  <p className="mb-3 text-sm font-semibold md:text-title-lg lg:mb-0 lg:text-lg lg:leading-10 xl:mb-3 xl:text-title-lg">
                    {option.step}
                  </p>
                  <p className="text-sm font-semibold !leading-3 md:mt-6 md:text-2xl md:!leading-8 lg:mt-2 lg:text-lg lg:font-semibold 2xl:text-2xl">
                    {option.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
