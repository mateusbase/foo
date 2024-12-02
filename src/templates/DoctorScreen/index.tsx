import { useRouter } from "next/router";
import BaseButton from "@/components/Button";
import { IoIosCalendar } from "react-icons/io";
import PageLayout from "@/components/PageLayout";
import locations from "./locations";
import especializations from "./especializations";

export default function DoctorScreen(): JSX.Element {
  const router = useRouter();
  const { name, crm, specialty, imgSrc } = router.query;

  return (
    <PageLayout
      title={
        name ? `Dra. ${decodeURIComponent(name as string)}` : "Nome do Médico"
      }
      subtitle={
        Array.isArray(specialty)
          ? specialty.join(", ")
          : specialty || "Especialidade"
      }
    >
      <div className="mt-14 hidden md:block">
        <img
          src="https://i2.wp.com/robertopestana.com.br/wp-content/uploads/2022/02/891351.png?w=750&quality=90&strip=all&ssl=1"
          alt="Imagem descritiva"
          className="h-[466px] w-full object-cover"
        />
      </div>

      <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="relative flex flex-col items-center md:bottom-48 md:left-5">
          <img
            src={
              (imgSrc as string) ||
              "https://i2.wp.com/robertopestana.com.br/wp-content/uploads/2022/02/891351.png?w=320&h=316"
            }
            alt={`Foto de ${name ? decodeURIComponent(name as string) : "Médico"}`}
            className="h-[316px] w-[320px] rounded-2xl object-cover"
          />

          <div className="mt-8 text-center md:text-left">
            <h1 className="m-4 block text-3xl text-darkGray md:hidden">
              {name ? `Dra. ${decodeURIComponent(name as string)}` : ""}
            </h1>

            <p className="text-xl font-bold text-darkGray">CRM: {crm}</p>
            <p className="mt-2 text-lg text-darkGray">{specialty}</p>

            <BaseButton
              color="secondary"
              className="mt-8 w-full rounded-md text-white"
              startContent={<IoIosCalendar size={24} className="mr-2" />}
            >
              Agendar uma consulta
            </BaseButton>
          </div>
        </div>

        <div className="my-8 text-center md:ml-52 md:mt-0 md:flex-1 md:text-left">
          <h1 className="hidden text-[42px] text-primary md:block">
            {name
              ? `Dra. ${decodeURIComponent(name as string)}`
              : "Dra. Nome do Médico"}
          </h1>

          <p className="mt-6 text-left text-lg leading-[28px] text-darkGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex
            id sem ullamcorper. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia
            ex hendrerit in. Fusce id ex id sem ullamcorper. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc
            lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem
            ullamcorper.
          </p>

          <h1 className="mb-6 mt-32 text-left text-2xl font-bold text-primary-foreground lg:text-[42px]">
            Locais de atendimento
          </h1>
          {locations.map((location) => (
            <ul key={location.id} className="list-inside list-disc">
              <li className="text-left text-sm text-darkGray lg:text-lg">
                {location.name}
              </li>
            </ul>
          ))}

          <h1 className="mb-6 mt-12 text-left text-2xl font-bold text-primary-foreground lg:text-[42px]">
            Especializações
          </h1>

          {especializations.map((especialization) => (
            <ul key={especialization.id} className="list-inside list-disc">
              <li className="text-left text-sm text-darkGray lg:text-lg">
                {especialization.name}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
