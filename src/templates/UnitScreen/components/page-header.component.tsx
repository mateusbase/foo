import { MessageSquare, Phone, MapPin } from "lucide-react";

const PageHeader = () => {
  return (
    <div className="relative h-[343px] w-full bg-gradient-to-r from-[#00B6AD] to-[#BA99E7]">
      <div className="absolute inset-0 flex justify-center">
        <div className="flex w-full max-w-screen-2xl flex-col justify-center ml-24">
          <h1 className="font-bold text-white text-[60px] leading-[72px]">
            Oncoclínicas Faria Lima
          </h1>
          <p className="mt-4 text-white text-[18px] leading-[24px] font-medium">
            Avenida Brigadeiro Faria Lima, 4.300 - 6º e 10º Andar - Vila Olímpia São Paulo/SP
          </p>
        </div>
      </div>

      <div className="absolute bottom-[-56.5px] right-0 flex h-[113px] w-[1256px] items-center justify-between rounded-l-[20px] bg-[#007D77] pl-6 pr-10 text-white hidden lg:flex">
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
