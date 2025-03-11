import BaseButton from "@/components/Button";
import { useDeviceType } from "@/hooks/useDeviceType";
import { Image } from "@heroui/react";

const SpecialistCard = (): JSX.Element => {
  const deviceType = useDeviceType();

  return (
    <div className="mb-8 text-xl text-darkGray lg:text-base xl:text-xl">
      <section className="flex h-[144px] flex-row items-center gap-4">
        <Image
          src="/assets/images/residencia/icons/inscrições/Vector.svg"
          radius="none"
          className="size-[29.5px] shrink-0"
        />
        <div className="mt-4 flex flex-col gap-6">
          <p>Inscrições até 1º de fevereiro de 2024</p>
          <p>
            <span className="font-bold">
              Pré-requisito:
              <br />
            </span>
            Ter concluído a residência em clínica médica
          </p>
        </div>
      </section>

      <section className="flex h-[144px] flex-row items-center gap-4">
        <Image
          src="/assets/images/residencia/icons/inscrições/Vector (1).svg"
          radius="none"
          className="size-[29.5px] shrink-0"
        />
        <div className="mt-4 flex flex-col gap-6">
          <p>
            <span className="font-bold">Duração:</span> 3 anos
          </p>
          <p>
            <span className="font-bold">Vagas:</span> 2 por ano
          </p>
        </div>
      </section>

      <section className="mb-6 flex h-[144px] flex-row items-start gap-4 md:mb-9 lg:mb-4 xl:mb-9">
        <Image
          src="/assets/images/residencia/icons/inscrições/Vector (2).svg"
          radius="none"
          className="mt-5 size-[29.5px] shrink-0"
        />
        <div className="mt-4 flex flex-col">
          <p className="font-bold">Onde vai ser a residência:</p>
          <p>Oncoclínicas Botafogo (RJ)</p>
          <p>Oncoclínicas Ipanema (RJ)</p>
          <p>Hospital Marcos Moraes (RJ)</p>
          <p>Casa de saeude São José (RJ)</p>
        </div>
      </section>
      <div className="flex flex-col gap-3 md:w-3/5 md:flex-row lg:w-full">
        <BaseButton
          className={`text-white md:w-[229px] xl:w-[229px] ${deviceType !== "desktop" ? "bg-primary" : "bg-darkGray"}`}
        >
          Inscrições encerradas
        </BaseButton>
        <BaseButton className="border border-primary bg-white text-primary md:w-[215px] xl:w-[215px]">
          Ler edital completo
        </BaseButton>
      </div>
    </div>
  );
};

export default SpecialistCard;
