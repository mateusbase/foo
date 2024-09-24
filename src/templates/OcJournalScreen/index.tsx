import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import InformationSlider from "@/components/InformationSlider";
import BaseButton from "@/components/Button";
import { IoIosArrowDown } from "react-icons/io";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import BaseSelect from "@/components/Select";

export default function OcJournalScreen(): JSX.Element {
  return (
    <main>
      <PageHeader
        title="Oc Journal"
        subtitle="A newsletter científica do Grupo Oncoclínicas"
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-20">
        <Breadcrumb />

        <div className="mt-20">
          <InformationSlider />
        </div>

        <div className="mt-28 flex flex-col gap-4 border-b border-gray-300 px-8 pb-4 md:flex-row md:items-center md:justify-between md:px-0">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="w-full sm:w-[280px]">
              <BaseSelect
                label="Especialidade"
                color="primary"
                variant="bordered"
                radius="full"
                size="sm"
                className="w-full"
                options={[
                  { key: 1, value: "1", label: "SP" },
                  { key: 2, value: "2", label: "RJ" },
                ]}
              />
            </div>

            <BaseButton
              color="primary"
              width="149px"
              className="w-full text-white sm:w-auto"
            >
              Buscar
            </BaseButton>
          </div>

          <div className="flex cursor-pointer items-center justify-end gap-2 sm:justify-start">
            <span className="text-lg text-primary">Mais Relevantes</span>
            <IoIosArrowDown size={20} className="text-primary" />
          </div>
        </div>

        <div className="mx-auto mt-20 flex w-full gap-8">
          <div className="h-auto w-[812px] shrink-0">
            <img
              src="https://i.postimg.cc/VkpqZTR5/Captura-de-tela-2024-09-22-202935.png"
              alt="ASCO Annual Meeting 2024"
              className="h-full w-full rounded-md object-cover"
            />
          </div>

          <div className="flex w-full flex-col justify-start">
            <h1 className="text-left text-[48px] font-light leading-[48px] text-darkGray">
              O ASCO Annual Meeting 2024
            </h1>

            <p className="mt-4 text-left text-[16px] font-medium leading-[19px] text-primary">
              Abril de 2024
            </p>

            <p className="mt-4 text-left text-[22px] font-medium leading-[27px] text-darkGray">
              O ASCO Annual Meeting 2024, realizado em junho em Chicago, trouxe
              como tema central “A arte e a ciência do tratamento do câncer: do
              conforto à cura”. Este tema reflete um dos valores essenciais da
              Oncoclínicas&Co: proporcionar um acolhimento na mesma proporção do
              tratamento para nossos pacientes. Acesse o artigo completo deste
              estudo.
            </p>

            <div className="mt-6">
              <BaseButton
                color="primary"
                width="149px"
                className="w-full text-white sm:w-auto"
              >
                Buscar
              </BaseButton>
            </div>
          </div>
        </div>
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
