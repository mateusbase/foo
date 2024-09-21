import { useState, useMemo } from "react";
import { Button } from "@nextui-org/react";
import { TbCodePlus } from "react-icons/tb";
import HealthServiceCard from "@/components/HealthServiceCard";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import AlphabetSelector from "./alphabet-selector.component";
import { ServiceSectionProps } from "../types";

export default function ServiceSection({
  id,
  title,
  description,
  healthServices,
  medicalServices,
}: ServiceSectionProps): JSX.Element {
  const [selectedLetter, setSelectedLetter] = useState("A");

  const filteredHealthServices = useMemo(() => {
    return healthServices.filter((service) =>
      service.serviceTitle.toUpperCase().startsWith(selectedLetter),
    );
  }, [selectedLetter, healthServices]);

  return (
    <section id={id} className="pt-8">
      <SectionHeader title={title} description={description} />

      <AlphabetSelector
        selectedLetter={selectedLetter}
        onLetterSelect={setSelectedLetter}
      />

      <div className="mt-10 grid grid-cols-4 gap-[26px]">
        {filteredHealthServices.map((service) => (
          <Link
            key={service.id}
            href={`/servico/${service.serviceTitle.replace(/\s+/g, "-").toLowerCase()}`}
            passHref
          >
            <HealthServiceCard
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
            />
          </Link>
        ))}
      </div>

      <Button
        color="primary"
        variant="bordered"
        radius="sm"
        startContent={<TbCodePlus size={24} />}
        className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-primary"
      >
        Ver todos
      </Button>

      <div className="mt-28 grid grid-cols-3 gap-[26px]">
        {medicalServices.map((service) => (
          <Link
            key={service.id}
            href={`/servico/${service.serviceTitle.replace(/\s+/g, "-").toLowerCase()}`}
            passHref
          >
            <MedicalServiceCard
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
              actionButtonText={service.actionButtonText}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
