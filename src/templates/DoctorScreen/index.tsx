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
      <div className="relative mt-14 hidden lg:block">
        <img
          src="https://i2.wp.com/robertopestana.com.br/wp-content/uploads/2022/02/891351.png?w=750&quality=90&strip=all&ssl=1"
          alt="Imagem descritiva"
          className="h-[466px] w-full object-cover"
        />
      </div>

      <div className="mt-14 flex flex-col items-center justify-center lg:mt-14 lg:flex-row lg:items-start lg:gap-14">
        <div className="relative flex flex-col items-center lg:bottom-48 lg:ml-5">
          <img
            src={
              (imgSrc as string) ||
              "https://i2.wp.com/robertopestana.com.br/wp-content/uploads/2022/02/891351.png?w=320&h=316"
            }
            alt={`Foto de ${name ? decodeURIComponent(name as string) : "Médico"}`}
            className="h-[316px] w-[320px] rounded-2xl object-cover"
          />

          <div className="mt-8 text-center lg:text-left">
            <h1 className="m-4 block text-3xl text-darkGray lg:hidden">
              {name ? `Dra. ${decodeURIComponent(name as string)}` : ""}
            </h1>

            <p className="text-xl font-bold text-darkGray">CRM: {crm}</p>
            <p className="mt-1 text-lg text-darkGray">{specialty}</p>

            <BaseButton
              color="secondary"
              className="mt-8 w-[322px] gap-3 rounded-md text-white lg:w-[322px]"
              startContent={<IoIosCalendar size={24} />}
            >
              Agende uma consulta
            </BaseButton>
          </div>
        </div>

        <div className="mt-8 text-center md:mt-0 md:text-left lg:mt-0 lg:flex-1">
          <h1 className="hidden text-[62px] text-primary lg:block">
            {name
              ? `Dra. ${decodeURIComponent(name as string)}`
              : "Dra. Nome do Médico"}
          </h1>

          <p className="mt-6 text-left text-sm leading-[22px] text-darkGray lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex
            id sem ullamcorper. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia
            ex hendrerit in. Fusce id ex id sem ullamcorper. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc
            lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem
            ullamcorper.
          </p>

          <div className="my-10 flex flex-col md:w-full md:flex-row md:items-start md:gap-8 lg:flex-col">
            <div className="flex-1">
              <h1 className="my-6 text-left text-2xl text-primary md:text-[32px]">
                Local de atendimento
              </h1>
              {locations.map((location) => (
                <ul key={location.id} className="ml-6 list-outside list-disc">
                  <li className="text-left text-sm text-darkGray md:text-base">
                    {location.name}
                  </li>
                </ul>
              ))}
            </div>

            <div className="flex-1">
              <h1 className="my-6 text-left text-2xl text-primary md:text-[32px]">
                Especialização
              </h1>
              {especializations.map((especialization) => (
                <ul
                  key={especialization.id}
                  className="ml-6 list-outside list-disc"
                >
                  <li className="text-left text-base text-darkGray">
                    {especialization.name}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
