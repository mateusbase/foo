import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import BaseButton from "@/components/Button";
import AlertComponent from "./components/Alert";

export default function AgreementsScreen(): JSX.Element {
  return (
    <PageLayout
      title="Convênios Credenciados"
      subtitle="Veja abaixo todas as operadoras credenciadas para a Oncoclínicas. Para saber sobre as coberturas do seu plano de saúde, entre em contato com seu convênio."
    >
      <AlertComponent />
      <div className="mb-16 flex flex-col lg:flex-row">
        <BaseSelect
          color="primary"
          variant="bordered"
          className="w-full lg:max-w-[300px]"
          labelPlacement="outside"
          placeholder="Convênio"
          radius="full"
          startContent={
            <RxHamburgerMenu size={25} className="mr-4 text-primary" />
          }
          size="sm"
          classNames={{
            trigger: "h-[52px] pl-[23px]  border-primary-foreground",
          }}
          options={[
            { key: 1, value: "1", label: "Unimed" },
            { key: 2, value: "2", label: "Sul América Saúde" },
          ]}
        />

        <BaseSelect
          color="primary"
          variant="bordered"
          className="w-full lg:max-w-[300px]"
          labelPlacement="outside"
          placeholder="UF"
          radius="full"
          startContent={
            <RxHamburgerMenu size={25} className="mr-4 text-primary" />
          }
          size="sm"
          classNames={{
            trigger: "h-[52px] pl-[23px] border-primary-foreground",
          }}
          options={[
            { key: 1, value: "1", label: "SP" },
            { key: 2, value: "2", label: "RJ" },
          ]}
        />

        <BaseSelect
          color="primary"
          variant="bordered"
          className="w-full lg:max-w-[300px]"
          labelPlacement="outside"
          placeholder="Cidade"
          radius="full"
          startContent={
            <RxHamburgerMenu size={25} className="mr-4 text-primary" />
          }
          size="sm"
          classNames={{
            trigger: "h-[52px] pl-[23px] border-primary-foreground",
          }}
          options={[
            { key: 1, value: "1", label: "São Paulo" },
            { key: 2, value: "2", label: "Rio de Janeiro" },
            { key: 3, value: "3", label: "Belo Horizonte" },
            { key: 4, value: "4", label: "Curitiba" },
            { key: 5, value: "5", label: "Porto Alegre" },
          ]}
        />

        <BaseButton
          color="primary"
          size="md"
          radius="sm"
          className="mt-4 w-full text-white"
        >
          <span>Buscar</span>
        </BaseButton>
      </div>
    </PageLayout>
  );
}
