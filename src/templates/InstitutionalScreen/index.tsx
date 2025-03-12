import { IoMenu } from "react-icons/io5";
import BaseSelect from "@/components/Select";
import { useInstitutionalRouter } from "@/hooks/useInstitutionalRouter";
import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { InstitutionalOption } from "./data/institucionalOptions";

export default function InstitutionalScreen({
  options,
}: {
  options: InstitutionalOption[];
}): JSX.Element {
  const { activeSlug, component, pushComponent, title, subtitle } =
    useInstitutionalRouter(options);

  return (
    <PageLayout title={title} subtitle={subtitle}>
      <div className="mt-2 flex flex-col lg:flex-row">
        <div className="block w-full md:w-1/2 lg:hidden">
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
            options={options.map((opt) => ({
              key: opt.slug,
              value: opt.slug,
              label: opt.serviceTitle,
            }))}
            onChange={(value) => pushComponent(value as string)}
          />
        </div>

        <div className="mt-4 hidden w-[398px] text-white lg:block">
          {options.map((item, index) => (
            <MenuItem
              key={item.slug}
              id={item.id}
              name={item.serviceTitle}
              isActive={activeSlug === item.slug}
              isFirst={index === 0}
              isLast={index === options.length - 1}
              onClick={() => pushComponent(item.slug)}
            />
          ))}
        </div>

        <div className="mt-20 flex-1 md:mt-[52px] lg:mt-6 lg:pl-8">
          {component || <div className="p-4">Carregando...</div>}
        </div>
      </div>
    </PageLayout>
  );
}
