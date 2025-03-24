import PageLayout from "@/components/PageLayout";

import { palliativeCareData } from "./data/palliativeCareData";
import PalliativeCareCard from "./components/PalliativeCareCard";

export default function OcPalliativeCareScreen(): JSX.Element {
  return (
    <PageLayout
      title="OC Cuidados Paliativos"
      subtitle="Cuidados paliativos são realizados por uma equipe multidisciplinar que promove assistência para melhoria da qualidade de vida e também no alívio e prevenção do sofrimento dos pacientes com doenças avançadas. Saiba mais."
    >
      <div className="mt-12 md:mt-9 lg:mt-0">
        <p className="text-xl text-darkGray">
          O cuidado paliativo é uma parte fundamental dos serviços de saúde
          integrados e com foco no paciente. Nada é mais centrado no paciente do
          que o alívio do seu sofrimento, seja ele físico, psicológico, social
          ou espiritual. Portanto, independentemente da causa do sofrimento,
          seja ela câncer, falência de órgãos, queimaduras graves, doença
          crônica terminal, prematuridade ou fragilidade decorrente da idade, o
          cuidado paliativo, ou cuidados de suporte como também é chamado, pode
          ser necessário e deve estar integrado ao tratamento.
        </p>

        <p className="mt-5 text-xl text-darkGray">
          Essa abordagem melhora a qualidade de vida do paciente e das pessoas
          próximas, que enfrentam com ele as questões associadas à doença;
          previne e alivia o sofrimento por meio de identificação precoce,
          avaliação correta e tratamento da dor e de outros problemas. As
          investigações necessárias para a melhor compreensão e escolha das
          condutas para cuidar das complicações e dos sintomas estressantes
          relacionados ao tratamento e à evolução da doença devem fazer parte
          dos cuidados paliativos.
        </p>

        <p className="mt-5 text-xl text-darkGray">
          Uma curiosidade: o termo “paliativo” deriva do latim “pallium”, que
          significa “manto protetor” , e “palliare” significa “proteger,
          acolher, amparar”. Proteger alguém é uma forma de cuidado. Em
          pacientes com câncer em fase avançada, em que alguns tipos de
          tratamentos são fundamentais para o controle dos sintomas, os cuidados
          paliativos são muito importantes.
        </p>

        <p className="mt-5 text-xl text-darkGray">
          É preciso desmistificar a ideia de que os cuidados paliativos só são
          adotados quando não há mais possibilidade de tratamento e o indivíduo
          se encontra em fase terminal. Seu principal objetivo, na realidade, é
          promover a qualidade de vida dos pacientes e das pessoas de sua rede
          de apoio por meio de prevenção e alívio do sofrimento em qualquer fase
          da doença.
        </p>
      </div>

      <div className="mt-10 lg:mt-20">
        <h1 className="text-4xl text-primary md:text-title-lg">
          Pilares dos cuidados paliativos
        </h1>

        <div className="mt-10 grid gap-5 md:grid lg:grid-cols-2">
          {palliativeCareData.map((care) => (
            <PalliativeCareCard
              serviceName={care.title}
              iconCard={care.icon || ""}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 lg:mt-24">
        <h1 className="mb-11 text-4xl text-primary md:mb-9 md:text-title-lg lg:mb-14">
          Conheça o Programa de Cuidados Paliativos da Oncoclínicas
        </h1>

        <div className="flex justify-center">
          <iframe
            width="852"
            height="500"
            src="https://www.youtube.com/embed/cbAIEvKPpn4"
            title="Programa de Cuidados Paliativos da Oncoclínicas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-[178px] w-[326px] rounded-3xl md:h-[417px] md:w-[763px] lg:h-[839px] lg:w-[1536px]"
          />
        </div>
      </div>

      <div className="mt-20 lg:mt-24">
        <h1 className="text-4xl text-primary md:mb-8 md:text-title-lg lg:mb-14">
          Quando o cuidado paliativo deve ser iniciado no paciente com câncer{" "}
        </h1>
        <p className="mt-4 text-xl text-darkGray">
          Os cuidados paliativos devem ser iniciados o mais precocemente
          possível no paciente com câncer. Eles podem estar associados ao
          tratamento que objetiva a cura da doença, assumindo papel importante
          para ajudar no manejo dos sintomas de difícil controle e na melhora
          das condições clínicas do paciente.
        </p>
        <p className="mt-4 text-xl text-darkGray">
          É fundamental entender que o paciente com uma doença como o câncer não
          tem que escolher entre a equipe médica com tratamento direcionado à
          sua doença (oncologistas e hematologistas, por exemplo) e a equipe de
          cuidados paliativos. Doenças oncológicas em fase avançada ou pessoas
          em tratamento do câncer com sintomas de difícil controle têm
          benefícios em receber esse atendimento conjunto.
        </p>
        <p className="mt-4 text-xl text-darkGray">
          Os cuidados acontecem de maneira integrada, com toda a equipe médica e
          multiprofissional exercendo funções de extrema importância. Médico
          paliativista, enfermeiro, assistente social, farmacêutico,
          fisioterapeuta, terapeuta ocupacional, psicólogo, nutricionista,
          fonoaudiólogo e assistente espiritual trabalham juntos em busca das
          melhores condições para o paciente e sua rede de apoio.
        </p>
        <p className="mt-4 text-xl text-darkGray">
          Conforme a doença progride, mesmo quando o tratamento com intenção
          curativa está em curso, a abordagem paliativa deve ser ampliada para
          os aspectos psicológicos, sociais e espirituais. Na fase de
          terminalidade, em que o paciente tem pouco tempo de vida, o tratamento
          paliativo continua e é feito como forma de assegurar a qualidade de
          vida, o conforto e a dignidade do paciente.
        </p>
      </div>

      <div className="mt-20">
        <h1 className="text-4xl text-primary md:text-title-lg lg:mb-14">
          Quais pacientes oncológicos devem ser encaminhados aos cuidados
          paliativos
        </h1>
        <p className="mt-12 text-xl text-darkGray">
          No cenário da oncologia, a ASCO (Associação Americana de Oncologia
          Clínica) estabeleceu em 2017 quais pacientes devem estar no
          acompanhamento dos cuidados paliativos. São eles:
        </p>

        <ul className="ml-5 mt-4 list-disc text-xl text-darkGray">
          <li>Paciente oncológicos em estádio avançado (com metástases);</li>
          <li>
            Pessoas em tratamento do câncer com sintomas de difícil controle em
            qualquer fase da doença.
          </li>
        </ul>
        <p className="mt-4 text-xl text-darkGray">
          Pacientes com neoplasias hematológicas avançadas ou refratárias e
          aqueles com alta carga de sintomas e/ou com necessidades
          biopsicossociais também se beneficiam dessa abordagem.
        </p>
        <p className="mt-4 text-xl text-darkGray">
          A equipe de cuidados paliativos não só aperfeiçoou o nosso cuidado
          através de acolhimento multidimensional das necessidades humanas, como
          também, principalmente, proporcionou ganhos significativos na
          qualidade de vida daqueles de quem cuidamos.
        </p>
        <p className="mt-4 text-xl text-darkGray">
          Na Oncoclínicas o nome do programa de cuidados paliativos é equipe de
          Cuidados Continuados, procure saber se em sua unidade o serviço é
          oferecido.
        </p>
      </div>

      <div className="full-bleed mt-10 flex w-full text-white lg:mb-10 lg:h-[794px]">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="size-full h-[209px] md:h-[439px] lg:hidden">
            <img
              src="/assets/images/banner-palliative-care.png"
              alt="Imagem 1"
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 bg-custom-gradient-dark p-10 py-20 lg:h-[794px] lg:w-1/2 lg:rounded-bl-[100px] lg:px-16">
            <h1 className="text-4xl leading-none md:text-title-lg lg:text-5xl">
              Quais os benefícios dos cuidados paliativos na oncologia
            </h1>
            <p className="mt-5 text-xl font-bold">
              O acompanhamento pela equipe de cuidados paliativos traz
              benefícios diversos, tais como:
            </p>
            <ul className="ml-5 mt-5 list-disc text-xl font-bold">
              <li>Melhora de controle de sintomas;</li>
              <li>
                Atendimento com visão integral do paciente e de sua família;
              </li>
              <li>
                Valorização da autonomia do paciente, sempre respeitando seus
                valores e prioridades;
              </li>
              <li>
                Planejamento de cuidados individualizados, de acordo com a
                necessidade e contexto físico, social, familiar, emocional e
                espiritual de cada paciente;
              </li>
              <li>
                Visão humanizada e prevenção do estresse dos envolvidos no
                cuidado com o paciente;
              </li>
              <li>
                Suporte de uma equipe transdisciplinar no período de
                enfrentamento da doença e seu tratamento.
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:size-full lg:h-full lg:w-1/2">
            <img
              src="/assets/images/banner-palliative-care.png"
              alt="Imagem 1"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
