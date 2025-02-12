import BaseSelect from "@/components/Select";

const ServicesLocations = (): JSX.Element => {
  return (
    <div className="full-bleed mb-11 bg-custom-gradient-light pb-10 pl-10 pr-7 pt-9 text-white">
      <h1 className="mb-12 text-2xl">Conheça os locais de atendimento</h1>
      <span className="text-xl">
        Saiba quais são os serviços, tratamentos e exames disponíveis em cada
        uma das unidades.
      </span>
      <p className="mb-3 mt-12 text-xl">Entre em contato:</p>

      <BaseSelect
        color="default"
        labelPlacement="outside"
        defaultSelectedKey="1"
        className="w-full"
        options={[
          { key: "1", value: "SP", label: "SP" },
          { key: "2", value: "RJ", label: "RJ" },
        ]}
        classNames={{
          trigger: "h-[54px] bg-white",
        }}
      />
    </div>
  );
};

export default ServicesLocations;
