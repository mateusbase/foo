import PageLayout from "@/components/PageLayout";
import { IoAddCircle } from "react-icons/io5";
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
      <h1 className="mt-10 text-4xl font-light text-primary">
        O que você quer saber?
      </h1>

      <div className="my-10">
        <MenuSelector
          options={options}
          onClick={(id) => setActiveContent(id)}
        />
      </div>

      <div>{renderContent}</div>
    </PageLayout>
  );
}
