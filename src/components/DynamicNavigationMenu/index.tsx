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
  subtitle?: string;
}

export const DynamicNavigationScreen = ({
  menuItems,
  basePath = "",
  subtitle = "",
}: DynamicNavigationScreenProps): JSX.Element => {
  const {
    activeSlug,
    activeContent,
    pushComponent,
    title,
    subtitle: activeSubtitle,
  } = useDynamicNavigation(menuItems, basePath);

  return (
    <PageLayout title={title} subtitle={activeSubtitle || subtitle}>
      <div className="flex flex-col md:gap-12 lg:mb-10 lg:flex-row">
        <div className="mb-2 block lg:hidden">
          <BaseSelect
            key={activeSlug}
            disableAnimation
            color="default"
            variant="bordered"
            radius="full"
            size="lg"
            startContent={<IoMenu className="text-primary" size={28} />}
            selectedKey={activeSlug}
            defaultSelectedKey={activeSlug}
            onSelectionChange={(key) => pushComponent(key as string)}
            labelPlacement="outside"
            options={menuItems.map((item) => ({
              key: item.slug,
              value: item.slug,
              label: item.name,
            }))}
            onChange={(value) => pushComponent(value as string)}
          />
        </div>
        <div className="mb-10 hidden w-[398px] text-white lg:block">
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              isActive={item.slug === activeSlug}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              onClick={() => pushComponent(item.slug)}
            />
          ))}
        </div>

        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
};
