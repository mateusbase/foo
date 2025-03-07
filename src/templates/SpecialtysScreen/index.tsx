import AlphabetSelector from "@/components/AlphabetSelector";
import PageLayout from "@/components/PageLayout";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import { useMemo, useState } from "react";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import BaseInput from "@/components/Input";
import { SearchIcon } from "@/components/Icons";
import { SpecialtyCard } from "./components/SpecialtyCard";
import { alphabetMock, specialtiesData } from "./data/specialtiesData";

export default function SpecialtysScreen(): JSX.Element {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [valueSearch, setValueSearch] = useState("");

  const filteredSpecialties = useMemo(() => {
    const letterSelected =
      specialtiesData.find((item) => item.letter === selectedLetter)
        ?.specialties || [];

    return letterSelected.filter((specialty) =>
      specialty.name.toLowerCase().includes(valueSearch.toLowerCase()),
    );
  }, [selectedLetter, valueSearch]);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValueSearch(event.target.value);
  };

  return (
    <PageLayout
      title="Especialidades"
      subtitle="Trabalhamos e nos dedicamos oferecendo atendimento integral e multidisciplinar, sempre com foco em tratamentos individualizados, seguros e menos invasivos."
    >
      <div>
        <h1 className="md:text-title-lg my-10 text-2xl text-primary md:my-12">
          Encontre as especialidades médicas
        </h1>
        <div className="hidden lg:block">
          <AlphabetSelector
            searchPlaceholder="Buscar pelo termo"
            onLetterSelect={setSelectedLetter}
            selectedLetter={selectedLetter}
            handleSearchChange={handleSearchChange}
          />
        </div>

        <div className="mt-10 flex flex-col gap-4 md:w-1/2 md:flex-row lg:hidden">
          <BaseInput
            color="primary"
            placeholder="Busque pelo termo"
            placeholderColor="primary"
            endContent={<SearchIcon />}
            onChange={handleSearchChange}
          />
          <BaseSelect
            color="primary"
            variant="bordered"
            label=""
            labelPlacement="outside"
            labelColor="primary"
            radius="full"
            size="lg"
            className="text-primary md:w-48"
            borderStyle="border-primary"
            defaultSelectedKey="A"
            startContent={<RxHamburgerMenu className="text-2xl text-primary" />}
            onChange={(value) => setSelectedLetter(value.toString())}
            options={alphabetMock.map((letter) => ({
              key: letter.value,
              value: letter.value,
              label: letter.label,
            }))}
          />
        </div>
      </div>

      <div className="my-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
        {filteredSpecialties.length > 0 ? (
          filteredSpecialties.map((specialty) => (
            <SpecialtyCard key={specialty.id} name={specialty.name} />
          ))
        ) : (
          <p className="col-span-full my-10 text-center text-xl text-darkGray">
            Nenhuma especialidade encontrada.
          </p>
        )}
      </div>

      <div className="mb-20 lg:mb-0">
        <ShareOptions options={socialNetwork} />
      </div>
    </PageLayout>
  );
}
