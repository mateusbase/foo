import BaseContainer from "@/components/Container";
import BaseButton from "@/components/Button";
import { LuArrowUpRight } from "react-icons/lu";
import { Image } from "@nextui-org/image";
import PageHeader from "@/components/PageHeader";
import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import Breadcrumb from "@/components/Breadcrumb";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import NewsPreviewCard from "./components/NewsPreviewCard";
import { newsItems } from "./optionsMock";

export default function NewScreen(): JSX.Element {
  const noticiaContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis rutrum varius. Vestibulum molestie laoreet dui quis accumsan. Aenean nisl odio, aliquam et libero posuere, viverra pretium lectus. Cras justo orci, rutrum nec tellus a, vulputate eleifend ligula. Aenean rutrum nisi dui, eget aliquam velit pretium non. Curabitur id nunc et nulla maximus pulvinar et ut urna. Nullam posuere ex a viverra congue. Cras et vestibulum orci, ac bibendum orci. In bibendum tortor et eros tincidunt, quis cursus odio aliquet. Fusce la ligula quis eros convallis rhoncus. Nam rutrum ligula et tellus tempor, at pharetra mauris dictum. Sed quis dolor consectetur, laoreet arcu ut, tempor est. Praesent bibendum fermentum ipsum id suscipit. Morbi sit amet eros libero.

    Sed placerat maximus tincidunt. Nulla ac lacus metus. Sed sed lorem eros. Sed sollicitudin, nibh sed auctor rutrum, odio enim iaculis ex, nec euismod est enim ut ex. Vivamus iaculis, nibh et viverra pellentesque, ex massa ultricies dui, quis gravida mi metus at neque. Nullam sollicitudin velit id libero gravida, eget fringilla magna varius. Curabitur porta sem id arcu consequat, a placerat arcu posuere. Quisque mattis justo sit amet lobortis hendrerit. Sed viverra imperdiet ligula, vel congue massa aliquet sed.
    
    Curabitur condimentum auctor massa eget dictum. Fusce non ante at sapien vulputate vestibulum. Nam blandit volutpat ipsum, non fringilla arcu faucibus eu. Suspendisse consequat elit neque, a ultricies nulla faucibus sed. Nam elit velit, maximus non ipsum vel, feugiat mollis mi. Donec in dui mi. Integer nec consectetur arcu, eu pulvinar nunc. Proin mattis imperdiet mollis. Donec lobortis, nulla ac auctor ultricies, nisi neque pretium nisi, ac elementum arcu sapien a justo. Phasellus cursus ullamcorper nisi id congue. Donec id ligula id est elementum rhoncus et at sapien. Suspendisse libero arcu, posuere vitae fermentum nec, rhoncus ut urna. Pellentesque eleifend mauris vitae erat maximus mollis. Vestibulum posuere quis dolor vitae efficitur. Cras sagittis lorem quis bibendum tincidunt.
  
    `;

  const paragraphs = noticiaContent
    .trim()
    .replace(/\n+/g, "\n\n")
    .split("\n\n");
  return (
    <>
      <div className="block bg-gray-200 p-6 lg:hidden">
        <Breadcrumb />
      </div>

      <PageHeader title="Notícias" subtitle="Oncoclínicas" />
      <BaseContainer className="px-10 lg:px-0">
        <div className="hidden px-10 py-6 md:px-0 lg:block">
          <Breadcrumb />
        </div>
        <div className="mt-10 flex flex-col items-center">
          <p className="text-sm text-lightGray md:text-xl">
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

          <div className="mt-10 w-3/4 text-center text-xl font-light text-darkGray md:text-4xl md:text-primary lg:text-5xl">
            A Inteligência Artificial está presente em diversos exames para
            apoiar o médico no diagnóstico.
          </div>

          <div className="mt-10">
            <p className="text-sm font-bold text-lightGray md:text-base lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="mt-10 w-full">
            <Image
              width="100%"
              height={536}
              radius="none"
              alt="Imagem da noticia"
              src="https://i.postimg.cc/nVgm871X/Captura-de-tela-2024-11-13-132910.png"
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
        <div className="my-10 hidden lg:flex">
          <ShareOptions options={socialNetwork} />
        </div>
      </BaseContainer>

      <div className="hidden bg-gray-foreground py-20 lg:flex">
        <BaseContainer>
          <div>
            <p className="text-6xl font-light text-primary">
              Notícias relacionadas
            </p>
          </div>
          <div className="mt-10 grid w-full grid-cols-4">
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

      <MainOptionsActions options={options} rounded="none" />
    </>
  );
}
