import BaseButton from "@/components/Button";
import BaseSelect from "@/components/Select";
import PageLayout from "@/components/PageLayout";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import OcJournalItems from "@/components/OcJournalItems";
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
          <div className="flex h-full flex-col items-center justify-between gap-2 bg-custom-gradient-dark p-10 lg:w-1/2 lg:rounded-bl-[100px] lg:p-20">
            <div className="flex w-full flex-col gap-4 md:w-3/4 lg:w-full">
              <div>
                <p className="text-left text-4xl font-light md:text-center lg:text-left lg:text-4xl xl:text-5xl">
                  Faça o download da edição mais recente do OC Journal
                </p>
              </div>

              <div>
                <p className="text-left text-xl font-bold md:text-center lg:text-left lg:text-xl xl:text-2xl">
                  Novidades do universo médico-científico com reportagens e
                  análises de especialistas em oncologia.
                </p>
              </div>

              <div className="flex gap-2">
                <BaseButton
                  className="mb-4 mt-10 h-16 w-full justify-center border-white text-lg text-white lg:w-80 lg:text-2xl"
                  variant="bordered"
                >
                  Download
                </BaseButton>
              </div>
            </div>
          </div>

          <div className="h-full lg:w-2/5">
            <img
              src="https://s3-alpha-sig.figma.com/img/1803/5121/5508cff7b204e2ad16fb21c565c89767?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oj0i426~sXVCW0plhPa8~P0H-DCxziYNY-g1HeOidO8DsJZY-5z-qGfMv4xJJsuaUJz85WN8q28XfS9OvDet9phGmTLlvC-X7y3PSyxyKjqmoC-J0OvkAiNhOtWhVmnhHG-3zooteT5v7JlUr9QDkEkaNUrEl-pDebTJVBptqEZESnUxy~71hG4n4R9HME~OYhGOb7gk26EyatNNRoscfOPKM5UbhtJxEfpOezqwWnF5f-NLpp84b4RBq1mD6Ba5IYwEbV5vymmFTwT0TR0LCEkcKfj1XNz04ZL4k1yNhESBdyJlU8Fw3zZeBbJMlhUT0O0upcLwAVXOwt1ou97Ogw__"
              alt="Imagem 1"
              className="size-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-b border-gray-300 pb-4 md:flex-row md:items-center md:justify-between md:px-0 lg:mt-28">
        <div className="flex w-full flex-col items-center gap-4 md:flex-row">
          <div className="w-full md:w-[280px]">
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
            className="rounder-sm w-full min-w-44 text-white sm:w-auto lg:flex"
          >
            Buscar
          </BaseButton>
        </div>

        <div className="flex cursor-pointer items-center justify-center gap-2 md:justify-end">
          <SortingFilterDropdown
            options={sortingFilterOptions}
            defaultSelectedKey={sortingFilterOptions[0].value}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-4 grid w-full gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-1 lg:gap-8">
        {options.map((option) => (
          <OcJournalItems key={option.title} options={option} />
        ))}
      </div>

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
