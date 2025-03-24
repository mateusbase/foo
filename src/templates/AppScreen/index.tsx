import { LogoIcon } from "@/components/Icons";
import PageLayout from "@/components/PageLayout";
import PurpleBanner from "@/components/PurpleBanner";
import QrCodeContainer from "./components/qrCodesContainer";
import BannerWithVideo from "./components/BannerWithVideo";

const AppScreen = (): JSX.Element => {
  return (
    <PageLayout title={<LogoIcon size={1} />} showBreadcrumb>
      <div className="lg:hidden">
        <PurpleBanner
          title="APP OC Medicina de Precisão"
          subtitle="Ensaios clínicos, jornadas moleculares e programas de suporte em uma experiência médica integrada."
          video="https://www.youtube.com/watch?v=0FzG0AWPsSA"
        />
      </div>

      <BannerWithVideo
        media="https://www.youtube.com/watch?v=0FzG0AWPsSA"
        isVideo
      />

      <main className="mb-8 mt-12 flex w-[95%] flex-col gap-7 self-center text-justify text-xl text-darkGray lg:w-full">
        <p>
          Para respeitar e valorizar as individualidades dos pacientes com
          câncer, o Grupo Oncoclínicas inovou com a OC Medicina de Precisão, que
          engloba os laboratórios de Anatomia Patológica, Genômica e Big Data,
          todos focados em oncologia. Desde 2019, a OC Medicina de Precisão
          oferece um portfólio molecular completo, de alta relevância clínica,
          para fins diagnósticos, preditivos e prognósticos, contribuindo de
          maneira efetiva para a prevenção da doença e o tratamento dos
          pacientes
        </p>
        <p>
          O laboratório OC Medicina de Precisão recebe amostras de todo o país
          para diagnósticos, segundas opiniões e análises moleculares. É um
          centro integrado de medicina de precisão que oferece uma ampla gama de
          testes moleculares, desde imuno-histoquímica até sequenciamento, tanto
          testes de genes isolados quanto painéis multigenes de última geração,
          já comercialmente disponíveis.
        </p>
      </main>

      <QrCodeContainer />
    </PageLayout>
  );
};

export default AppScreen;
