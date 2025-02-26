import PageLayout from "@/components/PageLayout";
import { Image } from "@heroui/react";
import BaseButton from "@/components/Button";
import ProjectCard from "./components/ProjectCard";
import GetOnProMock from "./GetOnProMock";

export default function GetOnPro(): JSX.Element {
  return (
    <PageLayout title="Instituto Oncoclínicas" subtitle="Get On Pro">
      <div className="mt-10 flex w-full justify-center md:mt-10 lg:mt-7">
        <Image
          src="/assets/images/get-on-pro/get-on-pro.svg"
          alt="Get On Pro"
          className="h-[79px] w-[310px] md:h-[127px] md:w-[498px]"
        />
      </div>
      <div className="ml-9 mr-11 md:ml-7 md:mr-14">
        <div className="mt-10 text-xl text-darkGray lg:mt-8 lg:text-[26px]">
          <p>
            As equipes médicas são desafiadas continuamente a atualizar os seus
            conhecimentos e a incorporar novas ideias, teorias e conceitos às
            suas práticas clínicas. O projeto Get On, elaborado pelo Instituto
            Oncoclínicas em parceria com a Pfizer, foi desenvolvido para atender
            às contínuas atualizações de conhecimento em saúde aliado com temas
            de gestão em foco.
          </p>
          <p className="mt-10">
            O programa promove a transposição do conhecimento para a prática.
            Desse modo, os modelos de educação médica continuada do Instituto
            Oncoclínicas e da Pfizer buscaram não apenas trazer novos
            conhecimentos, mas também contribuir com o desenvolvimento pleno dos
            médicos residentes, para cada vez mais transformar a vida dos nossos
            pacientes.
          </p>
          <p className="mt-10">
            No projeto Get ON, o Instituto Oncoclínicas e a Pfizer se juntam na
            construção de um espaço exclusivo e inovador, com experiências de
            aprendizagem multidisciplinares, trazendo propostas customizadas de
            conteúdo e materiais de atualização médica, síncronos e assíncronos,
            com aulas, textos, podcasts, vídeos, aulas ao vivo, etc.
          </p>
          <p className="mt-10">
            A proposta de um curso de extensão voltado à gestão em saúde e
            atento às intensas transformações tecnológicas visa oferecer a
            jovens oncologistas uma oportunidade de formação para ampliar sua
            atuação, envolvendo-se com o gerenciamento e a tomada de decisão em
            saúde.
          </p>
        </div>
        <div className="mb-6 mt-10 text-2xl text-primary md:mb-9 md:text-[36px] lg:mb-8 lg:mt-24 lg:text-[48px]">
          <h1>Conheça os pilares educacionais do projeto</h1>
        </div>
        <div>
          {GetOnProMock.map((item) => (
            <ProjectCard key={item.id} title={item.title} text={item.text} />
          ))}
        </div>

        <div className="mt-10 text-xl text-darkGray lg:mt-8 lg:text-[26px]">
          <p className="mt-8">
            Umas das iniciativas do projeto é um curso de Gestão em Saúde. Em
            uma parceria inédita, Instituto Oncoclínicas, Pfizer e FGV - Rio
            criaram um programa focado no desenvolvimento de jovens oncologistas
            e hematologistas, entendendo que competências de gestão também são
            competências médicas. O curso transita por temas atuais e
            relevantes, essenciais para um novo olhar sobre o mercado de saúde.
          </p>
          <p className="mt-10">
            O curso oferece 336 horas de aulas e está disponível para 40 jovens
            médicos oncologistas e hematologistas de todo o Brasil.
          </p>
          <p className="mt-10">
            <span className="text-black">
              As inscrições estarão abertas a partir de 1º de setembro de 2024 e
              se encerrarão em 30 de setembro de 2024.
            </span>
          </p>
          <p className="mt-10">
            <span className="text-black">
              O processo seletivo ocorrerá de 1 a 11 de outubro de 2024.
            </span>
          </p>
          <p className="mt-10">
            <span className="text-black">
              Previsto para iniciar em 28 de outubro, o curso terá uma duração
              total de 16 meses.
            </span>
          </p>
        </div>
        <div>
          <BaseButton
            className="mt-10 flex h-[54px] min-w-[316px] justify-self-center rounded-[4px] text-white md:w-[341px] md:justify-self-start"
            color="primary"
            size="lg"
          >
            Faça sua inscrição
          </BaseButton>
        </div>
        <div>
          <BaseButton
            className="mb-16 mt-4 flex h-[54px] w-[316px] justify-self-center rounded-[4px] text-white md:w-[341px] md:justify-self-start"
            color="primary"
            size="lg"
          >
            Edital 2024
          </BaseButton>
        </div>
      </div>
    </PageLayout>
  );
}
