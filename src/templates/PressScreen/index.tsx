import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { Textarea } from "@heroui/react";
import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function PresScreen(): JSX.Element {
  return (
    <main>
      <PageLayout
        subtitle="O Grupo Oncoclínicas preza pela transparência e a informação precisa. Saiba como entrar em contato com a nossa assessoria de imprensa."
        mainOptions={false}
      >
        <div className="mb-10 mt-20 flex flex-col gap-5 md:flex-row">
          <Link href="/clipping" passHref>
            <MedicalServiceCard
              subtitle="Saiba mais"
              serviceTitle="OC na mídia"
              serviceDescription="Confira o nosso clipping, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis rutrum varius. Vestibulum molestie laoreet"
            />
          </Link>

          <Link href="/releases" passHref>
            <MedicalServiceCard
              subtitle="Leia"
              serviceTitle="Releases"
              serviceDescription="Confira o nosso clipping, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis rutrum varius. Vestibulum molestie laoreet"
            />
          </Link>
        </div>
      </PageLayout>

      <div className="w-full bg-gray-200 py-20">
        <div className="mx-auto w-full max-w-screen-lg px-4 text-center">
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
            <BaseInput
              placeholder="Seu nome"
              size="lg"
              radius="full"
              variant="bordered"
              className="w-full overflow-hidden rounded-full bg-white"
            />

            <BaseInput
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
              className="w-full overflow-hidden rounded-xl bg-white"
            />

            <BaseButton
              className="w-[322px] font-bold text-white"
              color="primary"
              variant="solid"
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
