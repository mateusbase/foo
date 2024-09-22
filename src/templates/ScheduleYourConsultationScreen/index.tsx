import PageHeader from "@/components/PageHeader/page-header.component";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import { Input, Select, SelectItem } from "@nextui-org/react";
import BaseButton from "@/components/Button";

export default function ScheduleYourConsultationScreen(): JSX.Element {
  return (
    <main>
      <PageHeader
        title="Agende sua consulta"
        subtitle="Oncoclínicas"
        showContactSection={false}
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col py-20">
        <Breadcrumb />

        <div className="mt-20 flex flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-extralight text-primary">
              Agende sua consulta ou exame
            </h1>
            <p className="mt-2 text-lg text-primary">
              Todo o cuidado que a sua vida merece
            </p>

            <div className="mt-10">
              <Input
                placeholder="Nome da unidade"
                size="lg"
                radius="full"
                variant="bordered"
              />
            </div>

            <div className="mt-6">
              <Input
                placeholder="Nome da unidade"
                size="lg"
                radius="full"
                variant="bordered"
              />
            </div>

            <div className="mt-6 flex gap-4">
              <Select
                color="primary"
                variant="bordered"
                label="UF"
                radius="full"
                size="sm"
              >
                <SelectItem key={1} value="1">
                  SP
                </SelectItem>
                <SelectItem key={2} value="2">
                  RJ
                </SelectItem>
              </Select>

              <Select
                color="primary"
                variant="bordered"
                label="UF"
                radius="full"
                size="sm"
              >
                <SelectItem key={1} value="1">
                  SP
                </SelectItem>
                <SelectItem key={2} value="2">
                  RJ
                </SelectItem>
              </Select>
            </div>

            <div className="mt-6">
              <Select
                color="primary"
                variant="bordered"
                label="UF"
                radius="full"
                size="sm"
              >
                <SelectItem key={1} value="1">
                  SP
                </SelectItem>
                <SelectItem key={2} value="2">
                  RJ
                </SelectItem>
              </Select>
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
            <p className="mt-4 text-left text-gray-700">
              Fusce ac ligula quis eros convallis rhoncus. Nam rutrum ligula at
              tellus tempor, at pharetra mauris dictum. Sed quis dolor
              consectetur, laoreet arcu ut, tempor est. Praesent bibendum
              fermentum ipsum id suscipit. Morbi sit amet eros libero.
            </p>
          </div>
        </div>
      </div>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
