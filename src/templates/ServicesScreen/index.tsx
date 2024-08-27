import { Circle, Plus } from "lucide-react";
import AlphabetSelector from "./components/alphabet-selector.component";
import Breadcrumb from "./components/breadcrumb.component";
import PageHeader from "./components/page-header.component";
import { Button } from "@nextui-org/react";

export default function ServiceScreen(): JSX.Element {
  return (
    <main>
      <PageHeader />

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col py-28">
        <div className="flex justify-start">
          <Breadcrumb />
        </div>

        <div className="mt-20 flex justify-center">
          <div className="text-center">
            <h2 className="font-black text-[62px] leading-[74px] text-[#007D77] font-lato">
              Serviços Oncoclínicas
            </h2>
            <p className="mt-4 font-medium text-[26px] leading-[32px] text-[#5C5C5C] font-lato">
              Comodidade e priorização da vida em toda a jornada do tratamento do câncer. Conheça nossos serviços.
            </p>
          </div>
        </div>

        <AlphabetSelector />

        <div className="mt-10 grid grid-cols-4 gap-[26px]">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-[398px] h-[284px] bg-white border border-[#707070] rounded-[20px] p-6 flex flex-col justify-between"
            >
              <div className="flex items-center">
                <div className="w-[63px] h-[63px] bg-[#007D77] rounded-full flex items-center justify-center">
                  <Circle className="text-white" size={32} />
                </div>
                <div className="ml-4">
                  <h3 className="font-black text-[26px] leading-[32px] text-[#007D77]">
                    Análise Patológica
                  </h3>
                </div>
              </div>

              <p className="mt-4 w-[312px] h-[66px] text-left font-medium text-[18px] leading-[22px] text-[#5C5C5C]">
                Técnica responsável pela análise de células e tecidos com alterações oncológicas.
              </p>

              <div className="w-[29px] h-[29px] bg-[#007D77] rounded-full flex items-center justify-center">
                <Circle className="text-white" size={16} />
              </div>
            </div>
          ))}
        </div>

        <Button
          color="primary"
          variant="bordered"
          radius="sm"
          startContent={<Plus />}
          className="w-[176px] h-[50px] text-left font-black text-[18px] leading-[22px] text-[#007D77] pl-3 mt-8"
        >
          Ver todos
        </Button>

        <div className="mt-28 grid grid-cols-3 gap-[26px]">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-[536px] h-[891px] bg-white border rounded-bl-[100px] overflow-hidden flex flex-col"
            >
              <div
                className="h-[376px] bg-no-repeat bg-cover"
                style={{
                  backgroundImage: "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
                }}
              ></div>
              <div className="h-[515px] bg-gradient-to-br from-[#00B6AD] to-[#B799E6] rounded-bl-[100px] p-8 flex flex-col justify-between items-center">
                <Button
                  className="w-[371px] h-[71px] bg-transparent border-2 border-white rounded-[12px] text-left font-black text-[24px] leading-[60px] text-white flex items-center justify-start pl-4"
                  startContent={<Plus size={24} className="mr-4" />}
                >
                  Exclusividade Oncoclínicas
                </Button>

                <div className="mt-8 text-left">
                  <h3 className="font-black text-[62px] leading-[60px] text-white">
                    OC Acesso
                  </h3>
                  <p className="mt-4 text-[24px] leading-[30px] font-bold text-white w-[427px]">
                    A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência.
                  </p>
                </div>

                <div className="w-[29px] h-[29px] bg-white rounded-full flex items-center justify-center mt-8">
                  <Circle className="text-[#00B6AD]" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
