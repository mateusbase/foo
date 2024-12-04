import { TbCurrentLocation } from "react-icons/tb";
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
          <div className="w-full md:flex md:flex-row">
            <div className="mb-4 mr-4 w-full md:mb-0 md:w-1/3">
              <BaseSelect
                color="primary"
                variant="bordered"
                label="UF"
                labelColor="primary"
                className="w-full lg:max-w-[300px]"
                radius="full"
                size="sm"
                options={[
                  { key: 1, value: "1", label: "SP" },
                  { key: 2, value: "2", label: "RJ" },
                ]}
              />
            </div>
            <div className="w-full md:w-2/3 lg:max-w-xs">
              <BaseSelect
                color="primary"
                variant="bordered"
                label="Cidade"
                labelColor="primary"
                className="w-full lg:max-w-xs"
                radius="full"
                size="sm"
                options={[
                  { key: 1, value: "1", label: "São Paulo" },
                  { key: 2, value: "2", label: "Ibituruna" },
                ]}
              />
            </div>
          </div>

          <BaseInput
            placeholder="Nome da unidade"
            placeholderColor="primary"
            size="lg"
            radius="full"
            variant="bordered"
            className="h-[50px] w-full"
            color="primary"
          />

          <div className="flex w-full flex-col items-center gap-4 md:flex-row lg:flex-row lg:gap-4">
            <BaseButton
              color="primary"
              className="w-full font-normal text-white lg:w-auto"
              width="100% lg:w-[322px]"
            >
              Buscar Unidades
            </BaseButton>

            <BaseButton
              className="w-full font-normal lg:w-auto"
              color="primary"
              variant="bordered"
              startContent={<TbCurrentLocation size={20} />}
              width="100% lg:w-[322px]"
            >
              Buscar próximos a mim
            </BaseButton>
          </div>
        </div>

        <p className="mt-14 flex text-[20px] font-normal leading-[26px] text-darkGray md:mt-20">
          Sua pesquisa encontrou
          <span className="mx-2 font-bold text-primary">223 unidades</span>
        </p>

        <div className="mx-auto mb-10 mt-20 hidden w-full grid-cols-1 gap-6 sm:grid-cols-2 md:hidden lg:grid lg:grid-cols-3 xl:grid-cols-3">
          {unitsData.map((unit) => (
            <UnitsCard key={unit.id} {...unit} />
          ))}
        </div>

        <div className="mx-auto my-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden lg:grid-cols-3 xl:grid-cols-3">
          {unitsData.map((unit) => (
            <UnitsCardMobile key={unit.id} {...unit} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
