import PageLayout from "@/components/PageLayout";
import GradientBanner from "@/components/GradientBanner";
import BaseButton from "@/components/Button";
import ContentCard from "@/components/ContentCard";
import InfoCard from "@/components/InfoCard";
import AlertComponent from "./components/AlertComponent";
import InformationCard from "./components/InformationCard";
import SectionHeader from "./components/SectionHeader";
import { dataMock } from "./dataMock";

export default function WorkWithUsScreen(): JSX.Element {
  return (
    <PageLayout>
      <AlertComponent />

      <div className="my-10">
        <GradientBanner image="https://i.postimg.cc/hP4Kg3YK/DESK-Home-Blog-image2.png">
          <div className="mt-10 flex max-h-8 w-full flex-col">
            <div className="text-2xl font-normal">Estrutura profissional</div>
            <div className="mt-4 text-4xl font-thin lg:text-6xl">
              Nosso lema é <span className="font-light">“</span>
              <span className="font-medium">
                o paciente como centro de tudo
              </span>
              <span className="font-light">"</span>
            </div>
            <div className="mt-10">
              <BaseButton
                className="border-white text-white"
                size="lg"
                variant="bordered"
              >
                Veja as oportunidades
              </BaseButton>
            </div>
          </div>
        </GradientBanner>
      </div>

      <div className="my-10">
        <GradientBanner
          sideImage="right"
          image="https://i.postimg.cc/hP4Kg3YK/DESK-Home-Blog-image2.png"
        >
          <div className="mt-2 flex max-h-8 w-full flex-col">
            <div className="text-4xl font-normal lg:text-lg">
              <p className="leading-5">
                Oncoclínicas&Co é o maior grupo dedicado ao tratamento do câncer
                na América Latina, com um modelo especializado e inovador focado
                em toda a jornada do tratamento oncológico, aliando eficiência
                operacional, atendimento humanizado e especialização por meio de
                um corpo clínico composto por mais de 2.700 médicos
                especialistas com ênfase em oncologia.
              </p>
              <p className="mt-3 leading-5">
                Com a missão de democratizar o tratamento oncológico, oferece um
                sistema completo que integra clínicas ambulatoriais a cancer
                centers de alta complexidade. Conta com 145 unidades em 39
                cidades brasileiras, permitindo acesso de qualidade em todas as
                regiões que atua, alinhados aos padrões dos melhores centros de
                referência mundiais no tratamento do câncer.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold">Nossos valores:</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 gap-x-20 text-xl">
                <ul className="list-inside list-disc leading-5">
                  <li>Integridade</li>
                  <li>Trabalho em equipe</li>
                  <li>Espírito de dono</li>
                  <li>Simplicidade, objetividade e resolutividade (SOR)</li>
                </ul>
                <ul className="list-inside list-disc leading-5">
                  <li>Resultado</li>
                  <li>Respeito</li>
                  <li>Meritocracia</li>
                  <li>Liderança</li>
                </ul>
              </div>
            </div>
          </div>
        </GradientBanner>

        <div className="mt-20 flex w-full flex-row justify-center gap-9">
          <InformationCard>
            <p className="text-center text-2xl">
              Aqui você encontra as oportunidades de carreira na
              <span className="font-bold">Oncocínicas</span>. Acha que este é o
              seu perfil? Então acesse as vagas e veja como.
            </p>
            <div className="mt-6 flex w-full justify-center">
              <BaseButton className="bg-purpleMedium text-lg text-white">
                Veja as oportunidades
              </BaseButton>
            </div>
          </InformationCard>

          <InformationCard background>
            <p className="text-center text-2xl text-white">
              A <span className="font-bold">Oncoclínicas&Co</span> está sempre
              aberto para receber novos colaboradores, que devem estar alinhados
              com nossos valores
            </p>
            <div className="mt-6 flex w-full justify-center">
              <BaseButton className="bg-white text-lg text-purpleMedium">
                Envie o seu currículo
              </BaseButton>
            </div>
          </InformationCard>
        </div>
      </div>
      <SectionHeader
        title="Quer ser um de nossos colaboradores?"
        description="A Oncoclínicas&Co está sempre aberto para receber novos colaboradores, que devem estar alinhados com nossos valores e ter excelência técnica. Acha que este é o seu perfil? Então acesse as vagas e veja como."
      />
      <div className="mt-20 grid grid-cols-2 gap-7 lg:grid-cols-3">
        {dataMock.map((card) => (
          <ContentCard
            key={card.id}
            serviceTitle={card.title}
            serviceDescription={card.description}
            showButton={false}
          />
        ))}
      </div>

      <div className="my-20 grid grid-cols-2 gap-10">
        <InfoCard roundedSide="left">
          <div>
            <h3 className="text-5xl text-white">Colaboradores</h3>
            <h3 className="mt-10 max-w-md text-2xl text-white">
              Dentro da Oncoclínicas, há espaço para diversas especialidades na
              área da saúde, gestão e administração.
            </h3>
            <BaseButton className="mt-10 border-2 bg-transparent text-white">
              Cadastre seu currículo
            </BaseButton>
          </div>
        </InfoCard>

        <InfoCard roundedSide="left">
          <div>
            <h3 className="text-5xl text-white">Médicos</h3>
            <h3 className="mt-10 max-w-md text-2xl text-white">
              Dentro da Oncoclínicas, há espaço para diversas especialidades na
              área da saúde, gestão e administração.
            </h3>
            <BaseButton className="mt-10 border-2 bg-transparent text-white">
              Cadastre seu currículo
            </BaseButton>
          </div>
        </InfoCard>
      </div>
    </PageLayout>
  );
}
