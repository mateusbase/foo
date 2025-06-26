import { Button } from "@/components/Button";
import BaseSelect from "@/components/Select";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BaseInput from "@/components/Input";
import BaseSwiper from "@/components/BaseSwiper";
import { useEffect, useState } from "react";
import apiClient from "@/services/apiClient";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/router";
import { Doctor } from "../../../findADoctor/components/CardDoctors/types";
import { CardDoctor } from "../../../findADoctor/components/CardDoctors";

interface ClinicalBodyProps {
  doctors: Doctor[];
}

interface Specialty {
  id: string;
  name: string;
  path: string;
  description: string;

  icon: {
    alt: string;
    width: number;
    key: string;
    height: number;
    url: string;
  };
}

const ClinicalBody = ({ doctors }: ClinicalBodyProps): JSX.Element => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const [specialtyList, setSpecialtyList] = useState<Specialty[]>([]);

  const [specialty, setSpecialty] = useState("");

  const [visibleCount, setVisibleCount] = useState(6);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSpecialties = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const response = await apiClient.post("/api/pages/kind-search", {
          kind: "PHYSICIAN_SPECIALTY",
          query: "LIST_ALL",
          payload: {},
        });

        const specialties = response.data;

        if (specialties && specialties.length > 0) {
          setSpecialtyList(specialties);
        }

        setIsLoading(false);
      } catch (err) {
        const error = err as Error;

        throw new Error("Falha ao buscar especialidades", error);
      }
    };

    fetchSpecialties();
  }, []);

  function mapDoctorSpecialties(
    doctorList: Doctor[],
    specialties: Specialty[],
  ): Doctor[] {
    const idToNameMap = specialties.reduce(
      (acc, spec) => {
        acc[spec.id] = spec.name;
        return acc;
      },
      {} as Record<string, string>,
    );

    return doctorList.map((doctor) => ({
      ...doctor,
      specialty:
        doctor.specialty?.map((specId) => idToNameMap[specId] || specId) || [],
    }));
  }

  const doctorsWithSpecialtyNames = mapDoctorSpecialties(
    doctors,
    specialtyList,
  );

  const filteredDoctors = doctorsWithSpecialtyNames.filter((doctor) => {
    const matchesNameOrCrm =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.crm.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty =
      !specialty ||
      doctor.specialty?.includes(
        specialtyList.find((s) => s.id === specialty)?.name || "",
      );

    return matchesNameOrCrm && matchesSpecialty;
  });

  return (
    <div>
      <div className="mt-20 flex flex-col gap-6 md:flex-col md:gap-10 lg:flex-row">
        <h2 className="text-2xl font-normal text-primary md:order-1 md:leading-[50px] 2xl:text-3xl">
          Corpo Clínico
        </h2>

        <div className="flex flex-col gap-5 sm:flex-row md:order-2 md:flex-row md:items-center md:justify-start md:gap-6 lg:gap-8">
          <BaseSelect
            placeholder="Especialidade"
            className="w-full border-primary text-primary lg:w-[300px] xl:w-[320px]"
            options={specialtyList.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
            value={specialty}
            onChange={(option) => setSpecialty(option || "")}
          />

          <BaseInput
            placeholder="Buscar por nome ou CRM"
            className="w-full border-primary text-primary lg:w-[300px] xl:w-[320px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <LoaderCircle className="absolute size-5 animate-spin" />
      ) : (
        <>
          <div className="mt-10 hidden grid-cols-1 gap-6 sm:grid-cols-2 lg:grid lg:grid-cols-3">
            {filteredDoctors.length > 0 &&
              filteredDoctors
                .slice(0, visibleCount)
                .map((doctor) => (
                  <CardDoctor
                    key={doctor.id}
                    doctor={doctor}
                    onClick={() => router.push(`/${doctor.path}`)}
                  />
                ))}
          </div>

          <div className="relative mt-20 block w-full lg:hidden">
            <BaseSwiper
              data={doctors}
              renderItem={(doctor) => (
                <CardDoctor
                  doctor={doctor}
                  onClick={() => router.push(`/${doctor.path}`)}
                />
              )}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
            />

            <Button variant="outlined">[+] Ver todos</Button>
          </div>

          {visibleCount < filteredDoctors.length && (
            <Button
              variant="outlined"
              className="mt-8 hidden text-[18px] leading-[22px] sm:w-[176px] md:w-60 lg:block"
              onClick={() => setVisibleCount(filteredDoctors.length)}
            >
              [+] Ver todos
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default ClinicalBody;
