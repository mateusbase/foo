import PageLayout from "@/components/PageLayout";
import YouthBanner from "./components/YouthBanner";

const CampaignsScreen = (): JSX.Element => {
  return (
    <PageLayout
      title="Campanhas de prevenção contra o câncer"
      subtitle="Conheça as campanhas da Oncoclínicas que alertam sobre prevenção, diagnóstico, controle e tratamento contra o câncer."
      showBreadcrumb
    >
      <YouthBanner />

      <div className="container mt-14">
        <h2 className="mb-6 w-[90%] text-wrap font-lato-thin text-3xl text-primary">
          Campanhas de conscientização de câncer
        </h2>
        <div className="mb-16 flex flex-col items-center gap-6 font-lato-regular text-base text-darkGray">
          <p>
            O câncer é uma doença que surge a partir de uma alteração no DNA de
            uma célula, que passa a receber instruções de atividade erradas e a
            se multiplicar descontroladamente, formando um ou mais tumores. Esse
            processo pode ser lento ou rápido e pode acometer qualquer órgão ou
            parte do corpo. Atualmente, é o principal problema de saúde pública
            do mundo e está entre as quatro principais causas de morte antes dos
            70 anos de idade (considerada “morte prematura”) na maioria dos
            países.
          </p>
          <p>
            De acordo com a mais recente estimativa global, realizada em 2018,
            ocorreram no mundo, naquele ano, 18 milhões de casos novos de câncer
            e 9,6 milhões de óbitos. A incidência é 15% maior em homens (204,7
            por 100 mil) do que em mulheres (175,6 por 100 mil). Para o Brasil,
            a estimativa para cada ano do triênio 2020-2022 é de 625 mil novos
            casos de câncer, sendo o de pele não melanoma o mais incidente,
            seguido pelos de mama e próstata, cólon e reto, pulmão e estômago.
          </p>
          <p>
            Estes números são relevantes porque a informação é uma arma poderosa
            na batalha contra a doença. Os dados levantados em todo o mundo dão
            à nossa equipe subsídios para monitorar e organizar ações para
            controle e conscientização sobre o câncer. É parte de nossa missão,
            por meio do Instituto Oncoclínicas, realizar campanhas direcionadas
            tanto à prevenção (para quem não tem a doença) quanto à promoção da
            qualidade de vida e do bem-estar dos pacientes oncológicos.
          </p>
          <p>
            Vale destacar que muitos tipos de câncer têm chance de cura
            atualmente, e o principal fator de sucesso para o tratamento é o
            diagnóstico precoce, seguido de tratamento imediato. Por isso
            reforçamos nas campanhas, que são desenvolvidas pelo nosso corpo
            clínico, a importância da realização de exames de rastreamento e da
            atenção aos hábitos de vida (que podem aumentar ou diminuir o risco
            de desenvolver a doença), à presença de síndromes na família (que
            podem ser fatores de risco) e à hereditariedade (casos de câncer na
            família).
          </p>
        </div>
      </div>

      <h1 className="mb-6 text-center text-3xl text-primary">
        Conheça nossas campanhas
      </h1>
    </PageLayout>
  );
};

export default CampaignsScreen;
