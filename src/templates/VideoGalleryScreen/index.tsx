import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import menuOptions from "./menuOptions";
import SelectButtons from "./components/SelectButtons";
import videoSectionsMock from "./videosMock";
import VideoCardSection from "./components/VideoCardsSection";

export default function VideoGalleryScreen(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string | number>(1);

  const handleButtonClick = (value: string | number): void => {
    setSelectedOption(value);
  };

  return (
    <PageLayout
      title="Galeria de vídeos"
      subtitle="Fique por dentro de todas as novidades da Oncoclínicas e acompanhe a cobertura dos nossos eventos."
    >
      <h1 className="mt-8 text-2xl text-primary lg:mt-12 lg:text-4xl">
        Navegue por nossas Playlists
      </h1>

      <div className="mb-16 md:mb-14">
        <BaseSelect
          defaultSelectedKey="1"
          labelPlacement="outside"
          color="primary"
          startContent={
            <RxHamburgerMenu size={25} className="mr-4 text-primary" />
          }
          options={menuOptions.map((option) => ({
            label: option.label,
            value: option.id,
            key: option.key,
          }))}
          classNames={{
            trigger: "h-[54px] pl-[23px] border border-primary",
          }}
          className="md:w-[321px] lg:hidden"
          onChange={handleButtonClick}
        />

        <div className="mt-12 hidden lg:flex lg:flex-wrap lg:gap-4">
          {menuOptions.map((option) => (
            <SelectButtons
              key={option.id}
              text={option.label}
              isSelected={selectedOption === option.id}
              handleClick={() => handleButtonClick(option.id)}
              width={option.width}
            />
          ))}
        </div>
      </div>
      {videoSectionsMock.map((section) => (
        <VideoCardSection
          key={section.id}
          title={section.title}
          subtitle={section.subtitle}
          videos={section.videos}
        />
      ))}
    </PageLayout>
  );
}
