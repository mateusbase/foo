import { Button } from "@nextui-org/react";
import { Circle, Plus } from "lucide-react";

export default function MedicalServiceCard({
  title,
  description,
  buttonText,
  icon = <Plus size={24} className="mr-4" />,
  backgroundUrl,
}: MedicalServiceCard): JSX.Element {
  return (
    <div className="flex h-[891px] w-[536px] flex-col overflow-hidden rounded-bl-[100px] border bg-white">
      <div
        className="h-[376px] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
        }}
      />
      <div className="flex h-[515px] flex-col items-center justify-between rounded-bl-[100px] bg-gradient-to-br from-primary-foreground to-secondary-foreground p-8">
        <Button
          className="flex h-[71px] w-[371px] items-center justify-start rounded-[12px] border-2 border-white bg-transparent pl-4 text-left text-[24px] font-black leading-[60px] text-white"
          startContent={icon}
        >
          Exclusividade Oncoclínicas
        </Button>

        <div className="mt-8 text-left">
          <h3 className="text-[62px] font-black leading-[60px] text-white">
            OC Acesso
          </h3>
          <p className="mt-4 w-[427px] text-[24px] font-bold leading-[30px] text-white">
            A solução da Oncoclínicas que surgiu para facilitar o acesso dos
            pacientes a um tratamento de excelência.
          </p>
        </div>

        <div className="mt-8 flex h-[29px] w-[29px] items-center justify-center rounded-full bg-white">
          <Circle className="text-primary-foreground" size={16} />
        </div>
      </div>
    </div>
  );
}
