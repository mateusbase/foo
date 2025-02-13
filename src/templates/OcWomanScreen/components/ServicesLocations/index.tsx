import BaseSelect from "@/components/Select";
import { ArrowDownIcon } from "lucide-react";

const ServicesLocations = (): JSX.Element => {
  return (
    <div className="full-bleed mb-11 bg-custom-gradient-light pb-10 pl-10 pr-7 pt-9 text-white">
      <h1 className="mb-12 text-2xl md:text-[40px]">
        Conheça os locais de atendimento
      </h1>
      <span className="text-xl">
        Saiba quais são os serviços, tratamentos e exames disponíveis em cada
        uma das unidades.
      </span>
      <p className="mb-3 mt-12 text-xl">Entre em contato:</p>

      <BaseSelect
        color="default"
        labelPlacement="outside"
        labelColor="darkGray"
        noBorder
        defaultSelectedKey="1"
        endContent={<ArrowDownIcon color="text-primary" />}
        className="h-[54px] w-full rounded-[35px] border border-darkGray bg-white px-5 py-[10px] text-darkGray md:w-2/5"
        options={[
          { key: "1", value: "SP", label: "SP" },
          { key: "2", value: "RJ", label: "RJ" },
        ]}
      />
    </div>
  );
};

export default ServicesLocations;
