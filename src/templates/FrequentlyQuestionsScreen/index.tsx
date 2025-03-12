import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import MenuSelector from "./components/MenuSelector";
import { menuContent, options } from "./helper";

export default function FrequentlyQuestionsScreen(): JSX.Element {
  const [activeContent, setActiveContent] = useState<number>(1);

  const renderContent = menuContent[activeContent];

  return (
    <PageLayout
      title="Perguntas Frequentes"
      subtitle="Confira as perguntas e respostas mais frequentes sobre câncer, seus tipos, tratamentos e tire suas dúvidas navegando entre as categorias."
    >
      <h1 className="mt-10 text-center text-[25px] font-light text-primary md:text-5xl lg:text-left lg:text-title-lg">
        O que você quer saber?
      </h1>

      <div className="my-10">
        <MenuSelector
          options={options}
          onClick={(id) => setActiveContent(id)}
        />
      </div>

      <div className="mb-[50px]">{renderContent}</div>
    </PageLayout>
  );
}
