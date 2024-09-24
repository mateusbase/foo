import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import BaseButton from "@/components/Button";
import { IoIosCalendar } from "react-icons/io";
import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function DoctorScreen(): JSX.Element {
  const router = useRouter();
  const { name, crm, specialty, imgSrc } = router.query;

  return (
    <main>
      <PageHeader
        title={
          name ? `Dra. ${decodeURIComponent(name as string)}` : "Nome do Médico"
        }
        subtitle={
          Array.isArray(specialty)
            ? specialty.join(", ")
            : specialty || "Especialidade"
        }
        showContactSection={false}
      />

      <BaseContainer className="flex min-h-screen w-full flex-col py-20">
        <Breadcrumb />

        <div className="mt-14">
          <img
            src="https://i2.wp.com/robertopestana.com.br/wp-content/uploads/2022/02/891351.png?w=750&quality=90&strip=all&ssl=1"
            alt="Imagem descritiva"
            className="h-[466px] w-full object-cover"
          />
        </div>

        <div className="mt-10 flex justify-between">
          <div className="relative bottom-48 left-5 flex flex-col items-center">
            <img
              src={
                (imgSrc as string) ||
                "https://i2.wp.com/robertopestana.com.br/wp-content/uploads/2022/02/891351.png?w=320&h=316"
              }
              alt={`Foto de ${name ? decodeURIComponent(name as string) : "Médico"}`}
              className="h-[316px] w-[320px] rounded-2xl object-cover"
            />

            <div className="mt-8 text-left">
              <p className="text-xl font-bold text-darkGray">CRM: {crm}</p>
              <p className="mt-2 text-lg text-darkGray">{specialty}</p>

              <BaseButton
                color="secondary"
                className="mt-8 text-white"
                width="322px"
                startContent={<IoIosCalendar size={24} className="mr-2" />}
              >
                Agendar uma consulta
              </BaseButton>
            </div>
          </div>

          <div className="ml-52 flex-1">
            <h1 className="text-[42px] text-primary">
              {name
                ? `Dra. ${decodeURIComponent(name as string)}`
                : "Dra. Nome do Médico"}
            </h1>

            <p className="mt-6 text-lg leading-[28px] text-darkGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit
              in. Fusce id ex id sem ullamcorper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum pellentesque nunc lectus,
              vitae lacinia ex hendrerit in. Fusce id ex id sem
              ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex
              hendrerit in. Fusce id ex id sem ullamcorper.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum pellentesque nunc
              lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem
              ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex
              hendrerit in. Fusce id ex id sem ullamcorper.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum pellentesque nunc
              lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem
              ullamcorper.
            </p>

            <br />
            <br />

            <h1 className="text-[42px] font-bold text-primary">
              Locais de atendimento
            </h1>
          </div>
        </div>
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
