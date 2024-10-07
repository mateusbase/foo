import BaseButton from "@/components/Button";
import { IoIosArrowDown } from "react-icons/io";
import BaseSelect from "@/components/Select";
import PageLayout from "@/components/PageLayout";
import ClippingCard from "@/components/ClippingCard";

export default function ReleasesScreen(): JSX.Element {
  return (
    <PageLayout title="Releases">
      <div className="mt-10 flex flex-col gap-4 border-b border-gray-300 pb-4 md:mt-20 md:flex-row md:items-center md:justify-between md:px-0">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <BaseSelect
            color="primary"
            variant="bordered"
            label="Tipo de evento"
            radius="full"
            size="sm"
            className="w-full sm:w-[280px]"
            options={[
              { key: 1, value: "1", label: "SP" },
              { key: 2, value: "2", label: "RJ" },
            ]}
          />

          <BaseButton color="primary" className="w-full text-white sm:w-auto">
            Buscar
          </BaseButton>
        </div>

        <div className="flex cursor-pointer items-center justify-end gap-2 sm:justify-start">
          <span className="text-lg text-primary">Mais Relevantes</span>
          <IoIosArrowDown size={20} className="text-primary" />
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
        <ClippingCard
          title="Oncoclínicas é destaque em premiação por prestação de serviços médicos"
          date="23 de Setembro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem ullamcorper."
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in."
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in."
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in."
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in."
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in."
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in."
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in."
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in."
        />
      </div>
    </PageLayout>
  );
}
