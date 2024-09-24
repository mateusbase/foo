import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import BaseButton from "@/components/Button";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import BaseSelect from "@/components/Select";
import BaseInput from "@/components/Input";

export default function ScheduleYourConsultationScreen(): JSX.Element {
  return (
    <main>
      <div className="block bg-gray-200 p-6 md:hidden">
        <Breadcrumb />
      </div>

      <PageHeader
        title="Agende sua consulta"
        subtitle="Oncoclínicas"
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-0 md:py-20">
        <div className="hidden px-10 md:block md:px-8">
          <Breadcrumb />
        </div>

        <div className="mt-5 flex flex-col gap-10 md:mt-20 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-extralight text-primary">
              Agende sua consulta ou exame
            </h1>
            <p className="mt-2 text-lg text-primary">
              Todo o cuidado que a sua vida merece
            </p>

            <div className="mt-10">
              <BaseInput
                placeholder="Nome da unidade"
                size="lg"
                radius="full"
                variant="bordered"
              />
            </div>

            <div className="mt-6">
              <BaseInput
                placeholder="Nome da unidade"
                size="lg"
                radius="full"
                variant="bordered"
              />
            </div>

            <div className="mt-6 flex gap-4">
              <BaseSelect
                color="primary"
                variant="bordered"
                label="UF"
                radius="full"
                size="sm"
                options={[
                  { key: 1, value: "1", label: "SP" },
                  { key: 2, value: "2", label: "RJ" },
                ]}
              />

              <BaseSelect
                color="primary"
                variant="bordered"
                label="UF"
                radius="full"
                size="sm"
                options={[
                  { key: 1, value: "1", label: "SP" },
                  { key: 2, value: "2", label: "RJ" },
                ]}
              />
            </div>

            <div className="mt-6">
              <BaseSelect
                color="primary"
                variant="bordered"
                label="UF"
                radius="full"
                size="sm"
                options={[
                  { key: 1, value: "1", label: "SP" },
                  { key: 2, value: "2", label: "RJ" },
                ]}
              />
            </div>

            <div className="mt-6">
              <BaseButton
                color="primary"
                className="w-full text-white lg:w-auto"
                width="322px"
              >
                Agendar
              </BaseButton>
            </div>
          </div>

          <div className="flex w-full flex-col items-center lg:w-1/2">
            <img
              src="https://i.postimg.cc/Y0sxRgW5/Captura-de-tela-2024-09-22-152639.png"
              alt="Imagem de consulta"
              className="w-full object-cover"
            />
            <p className="mb-5 mt-4 text-left text-gray-700">
              Fusce ac ligula quis eros convallis rhoncus. Nam rutrum ligula at
              tellus tempor, at pharetra mauris dictum. Sed quis dolor
              consectetur, laoreet arcu ut, tempor est. Praesent bibendum
              fermentum ipsum id suscipit. Morbi sit amet eros libero.
            </p>
          </div>
        </div>
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
