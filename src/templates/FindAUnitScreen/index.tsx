import { TbCodePlus } from "react-icons/tb";
import BaseButton from "@/components/Button";
import { unitsData } from "@/components/NearbyUnits/components/utils";
import UnitsCard from "@/components/NearbyUnits/components/UnitsCard";
import UnitsCardMobile from "@/components/NearbyUnitsMobile/components/UnitsCard";
import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import BaseInput from "@/components/Input";

export default function FindAUnitScreen(): JSX.Element {
  return (
    <PageLayout
      title="Encontre uma unidade"
      subtitle="Conheça as unidades Oncoclínicas em todo o Brasil"
    >
      <div className="mt-14">
        <h1 className="hidden text-4xl leading-[48px] text-primary md:block">
          Encontre uma unidade Oncoclínicas próxima a você
        </h1>

        <div className="mt-0 flex flex-col gap-5 md:mt-14 md:flex-col lg:flex-row lg:items-center lg:justify-center">
          <BaseSelect
            color="primary"
            variant="bordered"
            label="UF"
            className="w-full md:max-w-full lg:max-w-[300px]"
            radius="full"
            size="sm"
            options={[
              { key: 1, value: "1", label: "SP" },
              { key: 2, value: "2", label: "RJ" },
            ]}
          />

          <BaseSelect
            color="primary"
            variant="faded"
            label="Cidade"
            className="w-full md:max-w-full lg:max-w-xs"
            radius="full"
            size="sm"
            options={[
              { key: 1, value: "1", label: "São Paulo" },
              { key: 2, value: "2", label: "Ibituruna" },
            ]}
          />

          <BaseInput
            placeholder="Nome da unidade"
            size="lg"
            radius="full"
            variant="bordered"
            className="h-[50px] w-full"
          />

          <div className="flex w-full flex-col items-center gap-4 md:flex-row lg:flex-row lg:gap-4">
            <BaseButton
              color="primary"
              className="w-full text-white lg:w-auto"
              width="100% lg:w-[322px]"
            >
              Buscar Unidades
            </BaseButton>

            <BaseButton
              className="w-full font-bold lg:w-auto"
              color="primary"
              variant="bordered"
              startContent={<TbCodePlus size={20} />}
              width="100% lg:w-[322px]"
            >
              Buscar próximos a mim
            </BaseButton>
          </div>
        </div>

        <p className="mt-14 text-[20px] font-normal leading-[26px] text-darkGray md:mt-20">
          Sua pesquisa encontrou 223 unidades
        </p>

        <div className="mx-auto mb-10 mt-20 hidden w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-3">
          {unitsData.map((unit) => (
            <UnitsCard key={unit.id} {...unit} />
          ))}
        </div>

        <div className="mx-auto my-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:hidden lg:grid-cols-3 xl:grid-cols-3">
          {unitsData.map((unit) => (
            <UnitsCardMobile key={unit.id} {...unit} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
