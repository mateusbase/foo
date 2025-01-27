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

      <div className="mt-14 flex flex-col items-center justify-center lg:mt-14 lg:flex-row lg:items-start lg:justify-between">
        <div className="relative flex flex-col items-center md:left-5 lg:bottom-48">
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
            <p className="mt-2 text-lg text-darkGray">{specialty}</p>

            <BaseButton
              color="secondary"
              className="mt-8 w-[390px] rounded-md text-white lg:w-[322px]"
              startContent={<IoIosCalendar size={24} className="mr-2" />}
            >
              Agendar uma consulta
            </BaseButton>
          </div>
        </div>

        <div className="mt-8 text-center md:mt-0 md:text-left lg:ml-24 lg:mt-0 lg:flex-1">
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

          <div className="my-10 flex flex-col justify-between md:w-[85%] md:flex-row lg:mt-16 lg:flex-col">
            <div className="mr-4">
              <h1 className="mb-6 text-left text-2xl text-primary lg:text-[42px]">
                Local de atendimento
              </h1>
              {locations.map((location) => (
                <ul key={location.id} className="list-inside list-disc">
                  <li className="text-left text-sm text-darkGray lg:text-lg">
                    {location.name}
                  </li>
                </ul>
              ))}
            </div>

            <div>
              <h1 className="my-6 text-left text-2xl text-primary lg:my-6 lg:mt-20 lg:text-[42px]">
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
        </div>
      </div>
    </PageLayout>
  );
}
