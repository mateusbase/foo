import PageLayout from "@/components/PageLayout";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import OcCareLineBanner from "./components/OcCareLineBanner";
import VeinviewerBanner from "./components/VeinviewerBanner";

export default function VeinviewerScreen(): JSX.Element {
  return (
    <PageLayout
      title="Veinviewer"
      subtitle="Visualizador de veia que utiliza luz infravermelha para detectar o mapa vascular do paciente em alta definição e reduz o número de punções nos pacientes."
    >
      <div className="lg:flexlg: relative left-1/2 mt-0 w-screen -translate-x-1/2 md:-mt-5 md:w-full lg:mt-11">
        <VeinviewerBanner />
      </div>

      <div className="mx-20 mt-20 sm:mb-20">
        <h1 className="text-4xl text-primary md:text-[40px]">
          Conforto e segurança no tratamento.{" "}
        </h1>
        <p className="mt-20 text-base text-darkGray md:text-xl">
          O VeinViewer, ou visualizador de veia, é um dispositivo que utiliza
          luz infravermelha para detectar o mapa vascular subcutâneo e criar uma
          imagem digital em alta definição das veias do paciente, projetada
          diretamente na superfície da pele.
        </p>
        <p className="mt-4 text-base text-darkGray md:text-xl">
          Estudos que avaliaram esta tecnologia descobriram que ele pode
          localizar veias com até 15mm de profundidade.
        </p>
        <h3 className="mt-10 text-base font-bold text-darkGray md:text-xl">
          Aplicações do Veinviewer
        </h3>
        <p className="mt-4 text-base text-darkGray md:text-xl">
          O visualizador de veia é utilizado como forma de proporcionar uma
          melhor experiência para o paciente. Ao direcionar o profissional
          responsável pelo atendimento para a veia, ele reduz o número de
          punções, melhora potencialmente o tempo de permanência do cateter
          intravenoso e evita complicações associadas.
        </p>
        <h3 className="mt-10 text-base font-bold text-darkGray md:text-xl">
          Como o Veinviewer é utilizado na oncologia
        </h3>
        <p className="mt-4 text-base text-darkGray md:text-xl">
          O cateter intravenoso periférico (ou cânula) é um dispositivo que
          serve para administrar soluções e medicamentos diretamente nas veias,
          como ocorre durante a quimioterapia. Ele também é indicado para manter
          a hidratação do paciente que se encontra incapaz de fazê-lo por via
          oral (ou seja, que naquele momento não pode ingerir líquidos).
        </p>
        <p className="mt-4 text-base text-darkGray md:text-xl">
          Embora a sua colocação seja relativamente simples, pode causar
          desconforto a alguns pacientes, principalmente quando a veia não é
          puncionada na primeira tentativa. Os indivíduos com câncer podem
          necessitar de diversos ciclos de quimioterapia ou outras infusões
          intravenosas. Nesse contexto, é muito importante que eles se sintam
          seguros e sejam submetidos ao menor número de punções possível.
        </p>
        <p className="mt-4 text-base text-darkGray md:text-xl">
          O visualizador de veia é bastante recomendado nesse cenário,
          principalmente entre os pacientes mais jovens, com a pigmentação da
          pele mais escura ou aqueles que têm veias que se movimentam mais,
          situações que geralmente dificultam a punção.
        </p>
        <h3 className="mt-10 text-base font-bold text-darkGray md:text-xl">
          Como o VeinViewer funciona
        </h3>
        <p className="mt-4 text-base text-darkGray md:text-xl">
          No pré-acesso (antes da punção) – quando um enfermeiro analisa as
          veias do paciente antes de fazer uma punção, aquela mais aparente nem
          sempre é a melhor opção para a colocação do acesso. O VeinViewer faz
          essa avaliação prévia e oferece ao profissional as melhores
          alternativas. Ele é capaz de localizar veias que são clinicamente
          relevantes para um procedimento periférico, com até 10mm de
          profundidade para a colocação de cateter intravenoso periférico ou com
          até 15mm para coleta do sangue para exame.
        </p>
        <p className="mt-4 text-base text-darkGray md:text-xl">
          Durante a punção – alguns fatores imprevisíveis podem tornar a
          inserção do cateter um desafio, fazendo com que seja necessário
          reiniciar o procedimento do zero. As imagens projetadas pelo
          VeinViewer permitem que o profissional mude a estratégia imediatamente
          e consiga finalizar a inserção do cateter sem a necessidade de
          puncionar a veia novamente.
        </p>
        <p className="mb-6 mt-4 text-base text-darkGray md:text-xl">
          Após o acesso – terminado o procedimento, o visualizador de veia
          confirma se ele foi bem sucedido ao demonstrar o fluxo de fluídos
          intravenosos e apontando se o cateter está funcionando corretamente.
          Ele também é capaz de detectar a presença de um hematoma à medida em
          que ele se forma e, com isso, evitar uma infiltração (lesão e
          perfuração da veia, resultando na infiltração dos medicamentos nos
          tecidos próximos à inserção do cateter venoso).
        </p>
      </div>
      <OcCareLineBanner />
      <div className="mb-10 mt-16">
        <ShareOptions options={socialNetwork} />
      </div>
    </PageLayout>
  );
}
