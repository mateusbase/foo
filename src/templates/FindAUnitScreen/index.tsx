import { Input, Select, SelectItem } from "@nextui-org/react";
import { TbCodePlus } from "react-icons/tb";
import BaseButton from "@/components/Button";
import { unitsData } from "@/components/NearbyUnits/components/utils";
import UnitsCard from "@/components/NearbyUnits/components/UnitsCard";
import UnitsCardMobile from "@/components/NearbyUnitsMobile/components/UnitsCard";
import PageLayout from "@/components/PageLayout";

export default function FindAUnitScreen(): JSX.Element {
  return (
    <PageLayout
      title="Encontre uma unidade"
      subtitle="Conheça as unidades Oncoclínicas em todo o Brasil"
      showContactSection={false}
    >
      <div className="mt-14">
        <h1 className="font-lato hidden text-4xl leading-[48px] text-primary md:block">
          Encontre uma unidade Oncoclínicas próxima a você
        </h1>

        <div className="mt-0 flex flex-col gap-5 md:mt-14 md:flex-col lg:flex-row lg:items-center lg:justify-center">
          <Select
            color="primary"
            variant="bordered"
            label="UF"
            className="w-full md:max-w-full lg:max-w-[122px]"
            radius="full"
            size="sm"
          >
            <SelectItem key={1} value="1">
              SP
            </SelectItem>
            <SelectItem key={2} value="2">
              RJ
            </SelectItem>
          </Select>

          <Select
            color="primary"
            variant="bordered"
            label="Cidade"
            className="w-full md:max-w-full lg:max-w-xs"
            radius="full"
            size="sm"
          >
            <SelectItem key={1} value="1">
              São Paulo
            </SelectItem>
            <SelectItem key={2} value="2">
              Ibituruna
            </SelectItem>
          </Select>

          <Input
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

        <p className="font-lato mt-14 text-[20px] font-normal leading-[26px] text-darkGray md:mt-20">
          Sua pesquisa encontrou 223 unidades
        </p>

        <div className="mx-auto mb-10 mt-20 hidden w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-3">
          {unitsData.map((unit) => (
            <UnitsCard key={unit.id} {...unit} />
          ))}
        </div>

        <div className="mx-auto mb-10 mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:hidden lg:grid-cols-3 xl:grid-cols-3">
          {unitsData.map((unit) => (
            <UnitsCardMobile key={unit.id} {...unit} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
