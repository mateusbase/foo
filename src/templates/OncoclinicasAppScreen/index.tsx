import PageLayout from "@/components/PageLayout";
import StoresContainer from "./components/StoresContainer";
import { practicityMock } from "./praticityMock";
import PracticityCard from "./components/PracticityCards";

export default function OncoclinicasAppScreen(): JSX.Element {
  return (
    <PageLayout
      title="App Oncoclínicas por você"
      subtitle="Agora temos um aplicativo para os nossos pacientes e profissionais de saúde terem uma nova forma de se conectarem. O atendimento de qualidade e o cuidado que você precisa em um clique."
    >
      <StoresContainer />
      <div className="container mt-16">
        <h1 className="mb-20 text-center text-4xl text-primary">
          Uma novidade para você ter mais conforto e praticidade em todo o seu
          tratamento
        </h1>
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-2">
          {practicityMock.map((item) => (
            <PracticityCard
              key={item.id}
              title={item.titulo}
              description={item.descricao}
              icon={item.icone}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
