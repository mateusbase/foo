import PageLayout from "@/components/PageLayout";
import GradientBanner from "@/components/GradientBanner";
import BaseButton from "@/components/Button";
import AlertComponent from "./components/AlertComponent";

export default function WorkWithUsScreen(): JSX.Element {
  return (
    <PageLayout>
      <AlertComponent />

      <div className="my-10">
        <GradientBanner image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png">
          <div className="mt-10 flex max-h-8 w-full flex-col">
            <div className="text-2xl font-normal">Estrutura profissional</div>
            <div className="mt-4 text-4xl font-thin lg:text-6xl">
              Nosso lema é <span className="font-light">“</span>
              <span className="font-medium">
                o paciente como centro de tudo
              </span>
              <span className="font-light">"</span>
            </div>
            <div className="mt-10">
              <BaseButton
                className="border-white text-white"
                size="lg"
                variant="bordered"
              >
                Veja as oportunidades
              </BaseButton>
            </div>
          </div>
        </GradientBanner>
      </div>
    </PageLayout>
  );
}
