import PageLayout from "@/components/PageLayout";
import AlphabetSelector from "@/components/AlphabetSelector";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import Link from "next/link";
import { SpecialtiesRootProps } from "./types";
import { alphabetMock } from "./specialtiesData";
import { SpecialtyCard } from "./components/SpecialtyCard";

export function SpecialtiesRoot({
  data,
  breadcrumbs,
}: SpecialtiesRootProps): JSX.Element {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [valueSearch, setValueSearch] = useState("");

  const filteredSpecialties = useMemo(() => {
    const specialtiesByLetter = data.specialties.filter((s) =>
      s.name?.toUpperCase().startsWith(selectedLetter.toUpperCase()),
    );

    return specialtiesByLetter.filter((specialty) =>
      specialty.name.toLowerCase().includes(valueSearch.toLowerCase()),
    );
  }, [selectedLetter, valueSearch, data.specialties]);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValueSearch(event.target.value);
  };

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-10 lg:mt-0">
          <h1 className="text-2xl text-primary md:mb-12 md:text-title-lg">
            {data.search.title}
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
              placeholder="Busque pelo termo"
              endContent={<SearchIcon />}
              onChange={handleSearchChange}
              className="text-primary placeholder:text-primary"
            />

            <BaseSelect
              className="border-primary text-primary md:w-48"
              defaultValue="A"
              startContent={
                <RxHamburgerMenu className="text-2xl text-primary" />
              }
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
              <Link
                key={specialty.id}
                href={`/medicos/especialidades/${encodeURIComponent(
                  specialty.name.toLowerCase().replace(/\s+/g, "-"),
                )}`}
              >
                <SpecialtyCard name={specialty.name} />
              </Link>
            ))
          ) : (
            <p className="col-span-full my-10 text-center text-xl text-darkGray">
              Nenhuma especialidade encontrada.
            </p>
          )}
        </div>

        <div className="my-10">
          <ShareOptions options={socialNetwork} />
        </div>
      </PageLayout>
    </main>
  );
}
