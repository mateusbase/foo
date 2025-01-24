import BaseButton from "@/components/Button";
import BaseSelect from "@/components/Select";
import PageLayout from "@/components/PageLayout";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import OcJournalItems from "@/components/OcJournalItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { options } from "../NewsScreen/optionsMock";

export default function OcJournalScreen(): JSX.Element {
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  return (
    <PageLayout
      title="OC Journal"
      subtitle="A newsletter científica do Grupo Oncoclínicas"
    >
      <div className="lg:mt-20">
        <div className="full-bleed flex w-full flex-col-reverse justify-between text-white lg:h-[536px] lg:flex-row">
          <div className="flex h-full flex-col justify-between gap-2 bg-custom-gradient-dark p-10 lg:w-1/2 lg:rounded-bl-[100px] lg:p-20">
            <div>
              <p className="text-4xl font-light lg:text-6xl">
                Faça o download da edição mais recente do OC Journal
              </p>
            </div>

            <div>
              <p className="text-xl font-bold lg:text-2xl">
                Novidades do universo médico-científico com reportagens e
                análises de especialistas em oncologia.
              </p>
            </div>

            <div className="flex gap-2">
              <BaseButton
                className="mt-10 h-16 w-full justify-center border-white text-lg text-white lg:w-80 lg:text-2xl"
                variant="bordered"
              >
                Download
              </BaseButton>
            </div>
          </div>

          <div className="h-full lg:w-1/2">
            <img
              src="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
              alt="Imagem 1"
              className="size-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-gray-300 px-8 pb-4 md:flex-row md:items-center md:justify-between md:px-0 lg:mt-28 lg:border-b">
        <div className="hidden flex-col items-center gap-4 sm:flex-row lg:flex">
          <div className="w-[280px]">
            <BaseSelect
              label="Especialidade"
              labelColor="primary"
              color="primary"
              variant="bordered"
              radius="full"
              size="sm"
              className="w-full"
              options={[
                { key: 1, value: "1", label: "Oncologia" },
                { key: 2, value: "2", label: "Cardiologia" },
              ]}
            />
          </div>

          <BaseButton
            color="primary"
            width="149px"
            className="hidden w-full min-w-44 text-white sm:w-auto lg:flex"
          >
            Buscar
          </BaseButton>
        </div>

        <div className="hidden cursor-pointer items-center justify-end gap-2 sm:justify-start lg:flex">
          <SortingFilterDropdown
            options={sortingFilterOptions}
            defaultSelectedKey={sortingFilterOptions[0].value}
            onChange={handleChange}
          />
        </div>
      </div>
      <BaseSelect
        color="primary"
        variant="bordered"
        labelPlacement="outside-left"
        labelColor="primary"
        radius="md"
        size="lg"
        optionsColor="primary"
        startContent={<RxHamburgerMenu size={20} className="text-primary" />}
        defaultSelectedKey="1"
        className="w-full lg:hidden"
        options={[
          { key: 1, value: "1", label: "Especialidade" },
          { key: 2, value: "2", label: "Oncologia" },
          { key: 3, value: "3", label: "Cardiologia" },
        ]}
      />

      {options.map((option) => (
        <div className="mt-10" key={option.id}>
          <OcJournalItems options={option} />
        </div>
      ))}

      <div className="my-10 flex justify-center lg:mb-0 lg:justify-start">
        <BaseButton
          color="primary"
          variant="bordered"
          radius="sm"
          className="h-[50px] w-56 items-center justify-center border-1 pl-3 text-[18px] leading-[22px] text-primary sm:w-3/6 md:flex md:w-80 lg:w-[228px]"
        >
          [+] Ver mais
        </BaseButton>
      </div>
    </PageLayout>
  );
}
