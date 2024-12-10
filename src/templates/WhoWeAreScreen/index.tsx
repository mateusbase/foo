import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
import { menuContent } from "./helpers";

export default function WhoWeArecreen(): JSX.Element {
  const menuItems = [
    { id: 1, name: "História" },
    { id: 2, name: "Franquias" },
    { id: 3, name: "Propósito" },
    { id: 4, name: "Parcerias" },
    { id: 5, name: "Convênios" },
    { id: 6, name: "Qualidade/Certificações" },
    { id: 7, name: "Segurança" },
    { id: 8, name: "Compliance" },
    { id: 9, name: "Carreiras" },
  ];

  const [activeItem, setActiveItem] = useState<number>(menuItems[0].id);

  const handleSelectChange = (value: string | number): void => {
    const selectedItem = menuItems.find((item) => item.id === Number(value));
    if (selectedItem) {
      setActiveItem(selectedItem.id);
    }
  };

  const activeContent = menuContent[activeItem];

  return (
    <PageLayout
      title="Oncoclínicas&Co"
      subtitle="Pioneira no país em gestão de serviços oncológicos, a Oncoclínicas&Co foi fundada em 2010 e hoje é um dos maiores centros de oncologia, hematologia e radioterapia da América Latina."
    >
      <div className="mt-14 flex flex-col md:flex-row">
        <div className="mb-10 block md:hidden">
          <BaseSelect
            color="default"
            variant="bordered"
            radius="full"
            size="lg"
            startContent={<IoMenu className="text-primary" size={28} />}
            defaultSelectedKey="1"
            labelPlacement="outside"
            options={menuItems.map((item) => ({
              key: item.id,
              value: item.id.toString(),
              label: item.name,
            }))}
            onChange={(value) => handleSelectChange(value)}
          />
        </div>

        <div className="hidden w-[398px] text-white md:block">
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              isActive={activeItem === item.id}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              onClick={setActiveItem}
            />
          ))}
        </div>

        <div className="mb-10 ml-0 flex-1 md:ml-16">
          {activeContent ? (
            <>
              <h1 className="text-4xl font-bold leading-[48px] text-primary">
                {activeContent.title}
              </h1>

              {activeContent.paragraphs?.map((paragraph: string) => (
                <p
                  key={paragraph}
                  className="mt-6 text-[20px] font-normal leading-[26px] text-darkGray"
                >
                  {paragraph}
                </p>
              ))}

              {activeContent.icons && (
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:flex lg:grid-cols-none lg:flex-wrap lg:justify-center lg:gap-10">
                  {activeContent.icons.slice(0, 6).map((icon: string) => (
                    <div
                      key={icon}
                      className="flex aspect-square w-full max-w-52 items-center justify-center border border-darkGray"
                    >
                      <img
                        src={icon}
                        alt="icon"
                        className="max-h-[90%] max-w-[90%] object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-darkGray">Conteúdo não encontrado.</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
