import { Circle, Plus } from "lucide-react";
import { FaUser, FaMapMarkerAlt, FaFile } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { Button } from "@nextui-org/react";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "./components/breadcrumb.component";
import PageHeader from "./components/page-header.component";
import AlphabetSelector from "./components/alphabet-selector.component";

export default function ServiceScreen(): JSX.Element {
  const options = [
    { title: "Agende uma consulta ou exame", icon: IoIosCalendar },
    { title: "Encontre uma unidade", icon: FaMapMarkerAlt },
    { title: "Encontre um médico", icon: FaUser },
    { title: "Resultado de Exames", icon: FaFile },
  ];

  return (
    <main>
      <PageHeader />

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col py-28">
        {/* Breadcrumb */}
        <div className="flex justify-start">
          <Breadcrumb />
        </div>

        {/* Serviços Oncoclínicas */}
        <div>
          <div className="mt-20 flex justify-center">
            <div className="text-center">
              <h2 className="font-lato text-[62px] font-black leading-[74px] text-[#007D77]">
                Serviços Oncoclínicas
              </h2>
              <p className="font-lato mt-4 text-[26px] font-medium leading-[32px] text-[#5C5C5C]">
                Comodidade e priorização da vida em toda a jornada do tratamento
                do câncer. Conheça nossos serviços.
              </p>
            </div>
          </div>

          <AlphabetSelector />

          <div className="mt-10 grid grid-cols-4 gap-[26px]">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex h-[284px] w-[398px] flex-col justify-between rounded-[20px] border border-[#707070] bg-white p-6"
              >
                <div className="flex items-center">
                  <div className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-[#007D77]">
                    <Circle className="text-white" size={32} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-[26px] font-black leading-[32px] text-[#007D77]">
                      Análise Patológica
                    </h3>
                  </div>
                </div>

                <p className="mt-4 h-[66px] w-[312px] text-left text-[18px] font-medium leading-[22px] text-[#5C5C5C]">
                  Técnica responsável pela análise de células e tecidos com
                  alterações oncológicas.
                </p>

                <div className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#007D77]">
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
            className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-[#007D77]"
          >
            Ver todos
          </Button>

          <div className="mt-28 grid grid-cols-3 gap-[26px]">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex h-[891px] w-[536px] flex-col overflow-hidden rounded-bl-[100px] border bg-white"
              >
                <div
                  className="h-[376px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
                  }}
                />
                <div className="flex h-[515px] flex-col items-center justify-between rounded-bl-[100px] bg-gradient-to-br from-[#00B6AD] to-[#B799E6] p-8">
                  <Button
                    className="flex h-[71px] w-[371px] items-center justify-start rounded-[12px] border-2 border-white bg-transparent pl-4 text-left text-[24px] font-black leading-[60px] text-white"
                    startContent={<Plus size={24} className="mr-4" />}
                  >
                    Exclusividade Oncoclínicas
                  </Button>

                  <div className="mt-8 text-left">
                    <h3 className="text-[62px] font-black leading-[60px] text-white">
                      OC Acesso
                    </h3>
                    <p className="mt-4 w-[427px] text-[24px] font-bold leading-[30px] text-white">
                      A solução da Oncoclínicas que surgiu para facilitar o
                      acesso dos pacientes a um tratamento de excelência.
                    </p>
                  </div>

                  <div className="mt-8 flex h-[29px] w-[29px] items-center justify-center rounded-full bg-white">
                    <Circle className="text-[#00B6AD]" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OC Diagnósticos */}
        <div className="mt-5">
          <div className="mt-20 flex justify-center">
            <div className="text-center">
              <h2 className="font-lato text-[62px] font-black leading-[74px] text-[#007D77]">
                OC Diagnósticos
              </h2>
              <p className="font-lato mt-4 text-[26px] font-medium leading-[32px] text-[#5C5C5C]">
                Corpo clínico altamente especializado e os mais variados tipos
                de exames. Conheça a OC Diagnóstico.
              </p>
            </div>
          </div>

          <AlphabetSelector />

          <div className="mt-10 grid grid-cols-4 gap-[26px]">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex h-[284px] w-[398px] flex-col justify-between rounded-[20px] border border-[#707070] bg-white p-6"
              >
                <div className="flex items-center">
                  <div className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-[#007D77]">
                    <Circle className="text-white" size={32} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-[26px] font-black leading-[32px] text-[#007D77]">
                      Análise Patológica
                    </h3>
                  </div>
                </div>

                <p className="mt-4 h-[66px] w-[312px] text-left text-[18px] font-medium leading-[22px] text-[#5C5C5C]">
                  Técnica responsável pela análise de células e tecidos com
                  alterações oncológicas.
                </p>

                <div className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#007D77]">
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
            className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-[#007D77]"
          >
            Ver todos
          </Button>

          <div className="mt-28 grid grid-cols-3 gap-[26px]">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex h-[891px] w-[536px] flex-col overflow-hidden rounded-bl-[100px] border bg-white"
              >
                <div
                  className="h-[376px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
                  }}
                />
                <div className="flex h-[515px] flex-col items-center justify-between rounded-bl-[100px] bg-gradient-to-br from-[#00B6AD] to-[#B799E6] p-8">
                  <Button
                    className="flex h-[71px] w-[371px] items-center justify-start rounded-[12px] border-2 border-white bg-transparent pl-4 text-left text-[24px] font-black leading-[60px] text-white"
                    startContent={<Plus size={24} className="mr-4" />}
                  >
                    Exclusividade Oncoclínicas
                  </Button>

                  <div className="mt-8 text-left">
                    <h3 className="text-[62px] font-black leading-[60px] text-white">
                      OC Acesso
                    </h3>
                    <p className="mt-4 w-[427px] text-[24px] font-bold leading-[30px] text-white">
                      A solução da Oncoclínicas que surgiu para facilitar o
                      acesso dos pacientes a um tratamento de excelência.
                    </p>
                  </div>

                  <div className="mt-8 flex h-[29px] w-[29px] items-center justify-center rounded-full bg-white">
                    <Circle className="text-[#00B6AD]" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tratamentos Oncoclínicas */}
        <div className="mt-5">
          <div className="mt-20 flex justify-center">
            <div className="text-center">
              <h2 className="font-lato text-[62px] font-black leading-[74px] text-[#007D77]">
                Tratamentos Oncoclínicas
              </h2>
              <p className="font-lato mt-4 text-[26px] font-medium leading-[32px] text-[#5C5C5C]">
                As terapias mais eficazes para o tratamento do câncer. Conheça
                nossos métodos.
              </p>
            </div>
          </div>

          <AlphabetSelector />

          <div className="mt-10 grid grid-cols-4 gap-[26px]">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex h-[284px] w-[398px] flex-col justify-between rounded-[20px] border border-[#707070] bg-white p-6"
              >
                <div className="flex items-center">
                  <div className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-[#007D77]">
                    <Circle className="text-white" size={32} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-[26px] font-black leading-[32px] text-[#007D77]">
                      Análise Patológica
                    </h3>
                  </div>
                </div>

                <p className="mt-4 h-[66px] w-[312px] text-left text-[18px] font-medium leading-[22px] text-[#5C5C5C]">
                  Técnica responsável pela análise de células e tecidos com
                  alterações oncológicas.
                </p>

                <div className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#007D77]">
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
            className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-[#007D77]"
          >
            Ver todos
          </Button>

          <div className="mt-28 grid grid-cols-3 gap-[26px]">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex h-[891px] w-[536px] flex-col overflow-hidden rounded-bl-[100px] border bg-white"
              >
                <div
                  className="h-[376px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
                  }}
                />
                <div className="flex h-[515px] flex-col items-center justify-between rounded-bl-[100px] bg-gradient-to-br from-[#00B6AD] to-[#B799E6] p-8">
                  <Button
                    className="flex h-[71px] w-[371px] items-center justify-start rounded-[12px] border-2 border-white bg-transparent pl-4 text-left text-[24px] font-black leading-[60px] text-white"
                    startContent={<Plus size={24} className="mr-4" />}
                  >
                    Exclusividade Oncoclínicas
                  </Button>

                  <div className="mt-8 text-left">
                    <h3 className="text-[62px] font-black leading-[60px] text-white">
                      OC Acesso
                    </h3>
                    <p className="mt-4 w-[427px] text-[24px] font-bold leading-[30px] text-white">
                      A solução da Oncoclínicas que surgiu para facilitar o
                      acesso dos pacientes a um tratamento de excelência.
                    </p>
                  </div>

                  <div className="mt-8 flex h-[29px] w-[29px] items-center justify-center rounded-full bg-white">
                    <Circle className="text-[#00B6AD]" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MainOptionsActions options={options} />
    </main>
  );
}
