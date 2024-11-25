import BaseButton from "@/components/Button";
import BaseSelect from "@/components/Select";
import { Plus } from "lucide-react";
import Link from "next/link";
import ClinicalStudiesCard from "./components/ClinicalStudiesCard";
import { clinicalResearchs } from "../../helper";

export default function OpenClinicalStudies(): JSX.Element {
  return (
    <div className="w-full">
      <div className="flex flex-row border-b border-gray-300 pb-4">
        <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
          <BaseSelect
            color="primary"
            label=""
            variant="bordered"
            radius="full"
            size="lg"
            labelColor="primary"
            className="max-w-[280px]"
            defaultSelectedKey="1"
            options={[
              { key: 1, value: "1", label: "Tipo de câncer" },
              { key: 2, value: "2", label: "Tipo de pesquisa" },
            ]}
          />
          <BaseSelect
            color="primary"
            label=""
            variant="bordered"
            radius="full"
            size="lg"
            labelColor="primary"
            defaultSelectedKey="1"
            className="max-w-[280px]"
            options={[
              { key: 1, value: "1", label: "Unidade" },
              { key: 2, value: "2", label: "Clínica" },
            ]}
          />
          <BaseButton className="w-full max-w-[141px] text-white">
            Buscar
          </BaseButton>
        </div>
        <div className="hidden justify-end gap-2 sm:justify-start lg:flex">
          <BaseSelect
            noBorder
            label=""
            color="primary"
            defaultSelectedKey="1"
            className="w-[170px]"
            options={[
              { key: 1, value: "1", label: "Mais relevantes" },
              { key: 2, value: "2", label: "Todos itens" },
            ]}
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-[40px] text-primary">Estudos clínicos abertos</h2>
        {clinicalResearchs.map((research) => (
          <Link href="#/">
            <ClinicalStudiesCard
              key={research.id}
              title={research.title}
              unity={research.unity}
              description={research.description}
            />
          </Link>
        ))}
        <div>
          <BaseButton
            variant="bordered"
            radius="sm"
            startContent={<Plus />}
            className="w-full max-w-[228px]"
          >
            Ver mais
          </BaseButton>
        </div>
      </div>
    </div>
  );
}
