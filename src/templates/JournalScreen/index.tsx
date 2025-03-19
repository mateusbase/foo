import BaseContainer from "@/components/Container";
import BaseButton from "@/components/Button";
import { LuArrowUpRight } from "react-icons/lu";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import FormularySection from "@/components/FormularySection";
import PageLayout from "@/components/PageLayout";
import { useState, useEffect } from "react";
import Image from "next/image";
import NewsPreviewCard from "./components/NewsPreviewCard";
import { newsItems } from "./optionsMock";

export default function JournalScreen(): JSX.Element {
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

  const noticeContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis rutrum varius. Vestibulum molestie laoreet dui quis accumsan. Aenean nisl odio, aliquam et libero posuere, viverra pretium lectus. Cras justo orci, rutrum nec tellus a, vulputate eleifend ligula. Aenean rutrum nisi dui, eget aliquam velit pretium non. Curabitur id nunc et nulla maximus pulvinar et ut urna. Nullam posuere ex a viverra congue. Cras et vestibulum orci, ac bibendum orci. In bibendum tortor et eros tincidunt, quis cursus odio aliquet. Fusce la ligula quis eros convallis rhoncus. Nam rutrum ligula et tellus tempor, at pharetra mauris dictum. Sed quis dolor consectetur, laoreet arcu ut, tempor est. Praesent bibendum fermentum ipsum id suscipit. Morbi sit amet eros libero.

    Sed placerat maximus tincidunt. Nulla ac lacus metus. Sed sed lorem eros. Sed sollicitudin, nibh sed auctor rutrum, odio enim iaculis ex, nec euismod est enim ut ex. Vivamus iaculis, nibh et viverra pellentesque, ex massa ultricies dui, quis gravida mi metus at neque. Nullam sollicitudin velit id libero gravida, eget fringilla magna varius. Curabitur porta sem id arcu consequat, a placerat arcu posuere. Quisque mattis justo sit amet lobortis hendrerit. Sed viverra imperdiet ligula, vel congue massa aliquet sed.
    
    Curabitur condimentum auctor massa eget dictum. Fusce non ante at sapien vulputate vestibulum. Nam blandit volutpat ipsum, non fringilla arcu faucibus eu. Suspendisse consequat elit neque, a ultricies nulla faucibus sed. Nam elit velit, maximus non ipsum vel, feugiat mollis mi. Donec in dui mi. Integer nec consectetur arcu, eu pulvinar nunc. Proin mattis imperdiet mollis. Donec lobortis, nulla ac auctor ultricies, nisi neque pretium nisi, ac elementum arcu sapien a justo. Phasellus cursus ullamcorper nisi id congue. Donec id ligula id est elementum rhoncus et at sapien. Suspendisse libero arcu, posuere vitae fermentum nec, rhoncus ut urna. Pellentesque eleifend mauris vitae erat maximus mollis. Vestibulum posuere quis dolor vitae efficitur. Cras sagittis lorem quis bibendum tincidunt.
  
    `;

  const paragraphs = noticeContent.trim().replace(/\n+/g, "\n\n").split("\n\n");

  return (
    <PageLayout
      title="OC Journal"
      subtitle="A newsletter científica do Grupo Oncoclínicas"
    >
      <div className="flex flex-col items-center">
        <p className="mt-10 text-sm text-lightGray md:text-xl lg:mt-0">
          10 de outubro de 2025
        </p>
        <BaseButton
          className="mt-10 max-h-9 text-sm md:w-52"
          variant="bordered"
          color="secondary"
          startContent={<LuArrowUpRight />}
        >
          Inovação & Oncologia
        </BaseButton>

        <div className="mt-10 text-center text-xl font-light text-primary md:text-4xl lg:text-5xl">
          A Inteligência Artificial está presente em diversos exames para apoiar
          o médico no diagnóstico.
        </div>

        <div className="mt-10">
          <p className="text-sm font-bold text-darkGray md:text-base lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="mt-10 w-full">
          <Image
            width={1024}
            height={1024}
            alt="Imagem da noticia"
            src="/assets/images/detalhes-oc-journal/Captura-de-tela-2024-11-13-132910.png"
            className="h-[252px] w-full md:h-[227px] lg:h-[538px]"
          />
        </div>

        <div className="my-10 w-full">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-sm leading-snug text-lightGray md:text-base lg:text-[22px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="mb-10 flex flex-col justify-center gap-16 md:justify-start">
        <BaseButton className="w-full bg-purpleLight text-white md:w-[322px]">
          Faça o download
        </BaseButton>
        <ShareOptions options={socialNetwork} />
      </div>
      <div className="flex items-center justify-center">
        <FormularySection
          title="Para receber as próximas edições, cadastre-se aqui."
          buttonText="Cadastrar"
          additionalFields={[
            {
              label: "CRM",
              type: "input",
              name: "crm",
            },
            {
              label: "UF",
              type: "select",
              name: "uf",
              options: [
                {
                  value: "SP",
                  label: "SP",
                  key: "1",
                },
                {
                  value: "RJ",
                  label: "RJ",
                  key: "1",
                },
                {
                  value: "MG",
                  label: "MG",
                  key: "1",
                },
              ],
            },
            {
              label: "Especialidade",
              type: "input",
              name: "especialidade",
            },
          ]}
        />
      </div>

      <div
        className="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 flex-col bg-gray-foreground py-20 lg:-mb-12"
        style={{ maxWidth }}
      >
        <BaseContainer>
          <h1 className="text-6xl font-light text-primary">
            Notícias relacionadas
          </h1>
          <div className="mt-10 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {newsItems.map((news) => (
              <NewsPreviewCard
                key={news.id}
                title={news.title}
                date={news.date}
                description={news.description}
                imageUrl={news.image}
              />
            ))}
          </div>
        </BaseContainer>
      </div>
    </PageLayout>
  );
}
