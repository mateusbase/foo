import PageLayout from "@/components/PageLayout";
import { useDeviceType } from "@/hooks/useDeviceType";
import { Image } from "@heroui/react";
import BaseButton from "@/components/Button";
import FellowshipFullBanner from "./components/FellowshipFullbanner";
import PurpleFullbleedBanner from "./components/PurpleFullBleedBanner";

export default function FellowshipScreen(): JSX.Element {
  const deviceType = useDeviceType();
  const smallBanner = "/assets/images/fellowship/Mask group.png";
  const mediumBanner = "/assets/images/fellowship/image (8).png";
  const largeBanner = "/assets/images/fellowship/image (9).png";

  const getBanner = (): string => {
    switch (deviceType) {
      case "mobile":
        return smallBanner;
      case "tablet":
        return mediumBanner;
      case "desktop":
        return largeBanner;
      default:
        return smallBanner;
    }
  };

  return (
    <PageLayout title="Instituto Oncoclínicas" subtitle="Fellowship">
      <div className="mt-10 flex items-center justify-center">
        <Image src={getBanner()} alt="Banner OC Fellowship" />
      </div>

      <FellowshipFullBanner
        src="/assets/images/fellowship/image (11).png"
        hasButton
        buttonText="Inscreva-se"
      />

      <PurpleFullbleedBanner
        src="/assets/images/fellowship/image (12).png"
        description="Cursos de especialização em diversas áreas, profissionais renomados e ensino de excelência."
        hasButton
        buttonText="Inscreva-se"
      />
      <h1 className="mb-8 text-2xl text-primary">
        Próximos lançamentos OC Fellowship (março/2025)
      </h1>
      <ul className="ml-6 list-outside list-disc grid-cols-2 text-xl text-darkGray lg:grid lg:gap-x-12 lg:text-2xl">
        <li>2 vagas para Oncologia de Tórax e Cabeça & Pescoço</li>
        <li>1 vaga para Oncologia do Trato Geniturinário</li>
        <li>1 vaga para Oncologia do Trato Gastrointestinal</li>
        <li>1 vaga para Oncologia de Tumores Femininos</li>
        <li>
          1 vaga para Oncologia de Pele, Sarcoma e Sistema Nervoso Central
        </li>
        <li>1 vaga para Pesquisa Clínica</li>
      </ul>
      <BaseButton className="mb-10 mt-8 text-lg text-white md:w-[356px]">
        Leia o edital completo
      </BaseButton>

      <FellowshipFullBanner
        src="/assets/images/fellowship/image (13).png"
        hasButton
        opportunityText
        buttonText="Inscreva-se"
      />
    </PageLayout>
  );
}
