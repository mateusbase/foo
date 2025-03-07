import PageLayout from "@/components/PageLayout";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import OCAboutLivingCard from "./components/OcAboutLivingCard";
import CancerCardMock from "./components/CancerCard/CancerCardMock";
import CancerCard from "./components/CancerCard";

export default function OCAboutLivingScreen(): JSX.Element {
  return (
    <PageLayout title="OC sobre VIVER">
      <div className="mt-10">
        <h2 className="mb-14 text-wrap font-lato-thin text-4xl text-primary">
          Pacientes no centro do cuidado
        </h2>
        <p className="text-sm text-darkGray md:text-xl">
          O <span className="text-gray-900">OC sobre VIVER</span> é um programa
          especial do Grupo Oncoclínicas que oferece o melhor cuidado ao
          paciente também após a fase mais intensa do tratamento oncológico.
        </p>
        <p className="mt-8 text-sm text-darkGray md:text-xl">
          Essa é uma iniciativa inovadora no Brasil, que busca garantir o{" "}
          <span className="text-gray-900"> melhor cuidado possível </span> ao
          paciente, oferecendo uma variedade de serviços focados em suas
          diversas necessidades e disponibilizando nossa equipe multidisciplinar
          e outras especialidades.
        </p>
        <p className="mt-8 text-sm text-darkGray md:text-xl">
          Além disso, o programa também contempla uma atenção especial aos entes
          queridos e familiares.
        </p>
        <p className="mt-8 text-sm text-darkGray md:text-xl">
          Os pacientes que podem participar deste programa são aqueles que
          venceram o câncer e foram identificados como elegíveis pelo médico
          assistente.
        </p>
        <div>
          <h2 className="mb-10 mt-14 text-wrap font-lato-thin text-4xl text-primary">
            Participam atualmente:
          </h2>
        </div>

        <div className="mb-10 mt-9 lg:flex">
          {CancerCardMock.map((benefit) => (
            <CancerCard description={benefit.description} icon={benefit.icon} />
          ))}
        </div>

        <h2 className="mb-10 mt-14 text-wrap font-lato-thin text-2xl text-primary md:text-4xl">
          Depois de ser confirmado pelo médico, a enfermeira responsável pelo
          programa entra em contato com o paciente e oferece uma consulta com o
          médico do OC sobre VIVER.
        </h2>

        <div>
          <h2 className="mb-4 mt-14 text-wrap font-lato-thin text-2xl text-primary md:text-4xl">
            O programa conta com:
          </h2>
          <OCAboutLivingCard />
        </div>

        <div>
          <p className="mt-8 text-sm text-darkGray md:text-xl">
            O programa será ofertado nacionalmente e já é realidade nas unidades
            NOB, OBH, GOC Botafogo, CETTRO, CECON, NOS e CPO.
          </p>
          <p className="mt-8 text-sm text-darkGray md:text-xl">
            Entre em contato com a sua unidade para verificar disponibilidade do
            programa e faça parte do OC sobre VIVER.
          </p>
          <p className="mt-8 text-sm text-darkGray md:text-xl">
            Tire suas dúvidas pelo ocsobreviver@oncoclínicas.com
          </p>
        </div>
      </div>
      <div className="mb-10 mt-16">
        <ShareOptions options={socialNetwork} />
      </div>
    </PageLayout>
  );
}
