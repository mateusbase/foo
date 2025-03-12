import { useDeviceType } from "@/hooks/useDeviceType";
import { Image } from "@heroui/react";
import { Element } from "react-scroll";

const ProvenEfficacy = (): JSX.Element => {
  const deviceType = useDeviceType();

  return (
    <Element
      name="proven-efficacy"
      id="proven-efficacy"
      className="mb-8 text-darkGray"
    >
      <h1 className="mb-6 text-2xl text-primary md:text-title-lg">
        Eficácia comprovada cientificamente
      </h1>
      <p className="mt-3 text-xl md:mt-6 lg:mt-4">
        Estudos conduzidos pela Estomatologia da Oncoclínicas, sob a liderança
        da Dra. Renata Ferrari, e apresentados no maior congresso de oncologia
        do mundo, a ASCO (Sociedade Americana de Oncologia Clínica),
        demonstraram que a laserterapia desempenha um papel crucial na redução
        da incidência de mucosite em pacientes com câncer de cabeça e pescoço.
      </p>
      <div className="mt-8 flex h-[145px] flex-row items-center gap-3 rounded-[20px] border border-darkGray md:h-[201px] md:w-[593px] md:gap-6 lg:h-[247px] lg:w-[681px] lg:px-16">
        <Image
          src="/assets/images/oc-estomatologia/image (5).png"
          className="max-h-[160px] max-w-[130px] shrink-0 object-contain pl-6 md:max-h-[154px] md:max-w-[154px] lg:size-[160px]"
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-medium md:text-4xl">
            Dra. Renata Ferrari
          </h1>
          {deviceType === "desktop" && (
            <p className="text-2xl">CRO: MG 24703</p>
          )}
          <p className="md:text-2xl">
            Responsável pelo Programa de Estomatologia da Oncoclínicas&CO:
          </p>
        </div>
      </div>
    </Element>
  );
};

export default ProvenEfficacy;
