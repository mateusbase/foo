import PageLayout from "@/components/PageLayout";
import { useDeviceType } from "@/hooks/useDeviceType";
import BaseSwiper from "@/components/BaseSwiper";
import { Image } from "@heroui/react";
import FullbleedBanner from "./components/Fullbleed Banner";
import fronts from "./fronts";
import projectCardMocks from "./projectCardsMock";
import ProjectCards from "./components/ProljectCards";

export default function ProjectsAndSponsorshipsScreen(): JSX.Element {
  const deviceType = useDeviceType();
  const imgSrc =
    deviceType !== "desktop"
      ? "/assets/images/projetos-e-patrocinios/image (4).png"
      : "/assets/images/projetos-e-patrocinios/image (5).png";
  return (
    <PageLayout title="Projetos & Patrocínios">
      <FullbleedBanner
        description="A Oncoclínicas investe em projetos de responsabilidade social que incentivam a cultura, valorizam os idosos, cuidam da infância e impulsionam o esporte. Cuidar sem limites é ter uma atitude transformadora, capaz de impactar de maneira positiva todas as camadas da sociedade."
        src={imgSrc}
      />

      <div>
        <h1 className="mb-3 text-2xl text-primary md:text-4xl">
          Frentes de atuação
        </h1>
        <p className="mb-6 text-darkGray md:text-xl">
          Apoiamos projetos que estejam conectados com o nosso propósito e a
          nossa essência de Cuidar Sem Limites. As frentes de atuação estão
          ligadas a cultura, esporte, infância e idoso fortalecendo iniciativas
          que buscam melhorar as condições de vida de pessoas que sofrem com
          situações de vulnerabilidade social, econômica e/ou cultural.
        </p>
        <div className="flex justify-center">
          <BaseSwiper
            data={fronts}
            className="mx-auto w-full"
            renderItem={(item) => (
              <Image
                src={item.image}
                className="mb-6 h-full w-[350px] md:ml-0"
                alt={item.alt}
              />
            )}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 10 },
              1025: { slidesPerView: 3, spaceBetween: 20 },
            }}
          />
        </div>
      </div>

      <div className="my-20">
        <h1 className="mb-3 text-2xl text-primary md:text-4xl">
          Investimentos
        </h1>
        <p className="mt-4 text-base text-darkGray md:text-xl">
          No último ano, incentivamos diversas frentes.
        </p>

        <ProjectCards projects={projectCardMocks} />
      </div>
    </PageLayout>
  );
}
