import PageLayout from "@/components/PageLayout";
import { Image } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import { palliativeCareData } from "./data/palliativeCareData";
import PalliativeCareCard from "./components/PalliativeCareCard";

export default function OcPalliativeCareScreen(): JSX.Element {
  const { prevRef, nextRef, swiperRef, currentIndex, onBeforeInit } =
    useSwiperNavigation();

  return (
    <PageLayout
      title="OC Cuidados Paliativos"
      subtitle="Cuidados paliativos são realizados por uma equipe multidisciplinar que promove assistência para melhoria da qualidade de vida e também no alívio e prevenção do sofrimento dos pacientes com doenças avançadas. Saiba mais."
    >
      <div className="lg:mt-10">
        <p className="mt-5 text-xl text-darkGray">
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

      <div className="mt-10">
        <h1 className="text-4xl text-primary md:text-[40px]">
          Pilares dos cuidados paliativos
        </h1>

        <div className="mt-10 hidden gap-5 md:grid lg:grid-cols-2">
          {palliativeCareData.map((care) => (
            <PalliativeCareCard serviceName={care.title} />
          ))}
        </div>

        <div className="relative mt-10 md:hidden">
          <Swiper
            loop
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation]}
            onBeforeInit={(swiper) => onBeforeInit(swiper)}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {palliativeCareData.map((care) => (
              <SwiperSlide key={care.id}>
                <PalliativeCareCard serviceName={care.title} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-2 flex justify-center">
            <SliderArrows
              swiperRef={swiperRef}
              prevRef={prevRef}
              nextRef={nextRef}
              size={0.6}
              showSwiperPagination
              currentIndex={currentIndex}
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl text-primary md:text-[40px]">
          Conheça o Programa de Cuidados Paliativos da Oncoclínicas
        </h1>

        <div className="full-bleed">
          <Image
            src="/assets/images/preview-video-palliative.png"
            aria-label="Preview de vídeo"
            className="mt-16 w-full rounded-none"
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl text-primary md:text-[40px]">
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
        <h1 className="text-4xl text-primary md:text-[40px]">
          Quais pacientes oncológicos devem ser encaminhados aos cuidados
          paliativos
        </h1>
        <p className="mt-12 text-xl text-darkGray">
          No cenário da oncologia, a ASCO (Associação Americana de Oncologia
          Clínica) estabeleceu em 2017 quais pacientes devem estar no
          acompanhamento dos cuidados paliativos. São eles:
        </p>

        <ul className="ml-4 mt-4 list-disc text-xl text-darkGray">
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

      <div className="full-bleed mt-10 flex w-full text-white lg:h-[794px]">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex flex-col gap-2 bg-gradient-to-t from-purpleAccent from-5% via-30% to-primary-foreground p-10 py-20 lg:h-[794px] lg:w-1/2 lg:rounded-bl-[100px] lg:px-16">
            <h1 className="text-4xl leading-none md:text-[40px] lg:text-5xl">
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

          <div className="size-full h-full lg:w-1/2">
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
