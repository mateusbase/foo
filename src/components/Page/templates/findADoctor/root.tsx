import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import apiClient from "@/services/apiClient";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { ApiPhysician, FindADoctorRootProps } from "./types";
import { DoctorSearchFilters } from "./components/DoctorSearchFilters";
import { CardDoctor } from "./components/CardDoctors";
import { Doctor } from "./components/CardDoctors/types";

export function FindADoctorRoot({
  data,
  breadcrumbs,
}: FindADoctorRootProps): JSX.Element {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [visibleDoctors, setVisibleDoctors] = useState(2);

  const [hasSearched, setHasSearched] = useState(false);

  const handleLoadMore = (): void => {
    setVisibleDoctors((prev) => prev + 2);
  };

  const [formData, setFormData] = useState({
    state: "",
    unit: "",
    specialty: "",
    query: "",
  });

  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const stateArrays = Array.from(
    new Set(data.units.map((unit) => unit.address.state)),
  ).map((stateCode) => ({
    value: stateCode.toLowerCase(),
    label: stateCode,
  }));

  const unityArrays = data.units.map((unit) => ({
    value: unit.id,
    label: unit.name,
  }));

  const specialtyArrays = data.specialties.map((specialty) => ({
    value: specialty.id,
    label: specialty.name,
  }));

  const handleSubmit = async (): Promise<void> => {
    setIsLoading(true);

    setHasSearched(true);

    try {
      let unitsToSend: string[] | undefined;

      if (formData.state) {
        if (formData.unit) {
          unitsToSend = [formData.unit];
        } else {
          unitsToSend = data.units
            .filter(
              (unit) => unit.address.state.toLowerCase() === formData.state,
            )
            .map((unit) => unit.id);
        }
      }

      const payload = {
        unit: unitsToSend?.length ? unitsToSend : undefined,
        query: formData.query || undefined,
        specialty: formData.specialty || undefined,
        ...(formData.unit ? { state: formData.state } : {}),
      };

      const response = await apiClient.post("/api/pages/kind-search", {
        kind: "PHYSICIAN",
        query: "SEARCH",
        language: "pt",
        payload,
      });

      const result: ApiPhysician[] = response.data;

      const mappedDoctors: Doctor[] = result.map((item, index) => ({
        id: index,
        name: item.info?.name || "",
        crm: item.professionalNumbers?.crms?.[0]?.number || "",
        rqe: item.professionalNumbers?.rqes?.[0]?.number || "",
        path: item.path,
        specialty: (() => {
          const specialtyName = data.specialties.find(
            (s) => s.id === item.references?.specialties?.[0],
          )?.name;

          return specialtyName ? [specialtyName] : undefined;
        })(),
        location:
          data.units.find((u) => u.id === item.references?.units?.[0])?.name ||
          "",
        imgSrc: item.images?.picture?.url || "",
      }));

      setDoctors(mappedDoctors);
    } catch (err) {
      err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout
      title={data.header?.title}
      subtitle={data.header?.description}
      breadcrumbs={breadcrumbs}
    >
      <DoctorSearchFilters
        stateArrays={stateArrays}
        unityArrays={unityArrays}
        specialtyArrays={specialtyArrays}
        search={data.search}
        values={formData}
        onChange={setFormData}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        doctorsLength={doctors.length}
        hasSearched={hasSearched}
      />

      <div className="my-10 grid grid-cols-1 justify-items-center gap-x-5 gap-y-10 sm:grid-cols-2 lg:hidden">
        {doctors.slice(0, visibleDoctors).map((doctor) => (
          <CardDoctor
            key={doctor.id}
            doctor={doctor}
            width="max-w-[398px]"
            onClick={() => router.push(`/${doctor.path}`)}
          />
        ))}
      </div>

      {doctors.length > 0 && (
        <div className="my-10 hidden grid-cols-1 justify-items-center gap-x-5 gap-y-10 lg:grid lg:grid-cols-4">
          {doctors.map((doctor) => (
            <CardDoctor
              key={doctor.id}
              doctor={doctor}
              width="max-w-[398px]"
              onClick={() => router.push(`/${doctor.path}`)}
            />
          ))}
        </div>
      )}

      {visibleDoctors < doctors.length && (
        <div className="mb-11 flex justify-center lg:hidden">
          <Button
            onClick={handleLoadMore}
            className="border-1 h-11 w-[316px] border-primary bg-transparent px-32 py-10 text-primary"
          >
            [+]
            <span>Ver todos</span>
          </Button>
        </div>
      )}
    </PageLayout>
  );
}
