import MainOptionsActions from "@/components/MainOptionsActions";
import PageLayout from "@/components/PageLayout";
import { options } from "@/utils/objectUtils";
import { BreastCancerIcon } from "@/components/Icons";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import BaseButton from "@/components/Button";
import NominateOrPaticipate from "./components/NominateOrPaticipate";
import ResearchCentersList from "./components/ResearchCenterList";
import { researchCentersMock } from "./mocks";

export default function StudyScreen(): JSX.Element {
  return (
    <main>
      <PageLayout
        title="Estudos clínicos abertos"
        subtitle="Programa de Pesquisa Clínica do Grupo Oncoclínicas"
        mainOptions={false}
      >
        <div className="mt-10 flex flex-col items-start">
          <p className="text-2xl text-primary md:text-title-lg">BGB-11417-201 </p>
          <p className="text-[15px] text-lightGray md:text-xl">
            OC Oncoclínicas RJ
          </p>
        </div>

        <div className="mt-10 flex w-44 items-center rounded-full bg-[#F16687]">
          <BreastCancerIcon className="size-16 md:size-20" />
          <p className="text-xl text-white">Mama</p>
        </div>

        <p className="mt-4 text-sm text-lightGray md:text-xl lg:mt-12">
          EMBER-4: Um estudo randomizado, aberto, de fase 3 de terapia endócrina
          adjuvante imlunestrant vs terapia endócrina adjuvante padrão em
          pacientes que receberam anteriormente 2 a 5 anos de terapia endócrina
          adjuvante para ER+, HER2- câncer de mama precoce com risco aumentado
          de recorrência
        </p>

        <div className="mt-10">
          <ResearchCentersList center={researchCentersMock} />
        </div>

        <p className="mt-10 text-2xl text-primary md:text-title-lg">
          Critérios de inclusão
        </p>
        <p className="mt-4 text-sm text-lightGray md:text-xl lg:mt-12">
          Ter diagnóstico de câncer de mama ER+, HER2- em estágio inicial,
          ressecado, invasivo, sem evidência de metástase à distância.Os
          participantes devem ter recebido pelo menos 24 meses, mas não mais de
          60 meses de qualquer TE adjuvante, a partir do momento do início do TE
          adjuvante.Os participantes podem ter recebido quimioterapia adjuvante
          (neo) e/ou terapia-alvo com um inibidor da CDK4/6- ou PARP-.Deve ter
          um risco aumentado de recorrência da doença com base nas
          características de risco clínico-patológico.Ter um Status de
          Desempenho de 0 ou 1 na escala do Eastern Cooperative Oncology
          Group.Ter função adequada do órgão.
        </p>

        <p className="mt-10 text-2xl text-primary md:text-title-lg">
          Critérios de exclusão
        </p>
        <p className="mt-4 text-sm text-lightGray md:text-xl lg:mt-12">
          Ter qualquer evidência de doença metastática (incluindo ALN
          contralateral) ou câncer de mama inflamatório no diagnóstico primário
          de câncer de mama.Participantes com mais de 6 meses consecutivos de
          intervalo na terapia durante o curso do TE adjuvante prévio.Os
          participantes que completaram ou interromperam o TE adjuvante prévio
          &gt; 6 meses antes da triagem.Participantes com história de câncer de
          mama prévio são excluídas, com exceção do CDIS ipsilateral tratado
          apenas por terapia locorregional há ≥5 anos.Grávidas, amamentando ou
          esperando conceber ou ter filhos dentro da duração projetada do
          estudo, começando com a visita de triagem até 180 dias após a última
          dose da intervenção do estudo.
          <p className="text-sm text-lightGray md:text-xl">
            A participante recebeu previamente TE de qualquer duração para
            prevenção do câncer de mama (tamoxifeno ou IAs) ou
            raloxifeno.Participantes com histórico de qualquer outro
            câncer.Apresentar condições médicas preexistentes graves que, a
            juízo do pesquisador, impossibilitariam a participação neste estudo.
          </p>
        </p>

        <p className="mt-4 text-2xl text-primary md:text-title-lg lg:mt-10">
          Coordenador(es)
        </p>
        <p className="mt-2 text-sm text-lightGray md:text-xl lg:mt-8">
          Thamires Almeida
        </p>

        <p className="mt-4 text-2xl text-primary md:text-title-lg lg:mt-10">
          Entre em contato
        </p>
        <p className="mt-2 text-sm text-lightGray md:text-xl lg:mt-8">
          gustavo.bretas@medicos.oncoclinicas.com
        </p>
        <p className="mt-2 text-sm text-lightGray md:text-xl lg:mt-8">
          (21) 2127-0281/82
        </p>

        <BaseButton className="mt-10 text-white md:w-80">
          Clique aqui para mais informações
        </BaseButton>

        <div className="my-10">
          <ShareOptions options={socialNetwork} />
        </div>
      </PageLayout>

      <NominateOrPaticipate />
      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
