import FullbleedBanner from "@/components/FullbleedBanner";
import PageLayout from "@/components/PageLayout";
import BaseSwiper from "@/components/BaseSwiper";
import ServicesLocations from "@/components/ServicesLocation";
import SimpleIconCard from "@/components/SimpleIconCards";
import benefitsMock from "./benefitsMock";

const informationArray = [
  "Estamos com você durante todo o tratamento",
  " Na Oncoclínicas, assumimos o compromisso de estar ao seu lado durante toda a jornada do tratamento oncológico. Nosso propósito é claro: cuidar sem limites.",
  "Encontre a unidade mais próxima e entre em contato:",
];

export default function OcNavigationScreen(): JSX.Element {
  let imageSrc = "/assets/images/oc-navigation/navigation_banner_sm.png";
  if (window.innerWidth > 1024) {
    imageSrc = "/assets/images/oc-navigation/navigation_banner_lg.png";
  } else if (window.innerWidth > 640) {
    imageSrc = "/assets/images/oc-navigation/navigation_banner_md.png";
  }

  return (
    <PageLayout
      title="OC Navegação"
      subtitle="Em busca de oferecer assistência individualizada aos pacientes, apresentamos o programa OC Navegação, proporcionando suporte, acolhimento e monitoramento clínico durante todas as etapas do tratamento.
"
    >
      <FullbleedBanner
        title="O que é o programa OC Navegação do paciente?"
        description="Assistência individualizada oferecida a pacientes, familiares e cuidadores, a fim de apoiá-los em todas as fases do tratamento, oferecendo acolhimento, suporte clínico durante toda a trajetória, apoiando e direcionando para equipe médica e multidisciplinar de referência."
        src={imageSrc}
      />

      <div className="mt-8 md:mt-6 lg:mt-12">
        <h1 className="text-2xl text-primary md:text-4xl">
          Alguns dos benefícios do programa de navegação
        </h1>
        <div className="mb-10 mt-9 md:hidden">
          <BaseSwiper
            data={benefitsMock}
            renderItem={(benefit) => (
              <SimpleIconCard
                key={benefit.id}
                description={benefit.description}
                icon={benefit.icon}
              />
            )}
            slidesPerView={1}
          />
        </div>

        <div className="mb-11 hidden grid-cols-1 items-stretch md:mt-8 md:grid md:auto-rows-fr md:gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-7">
          {benefitsMock.map((benefit) => (
            <SimpleIconCard
              key={benefit.id}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>

      <ServicesLocations content={informationArray} />
    </PageLayout>
  );
}
