import BaseButton from "@/components/Button";
import { CardDoctor } from "@/components/CardDoctors";
import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import BaseInput from "@/components/Input";
import { useState } from "react";
import {
  doctors,
  specialtyArrays,
  stateArrays,
  unityArrays,
} from "./itemsArray";
import LocationIcon from "../../../public/assets/icons/location-icon";

export default function FindADoctorScreen(): JSX.Element {
  const [visibleDoctors, setVisibleDoctors] = useState(2);

  const handleLoadMore = (): void => {
    setVisibleDoctors((prev) => prev + 2);
  };

  return (
    <PageLayout
      title="Encontre um médico"
      subtitle="Conheça os médicos Oncoclínicas em todo o Brasil"
    >
      <div className="mt-14 md:px-0">
        <h1 className="hidden text-4xl leading-[48px] text-primary md:block">
          Encontre um médico Oncoclínicas próximo a você
        </h1>

        <div className="mt-0 flex flex-col gap-5 md:mt-14 lg:w-full lg:flex-row lg:items-start lg:gap-2">
          <div className="flex flex-col gap-5 md:flex md:flex-row lg:w-1/5 lg:gap-3">
            <BaseSelect
              color="primary"
              variant="bordered"
              label="UF"
              className="w-full border-primary-foreground md:w-1/3 lg:w-[100px]"
              radius="full"
              size="sm"
              options={stateArrays}
              labelColor="primary"
              optionsColor="primary"
            />

            <BaseSelect
              color="primary"
              variant="bordered"
              label="Unidade"
              className="w-full md:w-2/3 lg:w-[200px]"
              radius="full"
              size="sm"
              options={unityArrays}
              labelColor="primary"
              optionsColor="primary"
            />
          </div>

          <div className="flex flex-col gap-5 md:flex md:flex-row lg:flex-1 lg:gap-3">
            <BaseSelect
              color="primary"
              variant="bordered"
              label="Especialidade"
              className="w-full md:w-2/3"
              radius="full"
              size="sm"
              options={specialtyArrays}
              labelColor="primary"
              optionsColor="primary"
            />

            <BaseInput
              placeholder="Nome ou CRM"
              placeholderColor="primary"
              radius="full"
              color="primary"
              variant="bordered"
            />
          </div>

          <div className="flex flex-col gap-4 md:flex md:flex-row lg:flex-1">
            <BaseButton color="primary" className="w-full text-white lg:flex-1">
              Buscar Médicos
            </BaseButton>

            <BaseButton
              className="w-full font-bold lg:flex-1"
              color="primary"
              variant="bordered"
              startContent={<LocationIcon className="size-7" />}
            >
              Buscar próximos a mim
            </BaseButton>
          </div>
        </div>

        <p className="mt-20 hidden text-[20px] font-normal leading-[26px] text-darkGray lg:flex">
          Sua pesquisa encontrou 23 médicos
        </p>

        <div className="my-10 grid grid-cols-1 justify-items-center gap-x-5 gap-y-10 sm:grid-cols-2 lg:hidden">
          {doctors.slice(0, visibleDoctors).map((doctor) => (
            <CardDoctor key={doctor.id} doctor={doctor} width="max-w-[398px]" />
          ))}
        </div>

        <div className="my-10 hidden grid-cols-1 justify-items-center gap-x-5 gap-y-10 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <CardDoctor key={doctor.id} doctor={doctor} width="max-w-[398px]" />
          ))}
        </div>

        {visibleDoctors < doctors.length && (
          <div className="mb-11 flex justify-center lg:hidden">
            <BaseButton
              onClick={handleLoadMore}
              className="h-11 w-[316px] border-1 border-primary bg-transparent px-32 py-10 text-primary"
            >
              [+]
              <span>Ver todos</span>
            </BaseButton>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
