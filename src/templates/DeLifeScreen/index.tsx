import BaseSwiper from "@/components/BaseSwiper";
import FullbleedBanner from "@/components/FullbleedBanner";
import PageLayout from "@/components/PageLayout";
import SimpleCard from "@/components/SimpleCard";
import ColoredCard from "@/components/ColoredCard";
import FormularySection from "@/components/FormularySection";
import { useState, useEffect } from "react";
import assistencyMock from "./assistencyMock";
import coloredCardMock from "./coloredCardMock";

export default function DeLifeScreen(): JSX.Element {
  const [maxWidth, setMaxWidth] = useState<string>("100vw");

  useEffect(() => {
    const updateWidth = (): void => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      setMaxWidth(`calc(100vw - ${scrollbarWidth}px)`);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  let imageSrc = "/assets/images/delife/fullbleed_banner_sm.png";
  if (window.innerWidth > 1024) {
    imageSrc = "/assets/images/delife/fullbleed_banner_md.png";
  } else if (window.innerWidth > 640) {
    imageSrc = "/assets/images/delife/fullbleed_banner_lg.png";
  }

  return (
    <PageLayout
      title="DeLife"
      subtitle="A DeLife é uma empresa da Oncoclínicas&Co que fornece medicação oncológica oral para pacientes oferecendo apoio continuado durante seu tratamento."
    >
      <FullbleedBanner
        src={imageSrc}
        title="Uma empresa da Oncoclínicas&Co"
        description="Foi para garantir que as drogas orais cheguem até os pacientes e para que recebam todas as orientações para a segurança no uso do quimioterápico, que a Oncoclínicas criou a DeLife. A proposta é realizar a gestão de medicamentos oncológicos orais com eficiência por meio de um exclusivo Programa de Suporte ao Paciente (PSP), assegurando que os pacientes recebam o medicamento em casa, sendo orientados de forma correta sobre sua utilização."
      />

      <h1 className="mb-4 text-4xl text-primary md:text-title-lg">
        Assistência ao paciente
      </h1>
      <p className="mb-9 text-xl text-darkGray md:mb-16 lg:mb-9">
        A DeLife foi criada para garantir que as drogas orais cheguem até os
        pacientes e que eles recebam todas as orientações. A proposta é realizar
        a gestão de medicamentos oncológicos orais com eficiência pelo Programa
        de Suporte ao Paciente (PSP).
      </p>

      <BaseSwiper
        data={assistencyMock}
        renderItem={(item) => (
          <SimpleCard
            key={item.id}
            title={item.title}
            description={item.description}
            textPrimary
          />
        )}
        className="md:hidden"
      />

      <div className="mb-28 hidden md:grid md:grid-cols-2 md:gap-8 lg:flex lg:flex-row">
        {assistencyMock.map((item) => (
          <SimpleCard
            key={item.id}
            title={item.title}
            description={item.description}
            textPrimary
          />
        ))}
      </div>

      <div className="mb-20 flex flex-col gap-14 lg:flex-row">
        {coloredCardMock.map((item) => (
          <ColoredCard
            key={item.id}
            title={item.title}
            background={item.background}
            description={item.description}
            buttons={item.buttons}
          />
        ))}
      </div>

      <FormularySection
        background
        title="Seja um parceiro"
        subtitle="Quer fazer parte desta iniciativa? Preencha o formulário abaixo para receber outras informações sobre como se tornar um parceiro DeLife."
        className="relative left-1/2 w-screen max-w-none -translate-x-1/2 lg:-mb-12"
        style={{ maxWidth }}
        hasTelephone
        additionalFields={[
          {
            name: "message",
            type: "textarea",
            label: "Mensagem",
          },
        ]}
      />
    </PageLayout>
  );
}
