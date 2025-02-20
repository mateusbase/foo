import PageLayout from "@/components/PageLayout";
import BaseSwiper from "@/components/BaseSwiper";
import ServicesLocations from "@/components/ServicesLocation";
import testsMock from "./mocks/testsmock";
import TestsCard from "./components/TestsCard";
import miniRoundedCardsMock from "./mocks/miniRoundedCards";
import MiniRoundedCard from "./components/MiniRoundedCard";

export default function OncotypeDxScreen(): JSX.Element {
  return (
    <PageLayout
      title="Oncotype DX"
      subtitle="Um teste revolucionário no combate ao câncer de mama."
    >
      <div className="mt-7 w-full flex-col gap-10 md:mt-11 lg:mt-16">
        <h1 className="font-lato-bold text-2xl text-primary md:text-5xl">
          O que é ONCOTYPE DX?
        </h1>
        <div className="text-xl text-darkGray">
          <p className="mt-14">
            Oncotype DX é um exame inovador no diagnóstico molecular do câncer
            de mama. Feito a partir de biópsia, o teste é capaz de identificar
            até 85% das mulheres com câncer de mama na fase inicial que podem
            ser poupadas da quimioterapia adjuvante, conforme dados do estudo
            TailorX.
          </p>
          <p className="mt-7">
            Com a capacidade de avaliar o risco de recorrência do câncer de
            mama, o Oncotype DX ajuda a determinar a necessidade de
            quimioterapia.
          </p>
        </div>
      </div>

      <div className="mt-14 w-full flex-col gap-10 md:mt-16 lg:mt-20">
        <h1 className="mb-7 font-lato-bold text-2xl text-primary md:mb-9 md:text-5xl lg:mb-11">
          Para quem o teste é indicado?
        </h1>
        <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
          {testsMock.map((test) => (
            <TestsCard
              key={test.id}
              alt={test.alt}
              description={test.description}
              icon={test.icon}
            />
          ))}
        </div>
      </div>

      <div className="mb-16 mt-12">
        <h2 className="mb-16 text-2xl text-primary">
          O oncotype dx é a tecnologia diagnóstica mais avançada no combate ao
          câncer de mama.
        </h2>

        <BaseSwiper
          data={miniRoundedCardsMock}
          renderItem={(item) => (
            <MiniRoundedCard
              key={item.id}
              text={item.text}
              image={item.image}
            />
          )}
          className="md:hidden"
        />

        <div className="hidden gap-8 md:flex">
          {miniRoundedCardsMock.map((item) => (
            <MiniRoundedCard
              key={item.id}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <ServicesLocations
        title="Um serviço contínuo que acompanha o paciente do início ao final do tratamento."
        content="Entre em contato:"
      />
    </PageLayout>
  );
}
