import BaseButton from "@/components/Button";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

export default function GerminalPainel(): JSX.Element {
  const germinalExams = [
    { id: 1, titleExam: "Análise Gene Único - Mutações Pontuais Hereditárias" },
    { id: 2, titleExam: "MLPA – Análise de Grandes Deleções e Duplicações" },
    { id: 3, titleExam: "Painel GS Hemato" },
    { id: 4, titleExam: "Painel GS Hereditário" },
  ];
  return (
    <div className="mb-20 w-full flex-col">
      <div className="w-full">
        <h1 className="mb-4 font-lato-bold text-xl text-primary md:text-[40px]">
          Painel NGS Germinativo
        </h1>

        <p className="text-sm text-darkGray md:mt-8 md:text-xl">
          A busca por tratamentos cada vez mais individualizados é o novo
          desafio da oncologia. Anualmente, dezenas de novas moléculas são
          desenvolvidas, voltadas para alterações moleculares oncogênicas das
          células malignas. Em paralelo, os estudos clínicos com novos
          medicamentos contra o câncer estão em rápida evolução, focando em
          pacientes cujos tumores apresentem as alterações moleculares alvo e
          que, por essa razão, tenham a maior probabilidade de resposta a dada
          terapia. Trata-se do conceito de terapia-alvo baseada na genômica do
          câncer, que já é uma realidade em praticamente todos os tipos de
          tumores. A avaliação do material é realizada utilizando-se de
          ferramentas avançadas e exclusivas de bioinformática, muito precisas
          na análise de variantes gênicas, resultando em um laudo completo e
          instrutivo que contribuirá na assertividade do tratamento oncológico.
        </p>

        <div className="mt-10">
          <BaseButton className="w-full text-white md:w-5/12 lg:w-60 lg:min-w-60">
            Solicitar exame
          </BaseButton>
        </div>
      </div>

      <div className="mt-10 lg:mt-36">
        <h2 className="text-primary md:text-[40px] lg:text-2xl">
          Painéis NGS Germinativos
        </h2>

        <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {germinalExams.map((exam) => (
            <div
              key={exam.id}
              className="flex h-[105px] cursor-pointer items-center gap-4 rounded-lg border border-primary px-4 py-2 text-primary lg:h-[150px] xl:px-5 xl:py-3"
            >
              <h2 className="grow font-lato-bold text-xl">{exam.titleExam}</h2>
              <IoChevronForwardCircleOutline className="shrink-0 text-3xl text-primary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
