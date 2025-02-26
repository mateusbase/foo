import PageLayout from "@/components/PageLayout";
import { useDeviceType } from "@/hooks/useDeviceType";
import BaseSwiper from "@/components/BaseSwiper";
import RightFullbleedBanner from "./components/RightFullbleedBanner";
import CryotherapyCard from "./components/CryotherapyCard";
import { cryotherapyMediumMock, cryotherapyMock } from "./cryotherapyMock";

export default function CryotherapyScreen(): JSX.Element {
  const deviceType = useDeviceType();
  const descriptionText =
    deviceType === "mobile"
      ? "O cuidado completo do maior grupo de oncologia da América Latina, agora está acessível a todos."
      : "Trinta minutos antes da sessão de quimioterapia, o paciente veste uma touca especial, chamada de touca hipotérmica, que resfria o couro cabeludo a uma temperatura entre 18°C e 22°C e a mantém estável, reduzindo o risco de absorção dos medicamentos nesta região.";

  return (
    <PageLayout
      title="Crioterapia"
      subtitle="Método que realiza o resfriamento do couro cabeludo utilizado durante o tratamento oncológico para diminuir a queda do cabelo."
    >
      <RightFullbleedBanner
        src="/assets/images/crioterapia/image (4).png"
        title={
          deviceType === "desktop"
            ? "Como funciona"
            : " É para pacientes oncológicos, com custo acessível, é pra mim"
        }
        description={descriptionText}
        buttonText="Saiba mais"
        subDescription="O indivíduo deve permanecer com ela por cerca de uma hora e meia após o término da infusão, dependendo do protocolo adotado."
        hasButton
      />

      <div className="mt-10">
        <h1 className="mb-10 text-2xl text-primary md:text-5xl">
          O que é a Crioterapia Capilar?
        </h1>

        <BaseSwiper
          data={cryotherapyMock}
          renderItem={(item) => (
            <CryotherapyCard
              key={item.id}
              description={item.text}
              icon={item.icon}
            />
          )}
          className="md:hidden"
        />

        <div className="mb-28 hidden flex-col gap-10 md:flex lg:hidden">
          {cryotherapyMediumMock.map((item) => (
            <CryotherapyCard
              key={item.id}
              description={item.text}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="hidden flex-row gap-10 lg:flex">
          {cryotherapyMock.map((item) => (
            <CryotherapyCard
              key={item.id}
              description={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
