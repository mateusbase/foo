import { useState, useMemo } from "react";
import { useDynamicNavigation } from "@/hooks/useDynamicNavigation";
import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
import { ReactNode } from "react";

interface DynamicNavigationOptions {
  id: number;
  name: string;
  slug: string;
  component: ReactNode;
  subtitle?: string;
}

interface DynamicNavigationScreenProps {
  menuItems: DynamicNavigationOptions[];
  basePath?: string;
  enableRouting?: boolean;
  subtitle?: string;
}

export const DynamicNavigationScreen = ({
  menuItems,
  basePath = "",
  enableRouting = false,
  subtitle = "",
}: DynamicNavigationScreenProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<number>(menuItems[0]?.id || 1);

  const routing = useDynamicNavigation(menuItems, basePath);
  const { activeContent, title, handleMenuItemClick } = enableRouting
    ? routing
    : {
        activeContent: menuItems.find((item) => item.id === activeItem)
          ?.component,
        title:
          menuItems.find((item) => item.id === activeItem)?.name ||
          "Item não encontrado",
        handleMenuItemClick: (id: number) => setActiveItem(id),
      };

  const componentSubtitle = useMemo(() => {
    const item = menuItems.find((menuItem) => menuItem.id === activeItem);
    return item?.subtitle || subtitle;
  }, [activeItem, menuItems, subtitle]);

  return (
    <PageLayout title={title} subtitle={componentSubtitle}>
      <div className="flex flex-col md:gap-12 lg:mt-10 lg:flex-row">
        <div className="mb-2 block lg:hidden">
          <BaseSelect
            color="primary"
            variant="bordered"
            labelColor="primary"
            radius="full"
            size="lg"
            startContent={<IoMenu className="text-primary" size={28} />}
            defaultSelectedKey={activeItem.toString()}
            labelPlacement="outside"
            options={menuItems.map((item) => ({
              key: item.id.toString(),
              value: item.id,
              label: item.name,
            }))}
            onChange={(value) => handleMenuItemClick(Number(value))}
          />
        </div>
        <div className="mb-10 hidden w-[398px] text-white lg:block">
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              isActive={item.id === activeItem}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              onClick={() => handleMenuItemClick(item.id)}
            />
          ))}
        </div>

        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
};
