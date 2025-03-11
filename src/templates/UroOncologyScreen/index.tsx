import PageLayout from "@/components/PageLayout";
import BaseButton from "@/components/Button";
import BaseSwiper from "@/components/BaseSwiper";
import cancerTypesMock from "./CancerTypesMock";
import CancerTypesCard from "./CancerTypesCard";
import PurpleFullBleedBanner from "./components/PurpleFullbleedBanner";
import cancerTechsMock from "./CancerTechsMock";
import CancerTechsCard from "./CancerTechsCard";
import cancerTreatmentMock from "./CancerTreatmentMock";
import CancerTreatmentCard from "./CancerTreatmentCard";

export default function UroOncology(): JSX.Element {
  return (
    <PageLayout
      title="Uro-Oncologia"
      subtitle="Com uma equipe médica altamente especializada e serviços de qualidade, a Oncoclínicas oferece tratamentos completos e especializados para tumores urológicos, incluindo câncer de próstata, bexiga, rins, ureteres, testículos e pênis."
    >
      <div className="mt-8 md:mt-6 lg:mt-12">
        <h1 className="text-center text-2xl text-primary md:text-4xl lg:text-6xl">
          Tipos de câncer urológicos
        </h1>

        <div className="my-11 flex grid-cols-1 flex-col items-stretch gap-4 md:mt-8 md:grid md:grid-cols-2 md:gap-4 lg:mt-12 lg:flex lg:flex-row lg:gap-7">
          {cancerTypesMock.map((type) => (
            <CancerTypesCard
              key={type.id}
              title={type.title}
              description={type.description}
              icon={type.icon}
            />
          ))}
        </div>
        <div>
          <PurpleFullBleedBanner src="/assets/images/uro-oncology/PurpleCard/uro-oncology-purple-card.png" />
        </div>
        <div className="mb-10 mt-9 md:hidden">
          <BaseSwiper
            data={cancerTechsMock}
            renderItem={(type) => (
              <CancerTechsCard
                key={type.id}
                title={type.title}
                description={type.description}
                icon={type.icon}
              />
            )}
            slidesPerView={1}
          />
        </div>
        <div className="mb-11 hidden grid-cols-1 items-stretch md:mt-8 md:grid md:grid-cols-2 md:gap-4 lg:hidden">
          {cancerTechsMock.slice(0, 4).map((type) => (
            <CancerTechsCard
              key={type.id}
              title={type.title}
              description={type.description}
              icon={type.icon}
            />
          ))}
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="md:-mt-7 md:flex md:w-1/2 md:justify-self-center">
            {cancerTechsMock.slice(4, 5).map((type) => (
              <CancerTechsCard
                key={type.id}
                title={type.title}
                description={type.description}
                icon={type.icon}
              />
            ))}
          </div>
        </div>

        <div className="mb-11 hidden grid-cols-1 items-stretch md:hidden lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-7 xl:gap-7">
          {cancerTechsMock.slice(0, 3).map((type) => (
            <CancerTechsCard
              key={type.id}
              title={type.title}
              description={type.description}
              icon={type.icon}
            />
          ))}
        </div>
        <div className="hidden md:hidden lg:block">
          <div className="lg:-mt-6 lg:flex lg:gap-7 lg:justify-self-center">
            {cancerTechsMock.slice(3, 5).map((type) => (
              <CancerTechsCard
                key={type.id}
                title={type.title}
                description={type.description}
                icon={type.icon}
                className="lg:w-[493px]"
              />
            ))}
          </div>
        </div>

        <div className="mb-10 mt-12 text-center text-2xl text-primary md:mb-16 md:mt-12 md:text-5xl lg:mt-24 lg:text-6xl">
          Conheça alguns dos nossos tratamentos disponíveis
        </div>

        <div className="mb-10 mt-9 md:hidden">
          <BaseSwiper
            data={cancerTreatmentMock}
            renderItem={(type) => (
              <CancerTreatmentCard
                key={type.id}
                title={type.title}
                description={type.description}
              />
            )}
            slidesPerView={1}
          />
        </div>
        <div className="mb-11 hidden md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-7">
          {cancerTreatmentMock.map((type) => (
            <CancerTreatmentCard
              key={type.id}
              title={type.title}
              description={type.description}
            />
          ))}
        </div>
        <div>
          <BaseButton
            className="my-10 flex h-[54px] min-w-[346px] justify-self-center rounded-[6px] text-white md:my-20 md:w-[488px] lg:mb-12 lg:mt-16"
            color="primary"
            size="lg"
          >
            Encontre uma unidade
          </BaseButton>
        </div>
      </div>
    </PageLayout>
  );
}
