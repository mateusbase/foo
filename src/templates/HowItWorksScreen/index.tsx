import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState, useEffect, useMemo } from "react";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
import { useRouter } from "next/router";
import { menuContent } from "./helper";

export default function HowItWorksScreen(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  const [activeItem, setActiveItem] = useState<number>(1);

  const menuItems = useMemo(
    () => [
      { id: 1, name: "Como funciona", slug: "como-funciona" },
      {
        id: 2,
        name: "Estudos clínicos abertos",
        slug: "estudos-clinicos-abertos",
      },
      { id: 3, name: "Comitê de ética em pesquisa", slug: "comite-de-etica" },
      { id: 4, name: "Comitês", slug: "comites" },
      {
        id: 5,
        name: "Fases de um estudo clínico",
        slug: "fases-estudo-clinico",
      },
      { id: 6, name: "Termos de consentimento", slug: "termos-consentimento" },
      {
        id: 7,
        name: "Benefícios da pesquisa clínica",
        slug: "beneficios-pesquisa-clinica",
      },
      { id: 8, name: "Perguntas frequentes", slug: "perguntas-frequentes" },
    ],
    [],
  );

  useEffect(() => {
    if (slug) {
      const foundItem = menuItems.find((item) => item.slug === slug);
      if (foundItem) {
        setActiveItem(foundItem.id);
      }
    }
  }, [slug, menuItems]);

  const activeContent = menuContent[activeItem];

  const titleSelectedMenu =
    menuItems.find((item) => item.id === activeItem)?.name ||
    "Item não encontrado";

  const handleMenuItemClick = (id: number): void => {
    const selectedItem = menuItems.find((item) => item.id === id);
    if (selectedItem) {
      setActiveItem(id);
      router.push(`/medicos/pesquisa-clinica/${selectedItem.slug}`, undefined, {
        shallow: true,
        scroll: false,
      });
    }
  };

  return (
    <PageLayout
      title={titleSelectedMenu}
      subtitle="Programa de Pesquisa Clínica do Grupo Oncoclínicas"
    >
      <div className="flex flex-col md:gap-12 lg:mt-10 lg:flex-row">
        <div className="mb-2 block lg:hidden">
          <BaseSelect
            color="primary"
            variant="bordered"
            labelColor="primary"
            radius="full"
            size="lg"
            startContent={<IoMenu className="text-primary" size={28} />}
            defaultSelectedKey="1"
            labelPlacement="outside"
            options={menuItems.map((item) => ({
              key: item.id,
              value: item.id,
              label: item.name,
            }))}
            onChange={(value) => handleMenuItemClick(Number(value))}
          />
        </div>
        <div className="hidden w-[398px] text-white lg:block">
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              isActive={activeItem === item.id}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              onClick={handleMenuItemClick}
            />
          ))}
        </div>

        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
}
