import PageLayout from "@/components/PageLayout";
import { IoIosCalendar } from "react-icons/io";
import { Button } from "@/components/Button";
import { SingleADoctorProps } from "./types";

export function SingleDoctor({
  data,
  breadcrumbs,
}: SingleADoctorProps): JSX.Element {
  return (
    <main>
      <PageLayout title={data.info.name} breadcrumbs={breadcrumbs} showSections>
        <div className="relative mt-14 hidden lg:mt-0 lg:block">
          <img
            src={data.images.background.url || "/assets/images/capa-doctor.png"}
            alt={data.images.background.alt}
            className="h-[466px] w-full rounded-2xl object-cover"
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-center lg:mt-14 lg:flex-row lg:items-start lg:gap-14">
          <div className="relative flex flex-col items-center lg:bottom-48 lg:ml-5">
            <img
              src={data.images.picture.url || "/assets/images/avatar.png"}
              alt={`Foto de ${data.info.name}`}
              className="h-[316px] w-[320px] rounded-2xl object-cover"
            />

            <div className="mt-8 text-center lg:text-left">
              <h1 className="m-4 block text-3xl text-darkGray lg:hidden">
                {data.info.name}
              </h1>

              <p className="text-xl font-bold text-darkGray">
                {data.professionalNumbers.crms.map((crm) => (
                  <span key={crm.number}>
                    CRM-{crm.state}: {crm.number}
                    <br />
                  </span>
                ))}
              </p>

              <p className="mt-1 text-lg text-darkGray">
                {data.references.specialties[0]?.basicInfo.name}
              </p>

              <Button
                color="secondary"
                className="mt-8 w-[322px] gap-3 rounded-md text-white lg:w-[322px]"
              >
                <IoIosCalendar size={24} />
                Agende uma consulta
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center md:mt-0 md:text-left lg:mt-0 lg:flex-1">
            <h1 className="hidden text-[62px] text-primary lg:block">
              {data.info.name}
            </h1>

            <p
              className="mt-6 text-left text-sm leading-[22px] text-darkGray lg:text-lg"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: data.info.description }}
            />

            <div className="my-10 flex flex-col md:w-full md:flex-row md:items-start md:gap-8 lg:flex-col">
              <div className="flex-1">
                <h1 className="my-6 text-left text-2xl text-primary md:text-[32px]">
                  Local de atendimento
                </h1>

                {data.references.units.map((unit) => (
                  <ul key={unit.path} className="ml-6 list-outside list-disc">
                    <li className="text-left text-sm text-darkGray md:text-base">
                      {unit.name}
                    </li>
                  </ul>
                ))}
              </div>

              <div className="flex-1">
                <h1 className="my-6 text-left text-2xl text-primary md:text-[32px]">
                  Especialização
                </h1>

                {data.references.specialties.map((spec) => (
                  <ul key={spec.path} className="ml-6 list-outside list-disc">
                    <li className="text-left text-base text-darkGray">
                      {spec.basicInfo.name}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </main>
  );
}
