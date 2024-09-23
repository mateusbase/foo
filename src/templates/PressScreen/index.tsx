import PageHeader from "@/components/PageHeader/page-header.component";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { Input, Textarea } from "@nextui-org/react";
import BaseButton from "@/components/Button";
import BaseContainer from "@/components/Container";

export default function PresScreen(): JSX.Element {
  return (
    <main>
      <PageHeader
        title="Imprensa"
        subtitle="O Grupo Oncoclínicas preza pela transparência e a informação precisa. Saiba como entrar em contato com a nossa assessoria de imprensa."
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-20">
        <Breadcrumb />

        <div className="mt-20 flex gap-5">
          <MedicalServiceCard
            subtitle="Saiba mais"
            serviceTitle="OC na mídia"
            serviceDescription="Confira o nosso clipping, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis rutrum varius. Vestibulum molestie laoreet"
          />

          <MedicalServiceCard
            subtitle="Saiba mais"
            serviceTitle="Releases"
            serviceDescription="Confira o nosso clipping, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis rutrum varius. Vestibulum molestie laoreet"
          />
        </div>
      </BaseContainer>

      <div className="w-full bg-gray-200 py-20">
        <div className="mx-auto w-full max-w-screen-lg text-center">
          <h2 className="text-4xl font-bold text-primary">
            Assessoria de imprensa
          </h2>
          <p className="mt-4 text-xl font-medium text-darkGray">
            Informações para Imprensa (11) 99134-4154 /
            paula.cohn@digitaltrix.com.br <br />
            Precisa falar com a nossa equipe de comunicação? Envie sua
            solicitação por aqui que entraremos em contato o mais rápido
            possível.
          </p>

          <div className="mt-10 space-y-6">
            <Input
              label="Nome"
              placeholder="Seu nome"
              size="lg"
              radius="full"
              variant="bordered"
              className="w-full overflow-hidden rounded-full bg-white"
            />

            <Input
              label="Email"
              placeholder="Seu email"
              size="lg"
              radius="full"
              variant="bordered"
              className="w-full overflow-hidden rounded-full bg-white"
            />

            <Textarea
              label="Mensagem"
              placeholder="Escreva sua mensagem aqui..."
              size="lg"
              radius="full"
              variant="bordered"
              className="w-full overflow-hidden rounded-sm bg-white"
            />

            <BaseButton
              className="font-bold text-white"
              color="primary"
              variant="solid"
              width="322px"
            >
              Enviar
            </BaseButton>
          </div>
        </div>
      </div>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
