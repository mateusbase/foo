import PageHeader from "@/components/PageHeader/page-header.component";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { options } from "@/utils/objectUtils";
import { TbCodePlus } from "react-icons/tb";
import BaseButton from "@/components/Button";
import { unitsData } from "@/components/NearbyUnits/components/utils";
import UnitsCard from "@/components/NearbyUnits/components/UnitsCard";

export default function FindAUnitScreen(): JSX.Element {
  return (
    <main>
      <PageHeader
        title="Encontre uma unidade"
        subtitle="Conheça as unidades Oncoclínicas em todo o Brasil"
        showContactSection={false}
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col py-20">
        <Breadcrumb />

        <div className="mt-14">
          <h1 className="font-lato text-4xl leading-[48px] text-primary">
            Encontre uma unidade Oncoclínicas próxima a você
          </h1>

          <div className="mt-14 flex items-center justify-between">
            <Select
              color="primary"
              variant="bordered"
              label="UF"
              className="max-w-xs"
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
              className="max-w-xs"
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
              className="h-[50px] w-[280px]"
            />

            <BaseButton color="primary" className="text-white">
              Buscar Unidades
            </BaseButton>

            <BaseButton
              className="font-bold"
              color="primary"
              variant="bordered"
              startContent={<TbCodePlus size={20} />}
              width="322px"
            >
              Buscar próximos a mim
            </BaseButton>
          </div>

          <p className="font-lato mt-20 text-[20px] font-normal leading-[26px] text-darkGray">
            Sua pesquisa encontrou 223 unidades
          </p>

          <section className="mb-10 mt-20 flex justify-between">
            {unitsData.map((unit) => (
              <UnitsCard key={unit.id} {...unit} />
            ))}
          </section>
        </div>
      </div>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
