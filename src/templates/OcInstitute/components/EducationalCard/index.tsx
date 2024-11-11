export default function EducationalCard(): JSX.Element {
  return (
    <div className="flex w-full flex-col text-white lg:flex-row">
      <div className="flex min-w-80 flex-col justify-between gap-2 rounded-bl-[100px] p-8 text-primary lg:bg-gradient-to-t lg:from-secondary-foreground lg:to-primary-foreground lg:p-20 lg:text-white">
        <p className="text-center text-4xl font-medium lg:text-left lg:text-5xl">
          Ensino, pesquisa e Educação médica continuada
        </p>
      </div>

      <div className="px-8 py-6 lg:py-0 lg:pl-8">
        <div>
          <p className="text-base text-darkGray lg:text-2xl">
            Criado em 2015, o Instituto Oncoclínicas tem a missão de gerar,
            disseminar e integrar o conhecimento, qualificar os profissionais
            envolvidos no tratamento oncológico e prover um ambiente que
            favoreça a interdisciplinaridade.
          </p>
          <p className="mt-4 text-base text-darkGray lg:text-2xl">
            Temos uma parceria com o Dana Farber Cancer Institute/ Harvard
            Medical School que reforça o nosso compromisso com a busca contínua
            pelas melhores práticas clínicas, sendo a instituição estadunidense
            uma das principais referências mundiais no tratamento oncológico.
          </p>
        </div>
        <div className="mt-6 lg:mt-10">
          <p className="text-base font-bold text-darkGray lg:text-2xl">
            Dr. Carlos Gil Moreira Ferreira
          </p>
          <p className="text-base font-medium text-darkGray lg:text-xl">
            Presidente do Instituto Oncoclínicas
          </p>
        </div>
      </div>
    </div>
  );
}
