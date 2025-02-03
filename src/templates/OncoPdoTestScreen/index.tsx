import PageLayout from "@/components/PageLayout";
import { Image } from "@heroui/react";
import { stepTestData } from "./data/stepTestData";
import StepTestCard from "./components/StepTestCard";

export default function OncoPdoTestScreen(): JSX.Element {
  const testContent = `
    Criado para auxiliar na tomada de decisão dos tratamentos oncológicos, este teste permite analisar a resposta do tumor a diferentes combinações de quimioterápicos e terapias-alvo moleculares, auxiliando na determinação de um tratamento 100% personalizado, muito mais eficaz e assertivo.

O Teste Onco-PDO™ é realizado a partir de material tumoral, extraído por biópsia ou punção. As células coletadas passam por cultivo e tratamento, gerando aglomerados geneticamente idênticos ao tumor, chamados de PDOs (Patient-Derived Organoids).

A partir disso, são criados modelos in-vitro em 3D aos quais são aplicadas as possibilidades de tratamento escolhidas pelo médico. A resposta tumoral é quantificada e analisada para cada combinação de medicamentos e terapias, possibilitando identificar qual será mais assertiva para aquele paciente, individualmente.`;

  const paragraphs = testContent.trim().replace(/\n+/g, "\n\n").split("\n\n");

  return (
    <PageLayout
      title="Teste ONCO-PDO&trade;"
      subtitle="Teste in-vitro que, a partir de modelos 3D obtidos do próprio tumor do paciente, avalia e quantifica a resposta das células tumorais a diferentes combinações de agentes quimioterápicos e terapias-alvo moleculares."
    >
      <div className="mt-10">
        <h1 className="text-4xl text-primary md:text-[40px]">
          Onco-PDO<sup>&trade;</sup> é o que há de mais moderno em Oncologia de
          Precisão
        </h1>

        <div className="my-10 w-full" />
        {paragraphs.map((paragraph) => (
          <p className="mt-5 text-xl text-darkGray">{paragraph}</p>
        ))}
      </div>

      <div className="mt-20 w-full">
        <Image
          src="/assets/images/onco-pdo-test.png"
          alt="Imagem OC Linha de Cuidado"
          className="h-[354px] w-[1536px] rounded-none object-cover"
        />
      </div>

      <div className="mt-14 md:mt-11 lg:mt-20">
        <h1 className="text-4xl text-primary md:text-[40px]">
          Os diferenciais do Teste Onco-PDO<sup>&trade;</sup>
        </h1>

        <p className="mt-5 text-xl text-darkGray">
          Avaliação de resposta tumoral a diferentes terapêuticas antes mesmo de
          aplicá-las ao paciente: tratamento 100% individualizado.
          <p className="mt-5 text-xl text-darkGray">
            O teste oferece um novo patamar no estudo da sensibilidade e da
            resistência que o tumor tem a diferentes caminhos e combinações de
            agentes terapêuticos, possibilitando entender de maneira precisa
            qual será a resposta a cada possibilidade de tratamento antes de
            aplicá-las ao paciente.
          </p>
          <p className="mt-5 text-xl text-darkGray">
            Além disso, o Teste Onco-PDO<sup>&trade;</sup> também se destacada
            por:
          </p>
          <ul className="ml-8 list-disc text-xl text-darkGray">
            <li>
              Os medicamentos a serem testados em laboratório são escolhidos
              pelo próprio oncologista, com a possibilidade do uso de esquemas
              poliquimioterápicos;
            </li>

            <li>
              O modelo 3D in vitro do paciente possibilita o teste com até 8
              tratamentos diferentes, combinados ou não;
            </li>
            <li>
              O médico conta com a assessoria da equipe de especialistas OC
              Precision Medicine durante todo o processo, desde a escolha dos
              caminhos terapêuticos a serem testados até a interpretação dos
              resultados obtidos.
            </li>
          </ul>
        </p>
      </div>

      <div className="mt-14 lg:mt-32">
        <h1 className="text-4xl text-primary md:text-[40px]">
          Etapas do Teste Onco-PDO<sup>&trade;</sup>
        </h1>
        <div className="my-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stepTestData.map((step) => (
            <StepTestCard
              stepNumber={step.id}
              stepDescription={step.description}
              stepImage={step.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="my-8 w-5/6">
        <h1 className="text-4xl text-primary md:text-[40px]">
          Em quais tumores pode ser aplicado o Teste Onco-PDO<sup>&trade;</sup>
        </h1>
        <p className="mt-5 text-xl text-darkGray">
          O Teste Onco-PDO<sup>&trade;</sup> é indicado, principalmente, para
          pacientes em estágio de câncer avançado, naqueles em que se observou o
          retorno do crescimento do tumor após a terapia padrão, isto é, aqueles
          em que a primeira linha de tratamento não mostrou uma resposta
          satisfatória.
        </p>
        <p className="mt-5 text-xl text-darkGray">
          O teste está disponível para os seguintes tumores:
        </p>
        <ul className="ml-8 mt-4 list-disc text-xl text-darkGray">
          <li>Mama</li>
          <li>Ovário</li>
          <li>Pulmão</li>
          <li>Colorretal</li>
          <li>Pancreático</li>
          <li>Gástrico</li>
          <li>Próstata</li>
        </ul>
      </div>
    </PageLayout>
  );
}
