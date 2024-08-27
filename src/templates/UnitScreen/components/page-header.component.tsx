import { MessageSquare, Phone, MapPin } from "lucide-react";

const PageHeader = () => {
  return (
    <div className="relative h-[343px] w-full bg-gradient-to-r from-[#00B6AD] to-[#BA99E7]">
      <div className="absolute inset-0 flex justify-center">

        <div className="flex w-full max-w-screen-2xl flex-col justify-center items-center lg:items-start ml-0 lg:ml-24">
          <div className="flex flex-col lg:items-start lg:justify-start sm:items-center sm:justify-between sm:flex-row">
            <div className="lg:w-full sm:w-[272px]">
              <h1 className="font-bold text-white text-[26px] leading-[32px] sm:text-[48px] sm:leading-[56px] lg:text-[60px] lg:leading-[72px]">
                Oncoclínicas Faria Lima
              </h1>
              <div className="w-[272px] lg:w-full">
                <p className="mt-2 text-white text-[15px] leading-[20px] sm:text-[16px] sm:leading-[22px] lg:mt-4 lg:text-[18px] lg:leading-[24px]">
                  Avenida Brigadeiro Faria Lima, 4.300 - 6º e 10º Andar - Vila Olímpia São Paulo/SP
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:w-[322px] lg:hidden">
              <button className="bg-white text-[#007D77] font-semibold w-[322px] h-[44px] rounded">
                Botão
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="hidden lg:flex absolute bottom-[-56.5px] right-0 h-[113px] w-full max-w-[1256px] items-center justify-between rounded-l-[20px] bg-[#007D77] pl-6 pr-10 text-white mx-auto">
        <div className="flex items-center gap-8 text-[24px] font-medium ml-[30px]">
          <a href="#" className="flex items-center gap-2 hover:underline">
            <MessageSquare size={24} /> Fale por WhatsApp
          </a>
          <span>|</span>
          <a href="#" className="flex items-center gap-2 hover:underline">
            <Phone size={24} /> Ligar na central de atendimento
          </a>
          <span>|</span>
          <a href="#" className="flex items-center gap-2 hover:underline">
            <MapPin size={24} /> Mostrar no mapa
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
